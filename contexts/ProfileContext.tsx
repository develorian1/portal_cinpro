'use client';

import { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { ProfileType } from '@/types/profile';

interface ProfileContextType {
  profile: ProfileType;
  setProfile: (profile: ProfileType) => void;
  userName?: string;
  setUserName: (name: string) => void;
  userInitials?: string;
  setUserInitials: (initials: string) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({
  children,
  defaultProfile = 'director',
  defaultUserName,
  defaultUserInitials
}: {
  children: ReactNode;
  defaultProfile?: ProfileType;
  defaultUserName?: string;
  defaultUserInitials?: string;
}) {
  const [profile, setProfile] = useState<ProfileType>(defaultProfile);
  const [userName, setUserName] = useState<string | undefined>(defaultUserName);
  const [userInitials, setUserInitials] = useState<string | undefined>(defaultUserInitials);

  const value = useMemo(
    () => ({
      profile,
      setProfile,
      userName,
      setUserName,
      userInitials,
      setUserInitials,
    }),
    [profile, userName, userInitials]
  );

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}

