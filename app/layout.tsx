import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import { ProfileProvider } from '@/contexts/ProfileContext';
import { NavigationProvider } from '@/contexts/NavigationContext';
import { FinanzasProvider } from '@/contexts/FinanzasContext';
import { HomeProvider } from '@/contexts/HomeContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { UsuariosProvider } from '@/contexts/UsuariosContext';
import { ToastProvider } from '@/contexts/ToastContext';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import { ErrorBoundary, ToastContainer } from '@/components/shared';
import '../styles/globals.css';
import styles from './layout.module.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'CINPRO - Dashboard',
  description: 'Panel de control de CINPRO',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Get profile from authentication/session
  // For now, defaulting to 'director'
  const defaultProfile = 'director';
  const defaultUserName = 'Director Martinez';
  const defaultUserInitials = 'DM';

  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${inter.variable}`}>
        <ErrorBoundary>
          <ThemeProvider>
            <ToastProvider>
              <ProfileProvider
                defaultProfile={defaultProfile}
                defaultUserName={defaultUserName}
                defaultUserInitials={defaultUserInitials}
              >
                <NavigationProvider>
                  <FinanzasProvider>
                    <HomeProvider>
                      <UsuariosProvider>
                        <LayoutWrapper>
                          <main className={styles.mainContent}>{children}</main>
                        </LayoutWrapper>
                        <ToastContainer />
                      </UsuariosProvider>
                    </HomeProvider>
                  </FinanzasProvider>
                </NavigationProvider>
              </ProfileProvider>
            </ToastProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
