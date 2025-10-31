export default function KnowledgeBasePage() {
  const topics = [
    { id: 1, title: 'Incident Response', description: 'Guides and best practices on responding to security incidents.' },
    { id: 2, title: 'Security Policies', description: 'Policy templates and guidelines for establishing security controls.' },
    { id: 3, title: 'Vulnerability Management', description: 'Procedures for identifying and remediating vulnerabilities.' },
  ];
  return (
    <section className="p-8 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Knowledge Base</h1>
      <p>Browse articles and guides across various cybersecurity topics.</p>
      <ul className="space-y-4">
        {topics.map((item) => (
          <li key={item.id} className="border border-gray-700 rounded p-4">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
