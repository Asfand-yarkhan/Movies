import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import Setting from './Screens/Setting';
import Login from './Screens/Login';


const Tab = createBottomTabNavigator();

function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}  />
        <Tab.Screen name="Settings" component={Setting} />
        <Tab.Screen name="Login" component={Login}  options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
       
  );
}

const styles = StyleSheet.create({
  
});

export default App;