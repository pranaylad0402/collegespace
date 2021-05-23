import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  
} from 'react-native';
import ShareDataService from '../../services/ShareDataService'
export default class EnterName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            uniName:'',
            clgName:''
        }
    }

    onPress(){
      if(this.state.firstName=='' || this.state.lastName=='' || this.state.uniName=='' || this.state.clgName==''){
        alert("Please enter the empty field");
      }else{
        ShareDataService.setFirstName(this.state.firstName);
        ShareDataService.setLastName(this.state.lastName);
        ShareDataService.setUniName(this.state.uniName);
        ShareDataService.setClgName(this.state.clgName);
        this.props.navigation.navigate('chooseBranch');
      }
    }
    render() {
        return (
            <>
          <View style={styles.viewStyle}>
                 <Text
              style={[
                styles.imageStyle,
                {marginTop: 60, fontSize: 30,alignSelf:'center'},
              ]}>
              User Details
            </Text>
            {/* <Text
              style={[
                styles.imageStyle,
                {marginTop: 40, fontSize: 24,  margin:20},
              ]}>
              Enter your first name
            </Text> */}
            <TextInput
              style={{
                height: 60,
                borderColor: '#4a47a3',
                borderWidth: 2,
                borderRadius: 15,
                color: '#4a47a3',
                fontFamily:'Poppins-Medium',
                fontSize: 20,
                paddingLeft: 20,
                marginLeft:20,
                marginRight: 20,
                marginTop: 20,
              }}
              placeholderTextColor={'grey'}
              placeholder={'Enter first name ...'}
              input={'text'}
              value={this.state.firstName}
              onChangeText={firstName=>{this.setState({firstName: firstName})}}
              //   onChangeText={text => onChangeText(text)}
            />
            {/* <Text
              style={[
                styles.imageStyle,
                {marginTop: 40, fontSize: 24,  margin:20},
              ]}>
              Enter your last name
            </Text> */}
            <TextInput
              style={{
                height: 60,
                borderColor: '#4a47a3',
                borderWidth: 2,
                borderRadius: 15,
                color: '#4a47a3',
                marginTop: 20,
                fontFamily:'Poppins-Medium',
                fontSize: 20,
                paddingLeft: 20,
                marginLeft:20,
                marginRight: 20,
              }}
             
              placeholderTextColor={'grey'}
              placeholder={'Enter last name ...'}
              input={'text'}
              value={this.state.lastName}
              onChangeText={lastName=>{this.setState({lastName: lastName})}}
              //   onChangeText={text => onChangeText(text)}
            />
            <TextInput
              style={{
                height: 60,
                borderColor: '#4a47a3',
                borderWidth: 2,
                borderRadius: 15,
                color: '#4a47a3',
                marginTop: 20,
                fontFamily:'Poppins-Medium',
                fontSize: 20,
                paddingLeft: 20,
                marginLeft:20,
                marginRight: 20,
              }}
             
              placeholderTextColor={'grey'}
              placeholder={'Enter university name ...'}
              input={'text'}
              value={this.state.uniName}
              onChangeText={uniName=>{this.setState({uniName: uniName})}}
              //   onChangeText={text => onChangeText(text)}
            />
            <TextInput
              style={{
                height: 60,
                borderColor: '#4a47a3',
                borderWidth: 2,
                borderRadius: 15,
                color: '#4a47a3',
                marginTop: 20,
                fontFamily:'Poppins-Medium',
                fontSize: 20,
                paddingLeft: 20,
                marginLeft:20,
                marginRight: 20,
              }}
             
              placeholderTextColor={'grey'}
              placeholder={'Enter college name ...'}
              input={'text'}
              value={this.state.clgName}
              onChangeText={clgName=>{this.setState({clgName: clgName})}}
              //   onChangeText={text => onChangeText(text)}
            />
                  <TouchableOpacity
             onPress={() => {this.onPress()}}
           
            >
              <Text
                // onPress={this.props.navigation.navigate('chooseBranch')}
                // onPress={() => navigation.push('chooseBranch')}
                //   onPress={() => this.props.navigation.navigate('chooseBranch')}
                style={[styles.imageStyle, styles.joinButton,{backgroundColor:'#4a47a3',color:'white',paddingTop:10}]}>
                Continue
              </Text>
            </TouchableOpacity>
            
        </View>
        
        </>
        )
    }
}
const styles = StyleSheet.create({
    viewStyle: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    
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
    //   marginRight:40,
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
    //   alignSelf: 'center',
     
    },
  });
  