export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IThemeContext {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}
