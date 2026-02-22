"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

// ─── Theme Registry ───────────────────────────────────────────────────────────
// Add any new theme here in the future — the rest of the system picks it up
// automatically. Each entry needs: id, label, and icon (lucide icon name string).
export const THEMES = [
  { id: "light", label: "Light", icon: "Sun" },
  { id: "dark",  label: "Dark",  icon: "Moon" },
  { id: "slate", label: "Slate", icon: "Layers" },
  { id: "ember", label: "Ember", icon: "Flame" },
  { id: "forest", label: "Forest", icon: "Trees" },
  { id: "amethyst", label: "Amethyst", icon: "Gem" },
  { id: "crimson",  label: "Crimson", icon: "Sword"      },
   { id: "arctic",   label: "Arctic",  icon: "Snowflake"  },
 { id: "arctic",   label: "Arctic",  icon: "Snowflake"  },
   { id: "golden",   label: "Golden",  icon: "Crown"      },
   { id: "ocean",    label: "Ocean",   icon: "Waves"      },
   { id: "rose",     label: "Rose",    icon: "Heart"      },
   { id: "steel",    label: "Steel",   icon: "Wrench"     },
   { id: "sakura",   label: "Sakura",  icon: "Flower"     },
   { id: "golden",   label: "Golden",  icon: "Crown"      },
   { id: "ocean",    label: "Ocean",   icon: "Waves"      },
   { id: "rose",     label: "Rose",    icon: "Heart"      },
   { id: "steel",    label: "Steel",   icon: "Wrench"     },
   { id: "sakura",   label: "Sakura",  icon: "Flower"     },
   { id: "golden",   label: "Golden",  icon: "Crown"      },
   { id: "ocean",    label: "Ocean",   icon: "Waves"      },
   { id: "rose",     label: "Rose",    icon: "Heart"      },
   { id: "steel",    label: "Steel",   icon: "Wrench"     },
   { id: "sakura",   label: "Sakura",  icon: "Flower"     },

  // ↓ Future themes — just uncomment / add more entries:
  // { id: "forest", label: "Forest", icon: "Trees" },
  // { id: "rose",   label: "Rose",   icon: "Flower2" },
];

// The "light" theme is represented by *no* data-theme attribute (matches your
// existing CSS where only dark/slate have [data-theme] blocks). All other themes
// set data-theme="<id>" on <html>.
const LIGHT_THEME_ID = "light";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(LIGHT_THEME_ID);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : LIGHT_THEME_ID;
    const resolved = storedTheme || systemTheme;
    // Guard: only accept themes that exist in the registry
    const valid = THEMES.find((t) => t.id === resolved);
    setTheme(valid ? resolved : LIGHT_THEME_ID);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;

    if (theme === LIGHT_THEME_ID) {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  // Original toggleTheme kept exactly as-is (light ↔ dark)
  const toggleTheme = () => {
    setTheme((prev) => (prev === LIGHT_THEME_ID ? "dark" : LIGHT_THEME_ID));
  };

  // New: set any registered theme by id
  const setThemeById = (id) => {
    const valid = THEMES.find((t) => t.id === id);
    if (valid) setTheme(id);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeById, mounted, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}