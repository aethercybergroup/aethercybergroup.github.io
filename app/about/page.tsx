import Link from 'next/link';

export default function AboutPage() {
  const links = [
    { href: '/about/leadership', title: 'Leadership' },
    { href: '/about/ethics-and-compliance', title: 'Ethics & Compliance' },
    { href: '/about/certifications', title: 'Certifications' },
    { href: '/about/contact', title: 'Contact' },
  ];
  return (
    <section className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">About Aether Cyber Group</h1>
      <p className="mb-6">
        Learn more about our team, values, certifications, and how to get in touch.
      </p>
      <ul className="space-y-2">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className="text-primary hover:underline">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
