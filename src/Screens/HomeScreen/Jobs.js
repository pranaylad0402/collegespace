import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
export default class JobsScreen extends React.Component {
    render() {
        return (
            <>
            <Text
            style={[
            {   fontSize: 24,
                color: '#4a47a3',
                fontFamily:'Poppins-Medium'},
              {marginTop: 20,alignSelf:'flex-start',marginLeft:20},
            ]}>
           Jobs/Internships
          </Text>
          <View style={{justifyContent: 'center',alignItems: 'center'}} >
          <Text
            style={[
            {   fontSize: 24,
                color: '#4a47a3',
                fontFamily:'Poppins-Medium'},
              {marginTop: 80,alignSelf:'center'},
            ]}>
           Coming Soon
          </Text>
          <View style={{width:100,height:4,backgroundColor:"#4a47a3"}}/>
          <Image source={require('../../assets/comingSoon.png')} style={{flex:0,height:400,width:300,alignSelf:'center',marginLeft:40,marginTop:20}} />
          <Text
            style={[
            {   fontSize: 16,
                color: '#4a47a3',
                fontFamily:'Poppins-Regular'},
              {marginTop: 10,alignSelf:'center'},
            ]}>
          Stay tuned
          </Text>
          </View>
          </>
        )
    }
}