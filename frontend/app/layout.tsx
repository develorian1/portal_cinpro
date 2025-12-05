import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import { NavigationProvider } from '@/contexts/NavigationContext';
import { FinanzasProvider } from '@/contexts/FinanzasContext';
import { HomeProvider } from '@/contexts/HomeContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { UsuariosProvider } from '@/contexts/UsuariosContext';
import { ToastProvider } from '@/contexts/ToastContext';
import { ErrorBoundary, ToastContainer, SecurityProtection } from '@/components/shared';
import '../styles/globals.css';

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
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${inter.variable}`}>
        <SecurityProtection />
        <ErrorBoundary>
          <ThemeProvider>
            <ToastProvider>
              <NavigationProvider>
                <FinanzasProvider>
                  <HomeProvider>
                    <UsuariosProvider>
                      {children}
                      <ToastContainer />
                    </UsuariosProvider>
                  </HomeProvider>
                </FinanzasProvider>
              </NavigationProvider>
            </ToastProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
