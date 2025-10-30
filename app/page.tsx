import Button from '../components/ui/Button';

export default function Page() {
  return (
    <section className="py-20 flex flex-col items-center text-center space-y-6">
      <h1 className="text-4xl font-bold">Empowering Cyber Resilience</h1>
      <p className="max-w-2xl text-lg text-gray-300">
        Aether Cyber Group delivers professional cybersecurity services across threat intelligence,
        red/blue teaming, compliance and research.
      </p>
      <Button href="/about">Learn more about us</Button>
    </section>
  );
}
