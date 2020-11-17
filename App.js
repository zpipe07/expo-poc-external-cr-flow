import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import RequestScreen from './screens/RequestScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTitle: (props) => <Header /> }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Request" component={RequestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
