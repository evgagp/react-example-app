import { useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../config/themeContext';
import { IThemeProvider, Theme } from '../models';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const defaultValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};
