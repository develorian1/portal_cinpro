'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@/api/hooks/useQuery';
import { CALENDARIO_ENDPOINTS } from '@/api/endpoints';
import styles from './Calendario.module.css';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  type: 'tax-deadline' | 'billing' | 'cert-expiring';
  description?: string;
  clientIds?: string[];
  clientNames?: string[];
}

interface TaxDeadline {
  id: string;
  type: string;
  deadline_date: string;
}

interface BillingEvent {
  id: string;
  client_id: string;
  client_name: string;
  next_billing_date: string;
}

interface CertExpiring {
  id: string;
  client_id: string;
  client_name: string;
  valid_to: string;
}

export default function Calendario() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  // Fetch tax deadlines - disable if API is not available
  const { data: taxDeadlines, error: taxError, isLoading: taxLoading } = useQuery<TaxDeadline[]>(
    'tax-deadlines',
    `${CALENDARIO_ENDPOINTS.EVENTS}?type=tax-deadlines`,
    {
      requiresAuth: false,
      retryOnError: false, // Don't retry after errors to prevent infinite loops
      onError: (error) => {
        // Silently handle errors - API might not be available yet
        console.warn('Failed to fetch tax deadlines:', error.message);
      },
    }
  );

  // Fetch billing events - disable if API is not available
  const { data: billingEvents, error: billingError, isLoading: billingLoading } = useQuery<BillingEvent[]>(
    'billing-events',
    `${CALENDARIO_ENDPOINTS.EVENTS}?type=billing`,
    {
      requiresAuth: false,
      retryOnError: false, // Don't retry after errors to prevent infinite loops
      onError: (error) => {
        // Silently handle errors - API might not be available yet
        console.warn('Failed to fetch billing events:', error.message);
      },
    }
  );

  // Fetch expiring certificates - disable if API is not available
  const { data: certExpiring, error: certError, isLoading: certLoading } = useQuery<CertExpiring[]>(
    'cert-expiring',
    `${CALENDARIO_ENDPOINTS.EVENTS}?type=cert-expiring`,
    {
      requiresAuth: false,
      retryOnError: false, // Don't retry after errors to prevent infinite loops
      onError: (error) => {
        // Silently handle errors - API might not be available yet
        console.warn('Failed to fetch expiring certificates:', error.message);
      },
    }
  );

  // Transform API data into calendar events
  useEffect(() => {
    const calendarEvents: CalendarEvent[] = [];

    // Tax deadlines (Red)
    if (taxDeadlines) {
      taxDeadlines.forEach((tax) => {
        calendarEvents.push({
          id: `tax-${tax.id}`,
          title: `Fecha Límite Fiscal - ${tax.type}`,
          date: new Date(tax.deadline_date),
          type: 'tax-deadline',
          description: `Fecha límite para presentación de ${tax.type}`,
        });
      });
    }

    // Billing events (Green)
    if (billingEvents) {
      const billingByDate = new Map<string, BillingEvent[]>();
      billingEvents.forEach((billing) => {
        const dateKey = new Date(billing.next_billing_date).toDateString();
        if (!billingByDate.has(dateKey)) {
          billingByDate.set(dateKey, []);
        }
        billingByDate.get(dateKey)!.push(billing);
      });

      billingByDate.forEach((billings, dateKey) => {
        const date = new Date(dateKey);
        calendarEvents.push({
          id: `billing-${dateKey}`,
          title: billings.length === 1 
            ? `Facturación - ${billings[0].client_name}`
            : `Facturación - ${billings.length} clientes`,
          date: date,
          type: 'billing',
          description: `Ciclo de facturación para ${billings.length} cliente(s)`,
          clientIds: billings.map(b => b.client_id),
          clientNames: billings.map(b => b.client_name),
        });
      });
    }

    // Expiring certificates (Blue)
    if (certExpiring) {
      const certsByDate = new Map<string, CertExpiring[]>();
      certExpiring.forEach((cert) => {
        const dateKey = new Date(cert.valid_to).toDateString();
        if (!certsByDate.has(dateKey)) {
          certsByDate.set(dateKey, []);
        }
        certsByDate.get(dateKey)!.push(cert);
      });

      certsByDate.forEach((certs, dateKey) => {
        const date = new Date(dateKey);
        calendarEvents.push({
          id: `cert-${dateKey}`,
          title: certs.length === 1
            ? `Certificado Expirando - ${certs[0].client_name}`
            : `${certs.length} Certificados Expirando`,
          date: date,
          type: 'cert-expiring',
          description: `${certs.length} certificado(s) expirando`,
          clientIds: certs.map(c => c.client_id),
          clientNames: certs.map(c => c.client_name),
        });
      });
    }

    setEvents(calendarEvents);
  }, [taxDeadlines, billingEvents, certExpiring]);

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const getEventTypeClass = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'tax-deadline':
        return styles.taxDeadline;
      case 'billing':
        return styles.billing;
      case 'cert-expiring':
        return styles.certExpiring;
      default:
        return '';
    }
  };

  const getEventTypeLabel = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'tax-deadline':
        return 'Fecha Límite Fiscal';
      case 'billing':
        return 'Facturación';
      case 'cert-expiring':
        return 'Certificados Expirando';
      default:
        return '';
    }
  };

  const getEventTypeColor = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'tax-deadline':
        return '#ef4444'; // Red
      case 'billing':
        return '#22c55e'; // Green
      case 'cert-expiring':
        return '#3b82f6'; // Blue
      default:
        return '#6b7280';
    }
  };

  // Generate calendar days for current month
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const calendarDays: (Date | null)[] = [];
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  // Add all days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(new Date(year, month, day));
  }

  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (viewMode === 'week') {
        // Navigate by weeks
        const daysToAdd = direction === 'next' ? 7 : -7;
        newDate.setDate(prev.getDate() + daysToAdd);
      } else {
        // Navigate by months
        if (direction === 'prev') {
          newDate.setMonth(prev.getMonth() - 1);
        } else {
          newDate.setMonth(prev.getMonth() + 1);
        }
      }
      return newDate;
    });
  };

  // Get the start of the week (Sunday)
  const getWeekStart = (date: Date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    const day = d.getDay();
    const diff = d.getDate() - day;
    const weekStart = new Date(d);
    weekStart.setDate(diff);
    return weekStart;
  };

  // Generate week days
  const getWeekDays = () => {
    const weekStart = getWeekStart(currentDate);
    const weekDays: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      weekDays.push(day);
    }
    return weekDays;
  };

  const weekDays = getWeekDays();
  const weekStartDate = weekDays[0];
  const weekEndDate = weekDays[6];

  const isLoading = taxLoading || billingLoading || certLoading;
  const hasErrors = taxError || billingError || certError;

  return (
    <div className={styles.calendario}>
      {hasErrors && !isLoading && (
        <div className={styles.apiWarning}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span>No se pudo conectar con el servidor. Mostrando calendario sin eventos.</span>
        </div>
      )}
      <div className={styles.calendarContainer}>
        <div className={styles.calendarHeader}>
          <div className={styles.viewModeSelector}>
            <button
              className={`${styles.viewModeBtn} ${viewMode === 'month' ? styles.active : ''}`}
              onClick={() => setViewMode('month')}
            >
              Mes
            </button>
            <button
              className={`${styles.viewModeBtn} ${viewMode === 'week' ? styles.active : ''}`}
              onClick={() => setViewMode('week')}
            >
              Semana
            </button>
          </div>
          <div className={styles.monthNavigation}>
            <button className={styles.navButton} onClick={() => navigateMonth('prev')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <h2 className={styles.monthTitle}>
              {viewMode === 'week' 
                ? `${weekStartDate.toLocaleDateString('es-MX', { month: 'short', day: 'numeric' })} - ${weekEndDate.toLocaleDateString('es-MX', { month: 'short', day: 'numeric', year: 'numeric' })}`
                : `${monthNames[month]} ${year}`
              }
            </h2>
            <button className={styles.navButton} onClick={() => navigateMonth('next')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.taxDeadline}`} />
            <span>Fechas Límite Fiscales</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.billing}`} />
            <span>Facturación</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.certExpiring}`} />
            <span>Certificados Expirando</span>
          </div>
        </div>

        {viewMode === 'month' && (
          <div className={styles.calendarGrid}>
            <div className={styles.weekdayHeader}>
              {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                <div key={day} className={styles.weekday}>
                  {day}
                </div>
              ))}
            </div>
            <div className={styles.calendarDays}>
              {calendarDays.map((date, index) => {
                if (!date) {
                  return <div key={`empty-${index}`} className={styles.calendarDay} />;
                }

                const dayEvents = getEventsForDate(date);
                const isToday =
                  date.getDate() === new Date().getDate() &&
                  date.getMonth() === new Date().getMonth() &&
                  date.getFullYear() === new Date().getFullYear();

                return (
                  <div
                    key={date.toISOString()}
                    className={`${styles.calendarDay} ${isToday ? styles.today : ''}`}
                    onClick={() => {
                      if (dayEvents.length > 0) {
                        setSelectedEvent(dayEvents[0]);
                      }
                    }}
                  >
                    <div className={styles.dayNumber}>{date.getDate()}</div>
                    <div className={styles.dayEvents}>
                      {dayEvents.slice(0, 3).map((event) => (
                        <div
                          key={event.id}
                          className={`${styles.eventDot} ${getEventTypeClass(event.type)}`}
                          title={event.title}
                        />
                      ))}
                      {dayEvents.length > 3 && (
                        <div className={styles.moreEvents}>+{dayEvents.length - 3}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {viewMode === 'week' && (
          <div className={styles.weekView}>
            <div className={styles.weekdayHeader}>
              {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                <div key={day} className={styles.weekday}>
                  {day}
                </div>
              ))}
            </div>
            <div className={styles.weekDays}>
              {weekDays.map((date) => {
                const dayEvents = getEventsForDate(date);
                const isToday =
                  date.getDate() === new Date().getDate() &&
                  date.getMonth() === new Date().getMonth() &&
                  date.getFullYear() === new Date().getFullYear();

                return (
                  <div
                    key={date.toISOString()}
                    className={`${styles.weekDay} ${isToday ? styles.today : ''}`}
                  >
                    <div className={styles.weekDayHeader}>
                      <div className={styles.dayNumber}>{date.getDate()}</div>
                      <div className={styles.dayName}>
                        {date.toLocaleDateString('es-MX', { weekday: 'short' })}
                      </div>
                    </div>
                    <div className={styles.weekDayEvents}>
                      {dayEvents.length === 0 ? (
                        <div className={styles.emptyDay}>Sin eventos</div>
                      ) : (
                        dayEvents.map((event) => (
                          <div
                            key={event.id}
                            className={`${styles.weekEventItem} ${getEventTypeClass(event.type)}`}
                            onClick={() => setSelectedEvent(event)}
                          >
                            <div className={styles.weekEventTime}>
                              {event.date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
                            </div>
                            <div className={styles.weekEventTitle}>{event.title}</div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className={styles.eventModal} onClick={() => setSelectedEvent(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{selectedEvent.title}</h3>
              <button
                className={styles.closeButton}
                onClick={() => setSelectedEvent(null)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalEventType}>
                <span 
                  className={`${styles.typeBadge} ${getEventTypeClass(selectedEvent.type)}`}
                  style={{ backgroundColor: getEventTypeColor(selectedEvent.type) }}
                >
                  {getEventTypeLabel(selectedEvent.type)}
                </span>
              </div>
              <div className={styles.modalDate}>
                {selectedEvent.date.toLocaleDateString('es-MX', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              {selectedEvent.description && (
                <div className={styles.modalDescription}>{selectedEvent.description}</div>
              )}
              {selectedEvent.clientNames && selectedEvent.clientNames.length > 0 && (
                <div className={styles.modalClients}>
                  <h4 className={styles.modalClientsTitle}>
                    {selectedEvent.type === 'billing' ? 'Clientes a Facturar:' : 'Clientes Afectados:'}
                  </h4>
                  <ul className={styles.modalClientsList}>
                    {selectedEvent.clientNames.map((name, idx) => (
                      <li key={idx}>{name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

