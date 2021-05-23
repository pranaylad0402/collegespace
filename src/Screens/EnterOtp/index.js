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
import {db} from '../Firebase/firebase';

export default class EnterOtp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otp:"",
      confirm:null
    }
   
  }
  componentDidMount(){
    this.sendOtp();
  }
  sendOtp=async()=>{
    var {params} = this.props.route.params
    // console.log(params.phoneNo);
    if(params.phoneNo.length==10){
      var phoneNo="+91"+params.phoneNo;
     
      const confirmation = await auth().signInWithPhoneNumber(phoneNo);
      // console.log(confirmation);
      this.setState({confirm:confirmation})
  
      //
    }
    else{
      alert("Please enter a valid phone number")
    }
    
  }
  checkOtp=async()=>{
    try {
 
  await this.state.confirm.confirm(this.state.otp);
  var {params} = this.props.route.params;
  db.ref('/users')
  .orderByChild('phone')
  .equalTo(params.phoneNo)
  .once('value')
  .then(snapshot => {
    if (snapshot.exists()) {
      this.props.navigation.navigate('bottomNav');
      // alert('User already exists')
      // let userData = snapshot.val();
      // console.log(userData);
      // Alert.alert('username is taken');
      // return userData;
    } else {
      this.props.navigation.navigate('enterName');
      // alert('new user');
      // console.log('not found');
      // firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(email, password)
      //   .then(async user => {
      //     console.log('Data created', user);
      //   });
    }
});
      // 
      // alert("sucessful confirmation");
    } catch (error) {
      alert('Invalid code.');
    }
  }
  render() {
    return (
      <>
        <View style={styles.viewStyle}>
        <Text
              style={[
                styles.imageStyle,
                {marginTop: 40, fontSize: 24,  marginTop:20},
              ]}>
              Phone Verification
            </Text>
        <Image source={require('../../assets/otpBack1.png')} style={{flex:0,marginTop:"5%",height:300,width:320,alignSelf:'center'}} />
          <View style={styles.imageviewStyle}>
            <Text
              style={[
                styles.imageStyle,
                {marginTop: 40, fontSize: 24,  margin:20},
              ]}>
              We sent an OTP to your mobile number
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
                margin:20
              }}
              keyboardType={'numeric'}
              placeholderTextColor={'grey'}
              placeholder={'Enter the otp...'}
              input={'number'}
              value={this.state.otp}
              onChangeText={otp=>{this.setState({otp:otp})}}
              //   onChangeText={text => onChangeText(text)}
            />
            <TouchableOpacity
            // onPress={() => this.props.navigation.navigate('home')}
            onPress={() => {this.checkOtp()}}
            >
              <Text
                // onPress={this.props.navigation.navigate('chooseBranch')}
                // onPress={() => navigation.push('chooseBranch')}
                //   onPress={() => this.props.navigation.navigate('chooseBranch')}
                style={[styles.imageStyle, styles.joinButton,{backgroundColor:'#4a47a3',color:'white',paddingTop:10}]}>
                Continue
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{this.sendOtp()}}>
            <Text
              style={[
                styles.imageStyle,
                {marginTop: 40, fontSize: 16,  marginTop:20,textDecorationLine: "underline",},
              ]}>
              Resend otp
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
    justifyContent: 'center',
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
