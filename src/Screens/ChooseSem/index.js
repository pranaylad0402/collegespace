import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {imagesConfig} from '../../config';
import RadioButtonRN from 'radio-buttons-react-native';
import {db} from '../Firebase/firebase';
import ShareDataService from '../../services/ShareDataService';

export default class ChooseSem extends React.Component {
  // Render any loading content that you like here
  constructor(props) {
    super(props);
    this.state = {
      branches: [
        {label:"Semester 1"},{label:"Semester 2"},{label:"Semester 3"},{label:"Semester 4"},{label:"Semester 5"},{label:"Semester 6"},{label:"Semester 7"},{label:"Semester 8"}],
        selectedSem:"",
    }
    
  }
 
onPress(){
if(this.state.selectedSem==''){
  alert("please select a Semester");
}else{
  ShareDataService.setSemester(this.state.selectedSem);
  var userData=ShareDataService.getUserData();
  db.ref('/users').push(userData);  
  this.props.navigation.navigate('bottomNav');
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
              Choose your semester
            </Text>
  <RadioButtonRN
  data={this.state.branches}
  selectedBtn={(e) => {this.setState({selectedSem:e.label})}}
  activeColor='#4a47a3'
  style={{margin:10}}
  boxStyle={{borderWidth:0}}
  textStyle={{fontSize:18,fontFamily:'Poppins-Medium',color:'#4a47a3'}}
/>
<TouchableOpacity
             onPress={() => {
     this.onPress();
           }
          }
          
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
    marginTop: 20,
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

