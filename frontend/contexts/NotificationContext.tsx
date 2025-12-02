'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { getWorkspaceSnapshot } from '@/data/accountantWorkspace';
import { ClientTab, WorkspaceNotification } from '@/types/accountant';

interface NotificationContextValue {
  notifications: WorkspaceNotification[];
  unreadCount: number;
  addNotification: (
    notification: Omit<WorkspaceNotification, 'id' | 'time' | 'unread'> & {
      id?: string;
      time?: string;
      unread?: boolean;
    }
  ) => WorkspaceNotification;
  markRead: (id: string) => void;
  markAllRead: () => void;
  removeNotification: (id: string) => void;
  acknowledgeByClient: (clientId: string, tab?: ClientTab) => void;
}

const initialNotifications = getWorkspaceSnapshot().notifications;

const NotificationContext = createContext<NotificationContextValue | undefined>(
  undefined
);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<WorkspaceNotification[]>(
    initialNotifications
  );

  const addNotification = useCallback<
    NotificationContextValue['addNotification']
  >((notification) => {
    const newNotification: WorkspaceNotification = {
      id: notification.id || `notif-${Date.now()}`,
      time: notification.time || new Date().toISOString(),
      unread: notification.unread ?? true,
      ...notification,
    };
    setNotifications((prev) => [newNotification, ...prev]);
    return newNotification;
  }, []);

  const markRead = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, unread: false } : notification
      )
    );
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, unread: false })));
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  }, []);

  const acknowledgeByClient = useCallback(
    (clientId: string, tab?: ClientTab) => {
      setNotifications((prev) =>
        prev.map((notification) => {
          if (
            notification.clientId === clientId &&
            (tab ? notification.tab === tab : true)
          ) {
            return { ...notification, unread: false };
          }
          return notification;
        })
      );
    },
    []
  );

  const value = useMemo(
    () => ({
      notifications,
      unreadCount: notifications.filter((notification) => notification.unread).length,
      addNotification,
      markRead,
      markAllRead,
      removeNotification,
      acknowledgeByClient,
    }),
    [notifications, addNotification, markRead, markAllRead, removeNotification, acknowledgeByClient]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}
