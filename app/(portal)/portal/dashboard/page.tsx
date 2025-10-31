import { getServerSession } from 'next-auth';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/api/auth/signin');
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Member Dashboard</h1>
      <p>Welcome, {session?.user?.email}</p>
      {/* Additional dashboard content (charts, feeds) will be added here later */}
    </div>
  );
}
