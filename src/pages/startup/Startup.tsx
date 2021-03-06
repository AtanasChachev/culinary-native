import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { getItem } from '@src/utils/storage';
import { updateThemeState } from '@src/store/actions/theme-context';
import { lightTheme, darkTheme } from '@src/styles/themes/theme';
import { StoreType } from '@src/types/store/store';

import Navigation from '@src/components/navigation/Navigation';

const Startup = ({}) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((store: StoreType) => store.theme);

  const setTheme = async () => {
    const theme = await getItem('theme');
    if(theme) dispatch(updateThemeState(theme, theme === 'dark' ? darkTheme : lightTheme));
  }

  useEffect(() => {
    setTheme();
  }, []);
  
  return (
    <>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      <Navigation></Navigation>
    </>
  )
};

export default Startup;