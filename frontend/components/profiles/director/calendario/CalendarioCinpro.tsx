'use client';

import { useState } from 'react';
import styles from './CalendarioCinpro.module.css';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  type: 'tax-deadline' | 'billing-cycle' | 'internal';
  description?: string;
}

export default function CalendarioCinpro() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');

  // Mock data - replace with real data from API
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const getDate = (daysFromToday: number) => {
    const date = new Date(today);
    date.setDate(date.getDate() + daysFromToday);
    return date;
  };

  const events: CalendarEvent[] = [
    // Today and next few days
    {
      id: '1',
      title: 'SAT Filing Deadline - Monthly',
      date: getDate(0),
      type: 'tax-deadline',
      description: 'Monthly tax filing deadline for current period',
    },
    {
      id: '2',
      title: 'Billing Cycle - TechCorp Solutions',
      date: getDate(1),
      type: 'billing-cycle',
      description: 'Monthly billing cycle for TechCorp Solutions',
    },
    {
      id: '3',
      title: 'Team Review Meeting',
      date: getDate(2),
      type: 'internal',
      description: 'Weekly team review and planning meeting',
    },
    {
      id: '4',
      title: 'Billing Cycle - Global Industries',
      date: getDate(3),
      type: 'billing-cycle',
      description: 'Monthly billing cycle for Global Industries',
    },
    {
      id: '5',
      title: 'Client Consultation - ABC Corp',
      date: getDate(4),
      type: 'internal',
      description: 'Quarterly consultation meeting with ABC Corp',
    },
    {
      id: '6',
      title: 'SAT Filing Deadline - Quarterly',
      date: getDate(5),
      type: 'tax-deadline',
      description: 'Quarterly tax filing deadline for Q1',
    },
    {
      id: '7',
      title: 'Billing Cycle - Startup Ventures',
      date: getDate(6),
      type: 'billing-cycle',
      description: 'Monthly billing cycle for Startup Ventures',
    },
    {
      id: '8',
      title: 'Training Session - New Tax Regulations',
      date: getDate(7),
      type: 'internal',
      description: 'Internal training on new tax regulations',
    },
    // Next week
    {
      id: '9',
      title: 'Billing Cycle - Enterprise Group',
      date: getDate(8),
      type: 'billing-cycle',
      description: 'Monthly billing cycle for Enterprise Group',
    },
    {
      id: '10',
      title: 'SAT Filing Deadline - Monthly',
      date: getDate(10),
      type: 'tax-deadline',
      description: 'Monthly tax filing deadline',
    },
    {
      id: '11',
      title: 'Client Onboarding - New Client XYZ',
      date: getDate(12),
      type: 'internal',
      description: 'Onboarding meeting for new client XYZ',
    },
    {
      id: '12',
      title: 'Billing Cycle - Manufacturing Co.',
      date: getDate(14),
      type: 'billing-cycle',
      description: 'Monthly billing cycle for Manufacturing Co.',
    },
    {
      id: '13',
      title: 'Quarterly Review - All Clients',
      date: getDate(15),
      type: 'internal',
      description: 'Quarterly review meeting for all active clients',
    },
    {
      id: '14',
      title: 'SAT Filing Deadline - Special',
      date: getDate(17),
      type: 'tax-deadline',
      description: 'Special tax filing deadline for high-value clients',
    },
    {
      id: '15',
      title: 'Billing Cycle - Retail Chain',
      date: getDate(20),
      type: 'billing-cycle',
      description: 'Monthly billing cycle for Retail Chain',
    },
    {
      id: '16',
      title: 'Strategic Planning Meeting',
      date: getDate(21),
      type: 'internal',
      description: 'Monthly strategic planning and goal setting meeting',
    },
    {
      id: '17',
      title: 'Billing Cycle - Service Providers Inc.',
      date: getDate(25),
      type: 'billing-cycle',
      description: 'Monthly billing cycle for Service Providers Inc.',
    },
    {
      id: '18',
      title: 'SAT Filing Deadline - Monthly',
      date: getDate(28),
      type: 'tax-deadline',
      description: 'Monthly tax filing deadline',
    },
    {
      id: '19',
      title: 'Client Audit Preparation',
      date: getDate(30),
      type: 'internal',
      description: 'Preparation meeting for upcoming client audit',
    },
  ];

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
      case 'billing-cycle':
        return styles.billingCycle;
      case 'internal':
        return styles.internal;
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
      case 'internal':
        return 'Interno';
      default:
        return '';
    }
  };

  // Get upcoming events (next 7 days)
  const upcomingEvents = events
    .filter((event) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= today && eventDate <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5);

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

  return (
    <div className={styles.calendarioCinpro}>
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
                    onClick={() => dayEvents.length > 0 && setSelectedEvent(dayEvents[0])}
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

      <div className={styles.sidebar}>
        <div className={styles.upcomingEvents}>
          <h3 className={styles.sidebarTitle}>Próximos Eventos</h3>
          <div className={styles.eventsList}>
            {upcomingEvents.length === 0 ? (
              <div className={styles.emptyState}>No hay eventos próximos</div>
            ) : (
              upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className={styles.eventItem}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className={`${styles.eventTypeIndicator} ${getEventTypeClass(event.type)}`} />
                  <div className={styles.eventDetails}>
                    <div className={styles.eventTitle}>{event.title}</div>
                    <div className={styles.eventDate}>
                      {event.date.toLocaleDateString('es-MX', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {selectedEvent && (
          <div className={styles.eventModal}>
            <div className={styles.modalContent}>
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
                  <span className={`${styles.typeBadge} ${getEventTypeClass(selectedEvent.type)}`}>
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
                {selectedEvent.type === 'internal' && (
                  <button className={styles.rescheduleButton}>Reprogramar</button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
