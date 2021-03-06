import { UPDATE_THEME } from '@src/store/constants/theme-context';

export const updateThemeState = (theme: string, current: any) => ({
  type: UPDATE_THEME,
  payload: {
    theme: theme,
    current: current
  }
});