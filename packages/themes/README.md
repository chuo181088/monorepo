# Sistema de Temas para Aplicaciones de Salones

Este paquete contiene las configuraciones de temas y variables CSS para cada aplicación cliente.

## Estructura

```
themes/src/
├── k-pelo/          # Tema dorado/lujo para K-Pelo
├── darleen/         # Tema personalizado para Darleen
├── diospa-center/   # Tema para Diospa Center
├── la-marque-rosa/  # Tema para La Marque Rosa
├── yira-studio/     # Tema para Yira Studio
└── demo-beauty/     # Tema para Demo Beauty
```

## Uso

Cada tema exporta:
- Variables CSS personalizadas
- Configuración de Tailwind
- Paleta de colores específica
- Tipografías

## Ejemplo de implementación

```ts
import { kpeloTheme } from '@salones/themes/k-pelo';

// Aplicar en tu app
document.documentElement.style.setProperty('--color-gold', kpeloTheme.colors.gold);
```
