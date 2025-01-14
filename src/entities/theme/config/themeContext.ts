import { createContext } from 'react';
import { IThemeContext } from '../models';

export const ThemeContext = createContext<IThemeContext>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
