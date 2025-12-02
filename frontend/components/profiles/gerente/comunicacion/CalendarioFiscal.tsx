'use client';

import { useState, useMemo } from 'react';
import styles from './CalendarioFiscal.module.css';

interface CalendarEvent {
  id: string;
  title: string;
  type: string;
  date: string;
  time?: string;
  endTime?: string;
  allDay?: boolean;
  color: string;
  description: string;
  clients: string | string[] | null;
}

interface CalendarioFiscalProps {
  events: CalendarEvent[];
}

export default function CalendarioFiscal({ events }: CalendarioFiscalProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const calendarDays = useMemo(() => {
    const days: (number | null)[] = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  }, [daysInMonth, firstDayOfMonth]);

  const getEventsForDate = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter((event) => event.date === dateStr);
  };

  const selectedDateEvents = useMemo(() => {
    if (!selectedDate) return [];
    const dateStr = selectedDate.toISOString().split('T')[0];
    return events.filter((event) => event.date === dateStr);
  }, [selectedDate, events]);

  const goToPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  const handleDayClick = (day: number) => {
    setSelectedDate(new Date(year, month, day));
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      year === selectedDate.getFullYear()
    );
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'tax_deadline':
        return 'Fecha Límite Fiscal';
      case 'certificate':
        return 'Certificado';
      case 'sector_specific':
        return 'Sector Específico';
      case 'meeting':
        return 'Reunión';
      case 'internal':
        return 'Interno';
      default:
        return type;
    }
  };

  // Get upcoming events (next 7 days)
  const upcomingEvents = useMemo(() => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    return events
      .filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= today && eventDate <= nextWeek;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [events]);

  return (
    <div className={styles.calendarioFiscal}>
      <div className={styles.calendarSection}>
        {/* Calendar Header */}
        <div className={styles.calendarHeader}>
          <button className={styles.navBtn} onClick={goToPrevMonth}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <h3 className={styles.monthYear}>
            {monthNames[month]} {year}
          </h3>
          <button className={styles.navBtn} onClick={goToNextMonth}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <button className={styles.todayBtn} onClick={goToToday}>
            Hoy
          </button>
        </div>

        {/* Calendar Grid */}
        <div className={styles.calendarGrid}>
          {/* Day Headers */}
          {dayNames.map((day) => (
            <div key={day} className={styles.dayHeader}>
              {day}
            </div>
          ))}

          {/* Calendar Days */}
          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} className={styles.emptyDay} />;
            }

            const dayEvents = getEventsForDate(day);
            const hasEvents = dayEvents.length > 0;

            return (
              <button
                key={day}
                className={`${styles.day} ${isToday(day) ? styles.today : ''} ${isSelected(day) ? styles.selected : ''}`}
                onClick={() => handleDayClick(day)}
              >
                <span className={styles.dayNumber}>{day}</span>
                {hasEvents && (
                  <div className={styles.eventDots}>
                    {dayEvents.slice(0, 3).map((event) => (
                      <span
                        key={event.id}
                        className={styles.eventDot}
                        style={{ background: event.color }}
                      />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotDanger}`} />
            <span>Fecha Límite Fiscal</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotWarning}`} />
            <span>Obligaciones</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotAzure}`} />
            <span>Certificados</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendDotSuccess}`} />
            <span>Sector</span>
          </div>
        </div>
      </div>

      {/* Events Sidebar */}
      <div className={styles.eventsSidebar}>
        {selectedDate ? (
          <>
            <h4 className={styles.sidebarTitle}>
              {selectedDate.toLocaleDateString('es-MX', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
              })}
            </h4>
            {selectedDateEvents.length > 0 ? (
              <div className={styles.eventsList}>
                {selectedDateEvents.map((event) => (
                  <div
                    key={event.id}
                    className={styles.eventCard}
                    style={{ borderLeftColor: event.color }}
                  >
                    <span className={styles.eventType}>{getEventTypeLabel(event.type)}</span>
                    <h5 className={styles.eventTitle}>{event.title}</h5>
                    <p className={styles.eventDescription}>{event.description}</p>
                    {event.time && (
                      <span className={styles.eventTime}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {event.time} {event.endTime && `- ${event.endTime}`}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noEvents}>
                <p>No hay eventos para este día</p>
              </div>
            )}
          </>
        ) : (
          <>
            <h4 className={styles.sidebarTitle}>Próximos Eventos</h4>
            {upcomingEvents.length > 0 ? (
              <div className={styles.eventsList}>
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className={styles.eventCard}
                    style={{ borderLeftColor: event.color }}
                  >
                    <span className={styles.eventDate}>
                      {new Date(event.date).toLocaleDateString('es-MX', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </span>
                    <h5 className={styles.eventTitle}>{event.title}</h5>
                    <p className={styles.eventDescription}>{event.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noEvents}>
                <p>No hay eventos próximos</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

