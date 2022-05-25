/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import type {Node} from 'react';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import RestaurantsScreen from './src/features/restaurants/screen/Restaurants';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          {/* Rest of your app code */}
          <Tab.Navigator
            initialRouteName="Restaurants"
            screenOptions={{
              tabBarActiveTintColor: 'tomato',
            }}>
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsScreen}
              options={{
                tabBarLabel: 'Restaurants',
                tabBarIcon: ({color, size}) => (
                  <MaterialIcons name="restaurant" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Map"
              component={RestaurantsScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <MaterialIcons name="map" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={RestaurantsScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <MaterialIcons name="settings" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
