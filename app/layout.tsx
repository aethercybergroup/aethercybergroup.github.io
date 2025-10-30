import '../styles/globals.css';
import type { ReactNode } from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

export const metadata = {
  title: 'Aether Cyber Group',
  description: 'Professional cybersecurity solutions and intelligence services.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
