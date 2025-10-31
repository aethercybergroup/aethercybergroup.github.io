export default function WhitepapersPage() {
  const papers = [
    {
      id: 'WP-2025-001',
      title: 'Zero Trust Architecture',
      description: 'Guidelines for implementing a zero trust security model.',
      file: '/papers/zero-trust.pdf'
    },
    {
      id: 'WP-2025-002',
      title: 'AI-Powered Threat Detection',
      description: 'Exploring machine learning techniques for detecting advanced threats.',
      file: '/papers/ai-threat-detection.pdf'
    },
    {
      id: 'WP-2025-003',
      title: 'Cloud Security Best Practices',
      description: 'Strategies for securing cloud-native applications and infrastructure.',
      file: '/papers/cloud-security.pdf'
    }
  ];
  return (
    <section className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Whitepapers</h1>
      <p>Explore our in-depth research and technical guides.</p>
      <ul className="space-y-3">
        {papers.map((paper) => (
          <li key={paper.id} className="border border-gray-700 p-4 rounded">
            <h2 className="font-semibold">{paper.title}</h2>
            <p className="text-sm text-gray-400">{paper.id}</p>
            <p className="mt-1">{paper.description}</p>
            <a href={paper.file} className="text-primary underline" download>
              Download
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
