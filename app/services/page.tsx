import Link from 'next/link';

export default function ServicesPage() {
  return (
    <section className="prose dark:prose-invert">
      <h1>Our Services</h1>
      <p>Explore our comprehensive cybersecurity service offerings:</p>
      <ul className="list-disc pl-6">
        <li><Link href="/services/threat-intelligence">Threat Intelligence</Link></li>
        <li><Link href="/services/red-team">Red Team</Link></li>
        <li><Link href="/services/blue-team">Blue Team</Link></li>
        <li><Link href="/services/gov-risk-compliance">Governance, Risk &amp; Compliance</Link></li>
      </ul>
    </section>
  );
}
