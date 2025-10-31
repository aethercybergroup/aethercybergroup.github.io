import Link from 'next/link';

export default function HomeSection() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Home</h1>
      <p>Explore the Aether Cyber Group site sections:</p>
      <ul className="list-disc list-inside">
        <li><Link href="/home/case-studies" className="text-primary">Case Studies</Link></li>
        <li><Link href="/home/partners" className="text-primary">Partners</Link></li>
        <li><Link href="/home/trust-and-security" className="text-primary">Trust &amp; Security</Link></li>
        <li><Link href="/home/roadmap" className="text-primary">Roadmap</Link></li>
      </ul>
    </div>
  );
}
