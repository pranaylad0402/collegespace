import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {imagesConfig} from '../../config';
import RadioButtonRN from 'radio-buttons-react-native';
import ShareDataService from '../../services/ShareDataService';

export default class ChooseBranch extends React.Component {
  // Render any loading content that you like here
  constructor(props) {
    super(props);
    this.state = {
      branches: [
        {label:"Computer Engineering"},{label:"Information Technology"},{label:"Civil Engineering"},{label:"Electronics Engineering"},{label:"Mechanical Engineering"}],
        selectedBranch:"",
    }
  }
  onPress(){
    if(this.state.selectedBranch==''){
     alert("Please select a branch");
    }else{
      ShareDataService.setBranchName(this.state.selectedBranch);
      this.props.navigation.navigate('chooseSem');
    }
 

  }
  render() {
    return (
      <>
        <View style={styles.viewStyle}>
          <View style={styles.imageviewStyle}>
            <Text
              style={[
                styles.imageStyle,
                {marginTop: 40, fontSize: 30},
              ]}>
              Choose your branch
            </Text>
            <RadioButtonRN
  data={this.state.branches}
  selectedBtn={(e) => {this.setState({selectedBranch:e.label})}}
  activeColor='#4a47a3'
  style={{margin:20}}
  boxStyle={{borderWidth:0}}
  textStyle={{fontSize:20,fontFamily:'Poppins-Medium',color:'#4a47a3'}}
/>
<TouchableOpacity
             onPress={() =>this.onPress()}
           
            >
              <Text
                // onPress={this.props.navigation.navigate('chooseBranch')}
                // onPress={() => navigation.push('chooseBranch')}
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
     justifyContent: 'center',
    backgroundColor: 'white',
  
  },

  imageviewStyle: {
    // alignItems: 'center',

    // alignSelf: 'center',
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

