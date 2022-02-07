import { createContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type ThemeContextData = {
  theme: string;
  themeToggle: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

type ThemeContextProviderProps = {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {

  const [theme, setTheme] = useLocalStorage('theme', 'dark-mode');

  function themeToggle() {
    if (theme === 'dark-mode') {
      setTheme('light-mode');
    } else {
      setTheme('dark-mode');
    }
  }

  return (
    <ThemeContext.Provider
      value={{ theme, themeToggle }}
    >
      {children}
    </ThemeContext.Provider>
  )
}