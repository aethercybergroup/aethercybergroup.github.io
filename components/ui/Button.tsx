import Link from 'next/link';
import { cn } from '../../lib/utils';
import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function Button({ href, children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center px-5 py-3 rounded-md bg-primary hover:bg-primary-dark text-white font-medium transition-colors',
        className
      )}
    >
      {children}
    </Link>
  );
}
