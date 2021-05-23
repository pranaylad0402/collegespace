import React from 'react';
import {StyleSheet, Text, View,Dimensions} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import VideoScreen from './Videos';
import BooksScreen from './Books'
const FirstRoute = ({navigation}) => (
    <VideoScreen />
  );
  const SecondRoute = ({navigation}) => (
  <BooksScreen />
  );
  
  const ThirdRoute = ({navigation}) => (
    <View style={{ flex: 1, backgroundColor: 'white' }} />
  );
  const FourthRoute = ({navigation}) => (
    <View style={{ flex: 1, backgroundColor: 'white' }} />
  )
export default class StudyMaterialScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
              { key: 'first', title: 'Videos' },
               { key: 'second', title: 'Books' },
               { key: 'third', title: 'Papers' },
              { key: 'four', title: 'TT' },
              
            ],
        }
    }
    render() {
        return (
            <>
            <View style={{backgroundColor:'#4a47a3'}}>
            <Text
            style={[
            {   fontSize: 24,
                color: 'white',
                fontFamily:'Poppins-Medium'},
              {alignSelf:'flex-start',margin:20},
            ]}>
            Study Material
          </Text>
 
          </View>
          <TabView

navigationState={this.state}
renderTabBar={props =>

<TabBar
{...props}
labelStyle={{fontFamily:'Poppins-Bold',paddingTop:5,fontSize:14}}
indicatorStyle={{ backgroundColor: 'white',height:4,marginLeft:2,marginRight:2 }}
style={{height:60,backgroundColor:'#4a47a3'}}
/>
}
renderScene={SceneMap({
first: FirstRoute,
second: SecondRoute,
third:ThirdRoute,
four:FourthRoute,
})}
onIndexChange={index => this.setState({ index })}
initialLayout={{ width: Dimensions.get('window').width }}
swipeEnabled={true}
/>
          </>
        )
    }
}