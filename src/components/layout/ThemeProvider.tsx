"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Theme Provider
 *
 * This component wraps the application and provides theme context using the `next-themes` library. It allows for easy theme switching between light and dark modes, as well as system preference detection.
 *
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}