/* 
TODO FIX THIS WHOLE THING
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import HomeScreen from '../app/(tabs)/index';
import HeaderWithSettings from '@/components/HeaderWithSettings';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              header: () => <HeaderWithSettings title='Title'/>,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppNavigator;
