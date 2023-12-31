import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { HomeScreen } from './home.component';
import { ResourcesScreen } from './resources.component';
import { NewsScreen } from './news.component';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Home'/>
    <BottomNavigationTab title='Resources'/>
    <BottomNavigationTab title='News'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Resources' component={ResourcesScreen}/>
    <Screen name='News' component={NewsScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);