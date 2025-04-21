"use client ";

import { createContext, useContext, useState } from "react";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import { ThemeProvider } from "@emotion/react";

const ThemeContext = createContext();
export function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useCustomTheme = () => useContext(ThemeContext);
