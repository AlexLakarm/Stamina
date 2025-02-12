import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

export function CustomPagination({ children }: { children: React.ReactNode }) {
  return <nav className="mx-auto flex w-full justify-center">{children}</nav>;
}

export function PaginationContent({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-row items-center gap-1">{children}</ul>;
}

export function PaginationItem({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

interface PaginationLinkProps extends ComponentProps<typeof Link> {
  isActive?: boolean;
}

export function PaginationLink({ 
  className,
  isActive,
  children,
  ...props
}: PaginationLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "flex h-9 min-w-9 items-center justify-center rounded-md border border-neutral-800 px-3 hover:bg-neutral-800",
        isActive && "bg-neutral-800",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function PaginationEllipsis() {
  return <span className="flex h-9 min-w-9 items-center justify-center">...</span>;
}

export function PaginationPrevious({ href }: { href: string }) {
  return (
    <PaginationLink href={href}>
      <span>Précédent</span>
    </PaginationLink>
  );
}

export function PaginationNext({ href }: { href: string }) {
  return (
    <PaginationLink href={href}>
      <span>Suivant</span>
    </PaginationLink>
  );
} 