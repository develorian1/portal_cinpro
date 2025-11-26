'use client';

import { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';

type Timeframe = 'Today' | 'This Week' | 'This Month';

interface HomeContextType {
  timeframe: Timeframe;
  setTimeframe: (timeframe: Timeframe) => void;
  isRefreshing: boolean;
  refresh: () => Promise<void>;
}

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export function HomeProvider({
  children,
  defaultTimeframe = 'This Month'
}: {
  children: ReactNode;
  defaultTimeframe?: Timeframe;
}) {
  const [timeframe, setTimeframe] = useState<Timeframe>(defaultTimeframe);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refresh = useCallback(async () => {
    setIsRefreshing(true);
    // TODO: Implement SQL query refresh logic
    // This would trigger live SQL queries to update all data
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsRefreshing(false);
  }, []);

  const value = useMemo(
    () => ({
      timeframe,
      setTimeframe,
      isRefreshing,
      refresh,
    }),
    [timeframe, isRefreshing, refresh]
  );

  return (
    <HomeContext.Provider value={value}>
      {children}
    </HomeContext.Provider>
  );
}

export function useHome() {
  const context = useContext(HomeContext);
  if (context === undefined) {
    // Return default values when context is not available
    return {
      timeframe: 'This Month' as const,
      setTimeframe: () => {},
      isRefreshing: false,
      refresh: async () => {},
    };
  }
  return context;
}

