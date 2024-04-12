import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Pages/Home';
import UserInfo from './Pages/UserInfo';
import BookAp from './Pages/BookAp';
import Reader from './Pages/Reader';
import AboutUs from './Pages/AboutUs';
import LoginScreen from './Pages/Login';
import RegisterScreen from './Pages/Register'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Reader" component={Reader} />
      <Tab.Screen name="AboutUs" component={AboutUs} />
      <Tab.Screen name="UserInfo" component={UserInfo} />
      
    </Tab.Navigator>
  );
}

const AuthStack = createStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="BookAp" component={BookAp} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
