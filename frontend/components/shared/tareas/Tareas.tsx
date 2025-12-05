'use client';

import { useState, useEffect } from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { Tarea, TareaStatus, TareasResponse, TaskPermissions } from '@/types/tareas';
import TaskList from './TaskList';
import styles from './Tareas.module.css';

const API_ENDPOINTS: Record<string, string> = {
  administrador: '/api/admin/tareas',
  director: '/api/director/tareas',
  gerente: '/api/gerente/tareas',
  auxiliar: '/api/auxiliar/tareas',
};

const DEFAULT_PERMISSIONS: TaskPermissions = {
  canViewMyTasks: true,
  canUpdateMyTasks: true,
  canViewAssignedTasks: true,
  canUpdateAssignedTasks: true,
};

export default function Tareas() {
  const { profile } = useProfile();
  const [misTareas, setMisTareas] = useState<Tarea[]>([]);
  const [asignadasPorSuperior, setAsignadasPorSuperior] = useState<Tarea[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTareas = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const endpoint = API_ENDPOINTS[profile];
        if (!endpoint) {
          throw new Error(`No API endpoint found for profile: ${profile}`);
        }

        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }

        const data: TareasResponse = await response.json();
        setMisTareas(data.misTareas || []);
        setAsignadasPorSuperior(data.asignadasPorSuperior || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching tasks:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTareas();
  }, [profile]);

  const handleStatusChange = async (taskId: string, newStatus: TareaStatus) => {
    try {
      const endpoint = API_ENDPOINTS[profile];
      if (!endpoint) {
        throw new Error(`No API endpoint found for profile: ${profile}`);
      }

      const response = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskId, status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update task status');
      }

      // Update local state
      const updateTask = (tasks: Tarea[]) =>
        tasks.map((task) =>
          task.id === taskId
            ? {
                ...task,
                status: newStatus,
                completedAt: newStatus === 'completed' ? new Date().toISOString() : task.completedAt,
              }
            : task
        );

      setMisTareas(updateTask(misTareas));
      setAsignadasPorSuperior(updateTask(asignadasPorSuperior));
    } catch (err) {
      console.error('Error updating task status:', err);
      // TODO: Show error toast notification
    }
  };

  if (error) {
    return (
      <div className={styles.errorState}>
        <p>Error al cargar las tareas: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className={styles.retryButton}
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className={styles.tareasContainer}>
      <TaskList
        title="Mis Tareas"
        tasks={misTareas}
        onStatusChange={handleStatusChange}
        permissions={DEFAULT_PERMISSIONS}
        isLoading={isLoading}
      />
      <TaskList
        title="Asignadas por Superior"
        tasks={asignadasPorSuperior}
        onStatusChange={handleStatusChange}
        permissions={DEFAULT_PERMISSIONS}
        isLoading={isLoading}
      />
    </div>
  );
}

