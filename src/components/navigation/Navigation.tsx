import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={homeStackScreen} />
        <Tab.Screen name="Messages" component={messagesStackScreen} />
        <Tab.Screen name="Profile" component={profileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;