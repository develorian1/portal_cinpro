'use client';

import { createContext, useContext, useState, useMemo, ReactNode } from 'react';

interface NavigationContextType {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({
  children,
  defaultActiveItem = 'home'
}: {
  children: ReactNode;
  defaultActiveItem?: string;
}) {
  const [activeItem, setActiveItem] = useState<string>(defaultActiveItem);

  const value = useMemo(
    () => ({
      activeItem,
      setActiveItem,
    }),
    [activeItem]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

