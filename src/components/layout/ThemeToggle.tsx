"use client";

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { pressableBehavior } from '@/lib/animations';
import { Button } from '@/components/ui/button'; 

// Button of shadcn with support for Framer Motion props (whileTap, etc.)
const MotionButton = motion(Button);

// Subscribe function that does nothing, used for useSyncExternalStore to avoid unnecessary subscriptions.
const emptySubscribe = () => () => {};

/**
 * Returns `true` only after the component has hydrated on the client.
 * At server-side rendering, it returns `false`, which helps avoid hydration mismatches.
 * This approach avoids the side effect of an extra rendering in a cascade.
 */
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,   // snapshot in client
    () => false   // snapshot on server
  );
}

/**
 * Theme Toggle
 *
 * Button that toggles between light and dark themes using the `next-themes` library. It displays a sun icon for light mode and a moon icon for dark mode, and it handles the theme switching logic.
 */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    // Placeholder to avoid hydration mismatch: the theme is not yet resolved on the server, so we render a neutral placeholder until the component is mounted on the client.
    return <div className="w-9 h-9" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <MotionButton
        whileTap={pressableBehavior.whileTap}
        whileHover={pressableBehavior.whileHover}
        type="button"
        variant="outline"
        size="icon"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
        >
  { isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </MotionButton>
  );
}