export default function AdvisoriesPage() {
  const advisories = [
    { id: 'ADV-2025-001', title: 'Zero-day vulnerability in IoT devices', severity: 'High' },
    { id: 'ADV-2025-002', title: 'Phishing campaign targeting finance sector', severity: 'Medium' },
    { id: 'ADV-2025-003', title: 'Ransomware outbreak affecting hospitals', severity: 'Critical' },
  ];
  return (
    <section className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Advisories</h1>
      <p>Stay informed about our latest advisories and recommended actions.</p>
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Severity</th>
          </tr>
        </thead>
        <tbody>
          {advisories.map(advisory => (
            <tr key={advisory.id} className="border-t border-gray-700">
              <td className="px-4 py-2">{advisory.id}</td>
              <td className="px-4 py-2">{advisory.title}</td>
              <td className="px-4 py-2">{advisory.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
