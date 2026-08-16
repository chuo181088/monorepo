import React from 'react';
import { cn } from '@repo/utils';

interface SidebarItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  items: SidebarItem[];
  activeHref?: string;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ items, activeHref, className }) => {
  return (
    <aside className={cn('w-64 border-r bg-background', className)}>
      <nav className="space-y-1 p-4">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              activeHref === item.href
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            {item.icon && <span className="h-5 w-5">{item.icon}</span>}
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};
