import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
//import HomeScreen from './component/Home'
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='Home'component= {HomeScreen}/>
        <Stack.Screen name='SpaceCrafts 'component= {SpaceCraftsScreen}/>
        <Stack.Screen name='DailyPic'component= {DailyPicScreen}/>
        <Stack.Screen name='StarMap'component= {StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
