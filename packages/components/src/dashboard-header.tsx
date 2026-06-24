import React from 'react';
import { Button } from '@repo/ui';

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  onLogout?: () => void;
  userName?: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  subtitle,
  onLogout,
  userName,
}) => {
  return (
    <header className="border-b bg-background">
      <div className="flex h-16 items-center px-4">
        <div className="flex-1">
          <h1 className="text-xl font-semibold">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-4">
          {userName && (
            <span className="text-sm text-muted-foreground">Hola, {userName}</span>
          )}
          {onLogout && (
            <Button variant="outline" size="sm" onClick={onLogout}>
              Cerrar Sesión
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
