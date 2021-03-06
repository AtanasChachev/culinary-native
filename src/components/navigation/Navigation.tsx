import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StoreType } from '@src/types/store/store';

import { useSelector } from 'react-redux';
import { SETTINGS } from '@src/config/settings';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '@src/pages/home/Home';
import Settings from '@src/pages/profile/Settings';
import Profile from '@src/pages/profile/Profile';
import Messages from '@src/pages/messages/Messages';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MessagesStack = createStackNavigator();

const homeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  )
};

const profileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profie" component={Profile} />
      <ProfileStack.Screen name="Settings" component={Settings} />
    </ProfileStack.Navigator>
  )
};

const messagesStackScreen = () => {
  return (
    <MessagesStack.Navigator screenOptions={{headerShown: false}}>
      <MessagesStack.Screen name="Messages" component={Messages}/>
    </MessagesStack.Navigator>
  )
};

const Navigation = ({}) => {
  const { theme } = useSelector((store: StoreType) => store);

  return (
    <NavigationContainer>
      <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: theme.current.activeColor,
          inactiveTintColor: theme.current.text,
          style: {
            backgroundColor: theme.current.background
          }
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName: string = '';

            if (route.name === 'Home') {
              iconName = SETTINGS.navigationTabIcons.home;
            } else if(route.name === 'Messages') {
              iconName = SETTINGS.navigationTabIcons.messages;
            } else {
              iconName = SETTINGS.navigationTabIcons.profile;
            }

            return <Ionicons name={iconName} size={size} color={focused ? theme.current.activeColor : theme.current.text} />;
          },
        })}>
        <Tab.Screen name="Home" component={homeStackScreen} />
        <Tab.Screen name="Messages" component={messagesStackScreen} />
        <Tab.Screen name="Profile" component={profileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;