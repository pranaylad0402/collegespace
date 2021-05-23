import React from 'react';

import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';


export default class PageDigitalId extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNameAndOccupation() {
    return (
      <>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 36,
            color: '#4a47a3',
            // textAlign: 'center',
            marginTop: 100,
            marginLeft: 46,
          }}>
          Pranay Lad
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 21,
            color: '#4a47a3',
            textAlign: 'left',
            marginTop: 0,
            marginLeft: 46,
          }}>
         Information Technology
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 21,
            color: '#4a47a3',
            textAlign: 'left',
            marginTop: 0,
            marginLeft: 46,
          }}>
        Semester 8, MGMCET
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 21,
            color: '#4a47a3',
            textAlign: 'left',
            marginTop: 0,
            marginLeft: 46,
          }}>
         Mumbai University
        </Text>
      </>
    );
  }
  renderCollegeSpace() {
    return (
      <View style={{flexDirection: 'column',alignSelf: 'center'}}>
     
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 40,
              color: 'white',
              textAlign: 'center',
              marginTop: 5,
            }}>
            College
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 40,
              color: 'white',
              textAlign: 'center',
              marginTop: 5,
            }}>
            Space
          </Text>
        </View>
      </View>
    );
  }
 
  renderLogoOfCompanies() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop:60
        }}>
        {this.renderCollegeSpace()}
        {/* {this.renderPagarBook()} */}
      </View>
    );
  }

  renderProfileImage() {
    return (
      <View
      // add source={{ uri:'image url here to show profile image'}}
        style={{
          height: 200,
          alignSelf: 'center',
          justifyContent:'center',
          width: 200,
          borderRadius: 200,
          backgroundColor: 'white',
          marginTop: 50,
          borderWidth: 10,
          borderColor: '#262C38',
        }}
      >
          <Text style={{fontSize:120,alignSelf: 'center',fontFamily:'Poppins-Medium',color:'#4a47a3',paddingTop:40}}>P</Text>
      </View>
    );
  }
  render() {
    return (
      <ImageBackground
        source={require('./assets/bg.png')}
        style={{
          flex: 1,
          resizeMode: 'cover',
        }}>
        {this.renderLogoOfCompanies()}
        {this.renderProfileImage()}

        {this.renderNameAndOccupation()}
        <Text style={{alignSelf: 'flex-end',fontSize:20,textDecorationLine:'underline',color:'#4a47a3',fontFamily:"Poppins-Regular",position:'absolute',bottom:100,right:10}}>Edit Profile</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  headerText: {
    fontFamily: 'SpartanMB-Black',
    fontSize: 30,
    marginTop: 40,
    marginLeft: 20,
  },
  boldText: {
    fontSize: 14,
    fontFamily: 'SpartanMB-Bold',
  },
  MediumText: {
    fontSize: 14,
    fontFamily: 'SpartanMB-Medium',
  },
});
