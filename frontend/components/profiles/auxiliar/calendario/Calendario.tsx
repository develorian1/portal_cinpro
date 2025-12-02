'use client';

import { useState, useEffect } from 'react';
import { useWorkspaceNavigation } from '@/hooks/useWorkspaceNavigation';
import { useNotifications } from '@/contexts/NotificationContext';
import styles from './Calendario.module.css';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  type: 'tax-deadline' | 'billing-cycle' | 'reconciliation-deadline' | 'task-due-date';
  description?: string;
  clientIds?: string[];
  clientNames?: string[];
}

export default function Calendario() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [filteredType, setFilteredType] = useState<'all' | CalendarEvent['type']>('all');
  const { goToClientWorkspace } = useWorkspaceNavigation();
  const { acknowledgeByClient } = useNotifications();

  useEffect(() => {
    // TODO: Replace with actual API calls
    // Fetch events from API endpoints
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const getDate = (daysFromToday: number) => {
      const date = new Date(today);
      date.setDate(date.getDate() + daysFromToday);
      return date;
    };

    const calendarEvents: CalendarEvent[] = [
      // Day 2 - Multiple activities (4 events)
      {
        id: '1',
        title: 'Fecha Límite SAT - Declaración Mensual',
        date: getDate(2),
        type: 'tax-deadline',
        description: 'Fecha límite para presentar declaración mensual del SAT',
      },
      {
        id: '2',
        title: 'Ciclo de Facturación - Acme Corp',
        date: getDate(2),
        type: 'billing-cycle',
        description: 'Ciclo de facturación mensual',
        clientNames: ['Acme Corp'],
        clientIds: ['client-1'],
      },
      {
        id: '3',
        title: 'Conciliación - Global Industries',
        date: getDate(2),
        type: 'reconciliation-deadline',
        description: 'Fecha límite para conciliar estados de cuenta',
        clientNames: ['Global Industries'],
        clientIds: ['client-1'],
      },
      {
        id: '4',
        title: 'Tarea: Procesar Facturas SAT',
        date: getDate(2),
        type: 'task-due-date',
        description: 'Tarea pendiente de procesamiento de facturas',
        clientNames: ['Enterprise Group'],
        clientIds: ['client-1'],
      },
      // Day 3 - Multiple activities (3 events)
      {
        id: '5',
        title: 'Fecha Límite SAT - IVA',
        date: getDate(3),
        type: 'tax-deadline',
        description: 'Fecha límite para presentar IVA mensual',
      },
      {
        id: '6',
        title: 'Ciclo de Facturación - Tech Solutions',
        date: getDate(3),
        type: 'billing-cycle',
        description: 'Ciclo de facturación mensual',
        clientNames: ['Tech Solutions'],
      },
      {
        id: '7',
        title: 'Tarea: Validar CFDI',
        date: getDate(3),
        type: 'task-due-date',
        description: 'Validar CFDI recibidos',
        clientNames: ['Acme Corp'],
        clientIds: ['client-1'],
      },
      // Day 5 - Multiple activities (5 events - will show +2)
      {
        id: '8',
        title: 'Fecha Límite SAT - ISR',
        date: getDate(5),
        type: 'tax-deadline',
        description: 'Fecha límite para presentar ISR mensual',
      },
      {
        id: '9',
        title: 'Ciclo de Facturación - Startup Ventures',
        date: getDate(5),
        type: 'billing-cycle',
        description: 'Ciclo de facturación mensual',
        clientNames: ['Startup Ventures'],
      },
      {
        id: '10',
        title: 'Conciliación - Enterprise Group',
        date: getDate(5),
        type: 'reconciliation-deadline',
        description: 'Fecha límite para conciliar estados de cuenta',
        clientNames: ['Enterprise Group'],
        clientIds: ['client-1'],
      },
      {
        id: '11',
        title: 'Tarea: Revisar Estados de Cuenta',
        date: getDate(5),
        type: 'task-due-date',
        description: 'Revisar y validar estados de cuenta bancarios',
        clientNames: ['Global Industries'],
        clientIds: ['client-1'],
      },
      {
        id: '12',
        title: 'Tarea: Generar Reportes Mensuales',
        date: getDate(5),
        type: 'task-due-date',
        description: 'Generar reportes mensuales para clientes',
        clientNames: ['Tech Solutions'],
      },
      // Day 7 - Multiple activities (2 events)
      {
        id: '13',
        title: 'Conciliación - Startup Ventures',
        date: getDate(7),
        type: 'reconciliation-deadline',
        description: 'Fecha límite para conciliar estados de cuenta',
        clientNames: ['Startup Ventures'],
      },
      {
        id: '14',
        title: 'Ciclo de Facturación - Global Industries',
        date: getDate(7),
        type: 'billing-cycle',
        description: 'Ciclo de facturación mensual',
        clientNames: ['Global Industries'],
        clientIds: ['client-1'],
      },
      // Day 10 - Multiple activities (4 events)
      {
        id: '15',
        title: 'Fecha Límite SAT - Retenciones',
        date: getDate(10),
        type: 'tax-deadline',
        description: 'Fecha límite para presentar retenciones',
      },
      {
        id: '16',
        title: 'Ciclo de Facturación - Acme Corp',
        date: getDate(10),
        type: 'billing-cycle',
        description: 'Ciclo de facturación mensual',
        clientNames: ['Acme Corp'],
        clientIds: ['client-1'],
      },
      {
        id: '17',
        title: 'Conciliación - Tech Solutions',
        date: getDate(10),
        type: 'reconciliation-deadline',
        description: 'Fecha límite para conciliar estados de cuenta',
        clientNames: ['Tech Solutions'],
      },
      {
        id: '18',
        title: 'Tarea: Actualizar Catálogo de Cuentas',
        date: getDate(10),
        type: 'task-due-date',
        description: 'Actualizar catálogo de cuentas contables',
        clientNames: ['Enterprise Group'],
        clientIds: ['client-1'],
      },
    ];

    setEvents(calendarEvents);
  }, []);

  const filteredEvents = filteredType === 'all' 
    ? events 
    : events.filter(e => e.type === filteredType);

  const getEventsForDate = (date: Date) => {
    return filteredEvents.filter(
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
      case 'billing-cycle':
        return styles.billingCycle;
      case 'reconciliation-deadline':
        return styles.reconciliationDeadline;
      case 'task-due-date':
        return styles.taskDueDate;
      default:
        return '';
    }
  };

  const getEventTypeLabel = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'tax-deadline':
        return 'Fecha Límite Fiscal';
      case 'billing-cycle':
        return 'Ciclo de Facturación';
      case 'reconciliation-deadline':
        return 'Conciliación';
      case 'task-due-date':
        return 'Tarea';
      default:
        return '';
    }
  };

  const getEventTypeColor = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'tax-deadline':
        return '#ef4444'; // Red
      case 'billing-cycle':
        return '#22c55e'; // Green
      case 'reconciliation-deadline':
        return '#3b82f6'; // Blue
      case 'task-due-date':
        return '#f59e0b'; // Orange
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

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    if (event.clientIds && event.clientIds.length > 0) {
      const targetTab =
        event.type === 'reconciliation-deadline'
          ? 'conciliacion'
          : event.type === 'billing-cycle'
          ? 'bancos'
          : 'reportes';
      goToClientWorkspace(event.clientIds[0], targetTab);
      acknowledgeByClient(event.clientIds[0], targetTab);
    }
  };

  return (
    <div className={styles.calendario}>
      <div className={styles.calendarContainer}>
        <div className={styles.calendarHeader}>
          <div className={styles.headerLeft}>
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
            <div className={styles.filterSection}>
              <label className={styles.filterLabel}>Filtrar:</label>
              <select
                className={styles.filterSelect}
                value={filteredType}
                onChange={(e) => setFilteredType(e.target.value as typeof filteredType)}
              >
                <option value="all">Todos</option>
                <option value="tax-deadline">Fechas Límite Fiscales</option>
                <option value="billing-cycle">Ciclos de Facturación</option>
                <option value="reconciliation-deadline">Conciliaciones</option>
                <option value="task-due-date">Tareas</option>
              </select>
            </div>
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
            <div className={`${styles.legendColor} ${styles.billingCycle}`} />
            <span>Ciclos de Facturación</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.reconciliationDeadline}`} />
            <span>Conciliaciones</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.taskDueDate}`} />
            <span>Tareas</span>
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
                        handleEventClick(dayEvents[0]);
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
                            onClick={() => handleEventClick(event)}
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
                  <h4 className={styles.modalClientsTitle}>Clientes Afectados:</h4>
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

