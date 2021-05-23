import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {imagesConfig} from '../../config';
import auth from '@react-native-firebase/auth';
import ShareDataService from '../../services/ShareDataService';


export default class EnterPhoneNumber extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      phoneNo:''
    }
  }
 
  // Render any loading content that you like here
  render() {
    return (
      <>
        <View style={styles.viewStyle}>
        <Text
              style={[
                styles.imageStyle,
                {marginTop: 40, fontSize: 24,  marginTop:40},
              ]}>
              Welcome to CollegeSpace
            </Text>
        <Image source={require('../../assets/phoneBack1.png')} style={{flex:0,marginTop:"10%",height:300,width:320,alignSelf:'center'}} />
          <View style={[styles.imageviewStyle,{margin:20}]}>
            <Text
              style={[
                styles.imageStyle,
                {marginTop: 10, fontSize: 24},
              ]}>
              Let's start with your 
mobile number
            </Text>
            <TextInput
              style={{
                height: 60,
                borderColor: '#4a47a3',
                borderWidth: 2,
                marginTop: 20,
                borderRadius: 15,
                color: '#4a47a3',
                fontFamily:'Poppins-Medium',
                fontSize: 20,
                paddingLeft: 20,
              }}
              keyboardType={'numeric'}
              placeholderTextColor={'grey'}
              placeholder={'Enter phone number ...'}
              input={'number'}
              value={this.state.phoneNo}
              onChangeText={phoneNo=>{this.setState({phoneNo: phoneNo})}}
              //   onChangeText={text => onChangeText(text)}
            />
            <TouchableOpacity
              onPress={() => {
                ShareDataService.setMobile(this.state.phoneNo);
                this.props.navigation.navigate('enterOtp',{params:{phoneNo:this.state.phoneNo}});
              }
                
                }>
              <Text
                // onPress={this.props.navigation.navigate('chooseBranch')}
                // onPress={() => navigation.push('chooseBranch')}
                //   onPress={() => this.props.navigation.navigate('chooseBranch')}
                style={[styles.imageStyle, styles.joinButton,{backgroundColor:'#4a47a3',color:'white',paddingTop:10}]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
     
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  imageviewStyle: {
    // alignItems: 'center',

    alignSelf: 'center',
    // flexDirection: 'row',
  },
  joinButton: {
    // fontWeight: 'bold',
    // position: 'absolute',
    // fontSize: 24,
    marginTop: 40,
    alignSelf: 'center',
    paddingLeft: 60,
    paddingRight: 60,
    // paddingTop: 7,
    // paddingBottom: 7,
    borderColor: '#4a47a3',
    fontFamily:'Poppins-Medium',
    borderWidth: 3,
    borderRadius: 40,
  },
  imageStyle: {
    // fontWeight: 'normal',
    fontSize: 24,
    color: '#4a47a3',
    fontFamily:'Poppins-Medium',
    alignSelf: 'center',
   
  },
});
