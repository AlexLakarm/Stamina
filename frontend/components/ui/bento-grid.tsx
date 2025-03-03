"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface BentoGridItemProps {
  title: React.ReactNode;
  description: React.ReactNode;
  header: React.ReactNode;
  className?: string;
  href?: string;
}

export function BentoGridItem({
  title,
  description,
  header,
  className,
  href,
}: BentoGridItemProps) {
  const content = (
    <div className={cn(
      "group/bento relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/75 transition-colors",
      className
    )}>
      {header}
      <div className="p-4">
        <h3 className="font-semibold text-zinc-200 tracking-wide mt-2 group-hover/bento:text-white transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-zinc-400 group-hover/bento:text-zinc-300 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
}
