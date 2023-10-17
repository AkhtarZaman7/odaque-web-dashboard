import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemesProvider({ children }) {
  return <NextThemesProvider>{children}</NextThemesProvider>;
}