import * as React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './src/routes'
const Stack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {
            routes.map(route => <Stack.Screen {...route} key={route.name} />)
          }
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}