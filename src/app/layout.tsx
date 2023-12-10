import { Inter } from 'next/font/google';
import './globals.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export const revalidate = 0;

export const metadata = {
  title: "Glucose Monitor Tracker",
  description: "Makes it easy to track your blood sugar levels.",
};
export default function RootLayout({ children }: RootLayoutProps ) {
  return (
    <html lang="en">
        <body>
        <Theme appearance="dark" accentColor="pink" grayColor="sand" panelBackground="solid" radius="large" scaling="110%">
          {/* <ThemePanel /> */}
          {children}
        </Theme>
      </body>
    </html>
  );
}
