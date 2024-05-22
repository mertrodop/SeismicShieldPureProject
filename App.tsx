import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './src/Screens/LandingPage';
import React from 'react';
import {PreScreen} from './src/Screens/PreScreen';
import {UpdateInfo} from './src/Screens/UpdateInfo';
import {ContactsInfo} from './src/Screens/ContactsInfo';
import {SignUp} from './src/Screens/SignUp';
import {LoginScreen} from './src/Screens/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PreScreen" component={PreScreen} />
        <Stack.Screen name="UpdateInfo" component={UpdateInfo} />
        <Stack.Screen name="ContactsInfo" component={ContactsInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;