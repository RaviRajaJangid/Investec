import React from 'react';

// Screens
import HomeScreen from '../screens/HomeScreen';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Route
import route from './route';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={route.home}>
        <Stack.Screen
          name={route.home}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={route.firstScreen} component={FirstScreen} />
        <Stack.Screen name={route.secondScreen} component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
