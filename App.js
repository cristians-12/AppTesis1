import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}} tabBar={()=>null} >
        <Tab.Screen name='home' component={Home} options={{ tabBarLabel: () => null, tabBarVisible: false }}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;