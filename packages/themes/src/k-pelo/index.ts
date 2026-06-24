/**
 * Tema K-Pelo Center - Lujo premium (Negro, Blanco, Dorado)
 */

export const kpeloTheme = {
  name: 'k-pelo',
  colors: {
    // Palette principal
    background: 'oklch(0.99 0 0)',
    foreground: 'oklch(0.12 0 0)',
    card: 'oklch(1 0 0)',
    cardForeground: 'oklch(0.12 0 0)',
    popover: 'oklch(1 0 0)',
    popoverForeground: 'oklch(0.12 0 0)',
    primary: 'oklch(0.12 0 0)',
    primaryForeground: 'oklch(0.98 0 0)',
    secondary: 'oklch(0.96 0.005 80)',
    secondaryForeground: 'oklch(0.12 0 0)',
    muted: 'oklch(0.96 0.005 80)',
    mutedForeground: 'oklch(0.45 0.01 60)',
    accent: 'oklch(0.75 0.13 80)',
    accentForeground: 'oklch(0.12 0 0)',
    
    // Colores dorados premium
    gold: 'oklch(0.75 0.13 80)',
    goldSoft: 'oklch(0.85 0.08 85)',
    goldDeep: 'oklch(0.6 0.14 70)',
    
    // Destructive
    destructive: 'oklch(0.577 0.245 27.325)',
    destructiveForeground: 'oklch(0.98 0 0)',
    
    // Bordes
    border: 'oklch(0.9 0.01 60)',
    input: 'oklch(0.9 0.01 60)',
    ring: 'oklch(0.75 0.13 80)',
    
    // Charts
    chart: [
      'oklch(0.75 0.13 80)',
      'oklch(0.6 0.14 70)',
      'oklch(0.12 0 0)',
      'oklch(0.85 0.08 85)',
      'oklch(0.45 0.01 60)'
    ],
    
    // Sidebar
    sidebar: 'oklch(0.12 0 0)',
    sidebarForeground: 'oklch(0.98 0 0)',
    sidebarPrimary: 'oklch(0.75 0.13 80)',
    sidebarPrimaryForeground: 'oklch(0.12 0 0)',
    sidebarAccent: 'oklch(0.2 0 0)',
    sidebarAccentForeground: 'oklch(0.98 0 0)',
    sidebarBorder: 'oklch(0.2 0 0)',
    sidebarRing: 'oklch(0.75 0.13 80)'
  },
  
  gradients: {
    gold: 'linear-gradient(135deg, oklch(0.85 0.08 85), oklch(0.75 0.13 80), oklch(0.6 0.14 70))',
    dark: 'linear-gradient(180deg, oklch(0.12 0 0) 0%, oklch(0.18 0.005 60) 100%)'
  },
  
  shadows: {
    luxe: '0 20px 60px -20px oklch(0.12 0 0 / 0.25)',
    gold: '0 10px 40px -10px oklch(0.75 0.13 80 / 0.4)'
  },
  
  fonts: {
    display: "'Cormorant Garamond', serif",
    body: "'Inter', sans-serif"
  },
  
  radius: {
    sm: 'calc(var(--radius) - 4px)',
    md: 'calc(var(--radius) - 2px)',
    lg: 'var(--radius)',
    xl: 'calc(var(--radius) + 4px)',
    '2xl': 'calc(var(--radius) + 8px)',
    '3xl': 'calc(var(--radius) + 12px)',
    '4xl': 'calc(var(--radius) + 16px)'
  }
};

export default kpeloTheme;
