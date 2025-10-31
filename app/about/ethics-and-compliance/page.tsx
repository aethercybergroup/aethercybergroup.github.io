export default function EthicsAndCompliancePage() {
  const principles = [
    'Adherence to international cybersecurity standards and regulations.',
    'Commitment to client confidentiality and data protection.',
    'Transparent and ethical business practices.',
    'Continuous improvement and employee training on compliance requirements.',
  ];
  return (
    <section className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Ethics & Compliance</h1>
      <p className="mb-4">
        At Aether Cyber Group, we maintain the highest ethical standards and strive to comply with all relevant regulations.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        {principles.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
