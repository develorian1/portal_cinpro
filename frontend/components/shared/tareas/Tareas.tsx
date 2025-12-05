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
  const { profile, userName } = useProfile();
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

  const handleCommentAdd = async (taskId: string, comment: string) => {
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
        body: JSON.stringify({ 
          taskId, 
          action: 'addComment',
          comment,
          authorName: userName || 'Usuario',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add comment');
      }

      const result = await response.json();
      const newComment = result.comment;

      // Update local state
      const updateTaskWithComment = (tasks: Tarea[]) =>
        tasks.map((task) =>
          task.id === taskId
            ? {
                ...task,
                comments: [
                  ...(task.comments || []),
                  newComment,
                ],
              }
            : task
        );

      setMisTareas(updateTaskWithComment(misTareas));
      setAsignadasPorSuperior(updateTaskWithComment(asignadasPorSuperior));
    } catch (err) {
      console.error('Error adding comment:', err);
      throw err; // Re-throw to let TaskCard handle the error
    }
  };

  const handleCommentDelete = async (taskId: string, commentId: string) => {
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
        body: JSON.stringify({ 
          taskId, 
          action: 'deleteComment',
          commentId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete comment');
      }

      // Update local state
      const updateTaskWithoutComment = (tasks: Tarea[]) =>
        tasks.map((task) =>
          task.id === taskId
            ? {
                ...task,
                comments: (task.comments || []).filter((comment) => comment.id !== commentId),
              }
            : task
        );

      setMisTareas(updateTaskWithoutComment(misTareas));
      setAsignadasPorSuperior(updateTaskWithoutComment(asignadasPorSuperior));
    } catch (err) {
      console.error('Error deleting comment:', err);
      throw err; // Re-throw to let TaskCard handle the error
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

  const isDirector = profile === 'director';

  return (
    <div className={`${styles.tareasContainer} ${isDirector ? styles.singleColumn : ''}`}>
      <TaskList
        title="Mis Tareas"
        tasks={misTareas}
        onStatusChange={handleStatusChange}
        onCommentAdd={handleCommentAdd}
        onCommentDelete={handleCommentDelete}
        permissions={DEFAULT_PERMISSIONS}
        isLoading={isLoading}
      />
      {!isDirector && (
        <TaskList
          title="Asignadas por Superior"
          tasks={asignadasPorSuperior}
          onStatusChange={handleStatusChange}
          onCommentAdd={handleCommentAdd}
          onCommentDelete={handleCommentDelete}
          permissions={DEFAULT_PERMISSIONS}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

