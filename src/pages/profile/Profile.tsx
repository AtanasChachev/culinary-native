import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { StoreType } from '@src/types/store/store';

import { updateThemeState } from '@src/store/actions/theme-context';
import { lightTheme, darkTheme } from '@src/styles/themes/theme';
import { storeItem } from '@src/utils/storage';

import SwitchComponent from '@src/components/Switch';

const Profile = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((store: StoreType) => store.theme);
  
  return (
    <SafeAreaView>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Text>Dark theme</Text>

        <SwitchComponent
          onValueChange={() => {
            dispatch(updateThemeState(
              theme === 'light' ? 'dark' : 'light', 
              theme === 'light' ? darkTheme : lightTheme
            ));
            
            storeItem('theme', theme === 'light' ? 'dark' : 'light');
          }}
          trackColorTrue={'green'}
          trackColorFalse={'#000'}
          value={theme === 'dark'}
        />
      </View>

      <Button title="Navigate" onPress={() => {
        console.log('123');
        navigation.navigate('Settings');
      }} />
    </SafeAreaView>
  )
};

export default Profile;