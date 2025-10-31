import { ReactNode } from 'react';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function PortalLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/api/auth/signin');
  }
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
