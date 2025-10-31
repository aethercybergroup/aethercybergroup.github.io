export default function LeadershipPage() {
  const leaders = [
    { name: 'Dr. Evelyn Harper', role: 'Chief Executive Officer', bio: 'Evelyn leads Aether with over 20 years of cybersecurity experience.' },
    { name: 'Samuel Owens', role: 'Chief Technology Officer', bio: 'Samuel oversees technical strategy and innovation across the organization.' },
    { name: 'Lina Chen', role: 'Chief Operations Officer', bio: 'Lina manages operations and ensures service excellence.' },
    { name: 'Carlos Mendoza', role: 'Chief Information Security Officer', bio: 'Carlos leads the security program and compliance initiatives.' },
  ];
  return (
    <section className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Leadership Team</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {leaders.map(leader => (
          <div key={leader.name} className="bg-card p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold">{leader.name}</h2>
            <p className="text-primary">{leader.role}</p>
            <p className="mt-2 text-sm">{leader.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
