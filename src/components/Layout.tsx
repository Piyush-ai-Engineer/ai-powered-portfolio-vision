
import React from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from './ThemeProvider';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
