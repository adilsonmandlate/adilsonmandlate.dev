"use client";

import { ThemeProvider } from "next-themes";

export function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      forcedTheme="dark"
    >
      {children}
    </ThemeProvider>
  );
}
