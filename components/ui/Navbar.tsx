import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/research', label: 'Research' },
  { href: '/resources', label: 'Resources' },
  { href: '/newsroom', label: 'Newsroom' },
  { href: '/events', label: 'Events' },
  { href: '/portal', label: 'Portal' },
];

export default function Navbar() {
  return (
    <nav className="bg-background border-b border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          Aether Cyber Group
        </Link>
        <ul className="flex space-x-6">
          {navItems.map(item => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
