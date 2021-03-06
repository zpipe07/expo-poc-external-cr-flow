import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import RequestScreen from './screens/RequestScreen'
import CompleteScreen from './screens/CompleteScreen'

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00053e',
  },
}

const linking = {
  config: {
    screens: {
      Home: '',
      Request: '/request',
      Complete: '/complete',
    },
  },
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerTitle: (props) => <Header /> }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Request" component={RequestScreen} />
          <Stack.Screen name="Complete" component={CompleteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
