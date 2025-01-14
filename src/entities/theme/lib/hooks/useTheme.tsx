import { useContext } from 'react';
import { Theme } from '../../models';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../../config/themeContext';

interface IUseThemeResults {
  readonly theme?: Theme;
  readonly toggleTheme: () => void;
}

export const useTheme = (): IUseThemeResults => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
