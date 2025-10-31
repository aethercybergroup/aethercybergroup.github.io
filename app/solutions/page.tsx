import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <section className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Solutions</h1>
      <p>We provide tailored cybersecurity solutions for various industries.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><Link href="/solutions/healthcare" className="text-primary underline">Healthcare</Link></li>
        <li><Link href="/solutions/finance" className="text-primary underline">Finance</Link></li>
        <li><Link href="/solutions/public-sector" className="text-primary underline">Public Sector</Link></li>
        <li><Link href="/solutions/technology" className="text-primary underline">Technology</Link></li>
      </ul>
    </section>
  );
}
