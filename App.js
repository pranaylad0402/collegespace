import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  InitialScreen,
  ChooseBranchScreen,
  ChooseSemScreen,
  EnterPhoneNumber,
  EnterOtp,
  EnterName,
} from './src/Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from './src/Screens/BottomNavigation/bottomNavigation'
const Stack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="bottomNav"
          screenOptions={{
            headerShown: false,
            headerBackImage:true,
          }}>
          <Stack.Screen name="Initial" component={InitialScreen} />
          <Stack.Screen name="enterPhone" component={EnterPhoneNumber} />
          <Stack.Screen name="enterOtp" component={EnterOtp} />
          <Stack.Screen name="enterName" component={EnterName} />
          <Stack.Screen name="chooseBranch" component={ChooseBranchScreen} />
          <Stack.Screen name="chooseSem" component={ChooseSemScreen} />
          <Stack.Screen name="bottomNav" component={BottomNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
