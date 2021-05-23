import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import NewsScreen from '../HomeScreen/NewsScreen';
import ProfileScreen from '../HomeScreen/Profile';
import StudyMaterialScreen from '../HomeScreen/StudyMaterial';
import JobsScreen from '../HomeScreen/Jobs';
export default class App extends React.Component {
    render() {
      return (
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: "white",
            inactiveTintColor: "lightgrey",
            labelStyle:{fontSize:14,fontFamily:'Poppins-Bold',marginRight:10},
            labelPosition:'beside-icon',
            style:{backgroundColor:'#4a47a3',position:'absolute',bottom:20,right:20,left:20,borderBottomLeftRadius:20,borderBottomRightRadius:20,height:60}
          }}
 
     
      >
     
      <Tab.Screen name="Study" component={StudyMaterialScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Jobs" component={JobsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
       
    
      </Tab.Navigator>
      );
    }
  }
