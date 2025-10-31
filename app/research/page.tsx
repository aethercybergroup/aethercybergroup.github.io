import Link from 'next/link';

export default function ResearchPage() {
  return (
    <section className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Research</h1>
      <p>Explore our cybersecurity research including advisories, vulnerability briefs, whitepapers, and labs.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><Link href="/research/advisories">Advisories</Link></li>
        <li><Link href="/research/vulnerability-briefs">Vulnerability Briefs</Link></li>
        <li><Link href="/research/whitepapers">Whitepapers</Link></li>
        <li><Link href="/research/labs">Labs</Link></li>
      </ul>
    </section>
  );
}
