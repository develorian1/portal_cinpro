'use client';

import { useState } from 'react';
import { Tarea, TareaStatus, TaskComment } from '@/types/tareas';
import { useProfile } from '@/contexts/ProfileContext';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Tarea;
  onStatusChange: (newStatus: TareaStatus) => void;
  canUpdateStatus: boolean;
  showAssigner?: boolean;
  onCommentAdd?: (taskId: string, comment: string) => Promise<void>;
  onCommentDelete?: (taskId: string, commentId: string) => Promise<void>;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-MX', {
    month: 'short',
    day: 'numeric',
  });
};

const isOverdue = (dueDate?: string): boolean => {
  if (!dueDate) return false;
  return new Date(dueDate) < new Date();
};

export default function TaskCard({
  task,
  onStatusChange,
  canUpdateStatus,
  showAssigner = false,
  onCommentAdd,
  onCommentDelete,
}: TaskCardProps) {
  const { userName, userInitials } = useProfile();
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [deletingCommentId, setDeletingCommentId] = useState<string | null>(null);
  const overdue = task.dueDate ? isOverdue(task.dueDate) : false;
  const isCompleted = task.status === 'completed';

  const toggleStatus = () => {
    if (canUpdateStatus) {
      const newStatus: TareaStatus = isCompleted ? 'pending' : 'completed';
      onStatusChange(newStatus);
    }
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Don't toggle if clicking directly on the checkbox wrapper (it handles its own change)
    if ((e.target as HTMLElement).closest(`.${styles.checkboxWrapper}`)) {
      return;
    }
    toggleStatus();
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (canUpdateStatus) {
      const newStatus: TareaStatus = e.target.checked ? 'completed' : 'pending';
      onStatusChange(newStatus);
    }
  };

  const handleCheckboxWrapperClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    // Stop propagation so card click doesn't also fire
    e.stopPropagation();
  };

  const handleCommentButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsCommentModalOpen(true);
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!commentText.trim() || !onCommentAdd) return;

    setIsSubmittingComment(true);
    try {
      await onCommentAdd(task.id, commentText.trim());
      setCommentText('');
      setIsCommentModalOpen(false);
    } catch (error) {
      console.error('Error adding comment:', error);
      // TODO: Show error toast notification
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const handleCommentModalClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCommentModalOpen(false);
    setCommentText('');
  };

  const handleCommentDelete = async (e: React.MouseEvent<HTMLButtonElement>, commentId: string) => {
    e.stopPropagation();
    
    if (!onCommentDelete) return;
    
    // Confirm deletion
    if (!confirm('¿Estás seguro de que deseas eliminar este comentario?')) {
      return;
    }

    setDeletingCommentId(commentId);
    try {
      await onCommentDelete(task.id, commentId);
    } catch (error) {
      console.error('Error deleting comment:', error);
      // TODO: Show error toast notification
    } finally {
      setDeletingCommentId(null);
    }
  };

  const formatCommentDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Get status-based class
  const getStatusClass = (status: TareaStatus): string => {
    switch (status) {
      case 'pending':
        return styles.statusPending;
      case 'in-progress':
        return styles.statusInProgress;
      case 'completed':
        return styles.statusCompleted;
      default:
        return '';
    }
  };

  return (
    <>
      <div 
        className={`${styles.taskCard} ${getStatusClass(task.status)} ${overdue && !isCompleted ? styles.overdue : ''}`}
        onClick={handleCardClick}
        role={canUpdateStatus ? 'button' : undefined}
        tabIndex={canUpdateStatus ? 0 : undefined}
        onKeyDown={(e) => {
          if (canUpdateStatus && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            toggleStatus();
          }
        }}
        aria-label={canUpdateStatus ? `Marcar "${task.title}" como ${isCompleted ? 'pendiente' : 'completada'}` : undefined}
      >
        <label className={styles.checkboxWrapper} onClick={handleCheckboxWrapperClick}>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCheckboxChange}
            disabled={!canUpdateStatus}
            className={styles.checkbox}
            aria-label={`Marcar "${task.title}" como completada`}
          />
          <span className={styles.checkmark}></span>
        </label>

        <div className={styles.taskContent}>
          <h3 className={styles.taskTitle}>{task.title}</h3>
          {task.description && (
            <p className={styles.taskDescription}>{task.description}</p>
          )}
          
          <div className={styles.taskMeta}>
            {task.clientName && (
              <span className={styles.clientName}>{task.clientName}</span>
            )}
            {task.dueDate && (
              <span className={overdue && !isCompleted ? styles.overdueDate : styles.dueDate}>
                {formatDate(task.dueDate)}
              </span>
            )}
          </div>

          {task.comments && task.comments.length > 0 && (
            <div className={styles.commentsSection}>
              <div className={styles.commentsHeader}>
                <span className={styles.commentsCount}>{task.comments.length} comentario{task.comments.length !== 1 ? 's' : ''}</span>
              </div>
              <div className={styles.commentsList}>
                {task.comments.slice(-2).map((comment) => (
                  <div key={comment.id} className={styles.commentItem}>
                    <div className={styles.commentHeader}>
                      <div className={styles.commentHeaderLeft}>
                        <span className={styles.commentAuthor}>{comment.authorName}</span>
                        <span className={styles.commentDate}>{formatCommentDate(comment.createdAt)}</span>
                      </div>
                      {onCommentDelete && (
                        <button
                          type="button"
                          className={styles.deleteCommentButton}
                          onClick={(e) => handleCommentDelete(e, comment.id)}
                          disabled={deletingCommentId === comment.id}
                          aria-label="Eliminar comentario"
                          title="Eliminar comentario"
                        >
                          {deletingCommentId === comment.id ? (
                            <div className={styles.spinner}></div>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                          )}
                        </button>
                      )}
                    </div>
                    <p className={styles.commentContent}>{comment.content}</p>
                  </div>
                ))}
                {task.comments.length > 2 && (
                  <div className={styles.moreComments}>
                    +{task.comments.length - 2} comentario{task.comments.length - 2 !== 1 ? 's' : ''} más
                  </div>
                )}
              </div>
            </div>
          )}

          <button
            type="button"
            className={styles.addCommentButton}
            onClick={handleCommentButtonClick}
            aria-label="Agregar comentario"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            AGREGAR COMENTARIO
          </button>
        </div>
      </div>

      {isCommentModalOpen && (
        <div className={styles.modalOverlay} onClick={handleCommentModalClose}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Agregar Comentario</h3>
              <button
                type="button"
                className={styles.modalCloseButton}
                onClick={handleCommentModalClose}
                aria-label="Cerrar"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
              <div className={styles.formGroup}>
                <label htmlFor={`comment-${task.id}`} className={styles.formLabel}>
                  Comentario
                </label>
                <textarea
                  id={`comment-${task.id}`}
                  className={styles.commentTextarea}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Escribe tu comentario aquí..."
                  rows={4}
                  required
                />
              </div>
              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={handleCommentModalClose}
                  disabled={isSubmittingComment}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={!commentText.trim() || isSubmittingComment}
                >
                  {isSubmittingComment ? 'Enviando...' : 'Agregar Comentario'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

