import { UPDATE_THEME } from '@src/store/constants/theme-context';
import { lightTheme } from '@src/styles/themes/theme';
import { StoreTheme } from '@src/types/store/theme';

const themeState: StoreTheme = {
  theme: 'light',
  current: lightTheme
};

const ThemeReducer = (state: StoreTheme = themeState, action: any) => {
  switch(action.type) {
    case UPDATE_THEME : {
      const {
        theme,
        current
      } = action.payload;

      return { 
          ...state, 
          theme: theme,
          current: current
      };
    }

    default: {
      return { ...state };
    }  
  }
}

export default ThemeReducer;