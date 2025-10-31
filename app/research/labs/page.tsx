export default function LabsPage() {
  const labs = [
    {
      id: 'LAB-001',
      title: 'Network Visualizer',
      description: 'Interactive visualization of network traffic and relationships.'
    },
    {
      id: 'LAB-002',
      title: 'Threat Simulation',
      description: 'Simulate real-world cyber attacks in a safe environment.'
    },
    {
      id: 'LAB-003',
      title: 'Attack Surface Analyzer',
      description: 'Identify and analyze potential attack surfaces in your environment.'
    }
  ];
  return (
    <section className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Labs</h1>
      <p>Explore interactive demos and tools developed by our research team.</p>
      <ul className="space-y-3">
        {labs.map((lab) => (
          <li key={lab.id} className="border border-gray-700 p-4 rounded">
            <h2 className="font-semibold">{lab.title}</h2>
            <p className="text-sm text-gray-400">{lab.id}</p>
            <p className="mt-1">{lab.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
