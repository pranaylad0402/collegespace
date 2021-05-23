import React from 'react';
import {Text, StyleSheet, View,Image} from 'react-native';
import {db} from '../Firebase/firebase';


export default class InitialScreen extends React.Component {
  // Render any loading content that you like here

  render() {
    return (
      <>
        <View style={styles.viewStyle}>
        <Image source={require('../../assets/collegeBack.png')} style={{flex:0,marginTop:"30%",height:400,width:320,alignSelf:'center'}} />
          <View style={styles.imageviewStyle}>
        
            <Text style={styles.imageStyle}>College</Text>
            <Text style={[styles.imageStyle, {fontWeight: 'normal'}]}>
              Space
            </Text>
          </View>
        </View>
        <Text
          // onPress={this.props.navigation.navigate('chooseBranch')}
          // onPress={() => navigation.push('chooseBranch')}
          onPress={() => this.props.navigation.navigate('enterPhone')}
          style={[styles.imageStyle, styles.joinButton]}>
          Get started
        </Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },

  imageviewStyle: {
    // alignItems: 'center',

    alignSelf: 'center',
    flexDirection: 'row',
  },
  joinButton: {
    
    position: 'absolute',
    fontSize: 30,
    bottom: 80,
    alignSelf: 'center',
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 7,
    paddingBottom: 5,
    borderColor: '#4a47a3',
    borderWidth: 2,
    borderRadius: 40,
    fontFamily:'Poppins-Medium'
  },
  imageStyle: {
    // fontWeight: 'bold',
    fontSize: 40,
    color: '#4a47a3',
    fontFamily:'Poppins-Medium'

    // alignSelf: 'center',
  },
});
