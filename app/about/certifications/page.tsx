import Link from 'next/link';

export default function CertificationsPage() {
  const certs = [
    { name: 'ISO 27001', file: '/papers/iso27001.pdf' },
    { name: 'SOC 2 Type II', file: '/papers/soc2-type-ii.pdf' },
    { name: 'PCI DSS', file: '/papers/pci-dss.pdf' },
    { name: 'NIST CSF', file: '/papers/nist-csf.pdf' },
  ];
  return (
    <section className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Certifications</h1>
      <p>We maintain rigorous certifications to ensure compliance.</p>
      <ul className="space-y-2">
        {certs.map(cert => (
          <li key={cert.name} className="flex items-center justify-between bg-card p-4 rounded">
            <span>{cert.name}</span>
            <a href={cert.file} className="text-primary underline" target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
