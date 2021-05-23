import React from 'react';
import {StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import Video from 'react-native-video';
import YoutubePlayer from 'react-native-youtube-iframe';
import {db} from '../Firebase/firebase';
// const data =[{
//     subject:"Maths 1",
//     videoUrls:["A3rnij1ep2I","E3DwIiVtsq8","tkPOPDLSC-s"]
// },
// {
//     subject:"Physics 1",
//     videoUrls:["OqHv8gy3g7s","xHkQU8nvegA","WBa9FEuXpOk"]
// },
// {
//     subject:"Chemistry 1",
//     videoUrls:["3O6OfCaVadI","GfNwVUd1LBU","FCQ26RQBZLg"]
// },
// {
//     subject:"BEE",
//     videoUrls:["Vd2UJiIPbag","FjaJEo7knF4","LdMXFW3d_Mw"]
// },
// {
//     subject:"Engineering Mechanics",
//     videoUrls:["Z4WN2Z9okfs","Hy1yHf2GOjQ","Os0iikG6F-c"]
// }] //sem1
//Big data analytics,internet of everything,Enterprise resource planning,Project management
//rJ3yLobvC5g,RIMA4rvNpI8,HIkng9W2QFA|Ukfpq71BoMo,U0XlAqFT34s,QaoJNXW6SQo|rHDOgJv8-Ik,YTfOy54aqmc,hAaINQciTHo|vUMGvpsb8dc,rDT3Ki51Dl4,Wc-n6dr9vrk
const data =[{
    subject: "Big data analytics",
    videoUrls:["rJ3yLobvC5g","RIMA4rvNpI8","HIkng9W2QFA"]
},
{
 subject: "internet of everything",
 videoUrls:["Ukfpq71BoMo","U0XlAqFT34s","QaoJNXW6SQo"]
},
{
 subject :"Enterprise resource planning",
 videoUrls:["rHDOgJv8-Ik","YTfOy54aqmc","hAaINQciTHo"]
},
{
 subject: "Project management",
 videoUrls: ["vUMGvpsb8dc","rDT3Ki51Dl4","Wc-n6dr9vrk"]
}]
export default class VideosScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
        };

    }
    componentDidMount() {
        db.ref('/studymaterial')
        .once('value').then(snapshot => {
          // snapshot.val() is the dictionary with all your keys/values from the '/store' path
          // this.setState({ stores: snapshot.val() })
          console.log(snapshot.val());
          var mainData=snapshot.val();
          var stringSub=snapshot.val().semester['Semester 8'].subject;
          var stringVideoUrl=snapshot.val().semester['Semester 8'].videoUrls;
          
          var jsonSub=stringSub.split(',');
        //   console.log();
        var jsonSub=stringSub.split(',');
          var jsonVideoUrl=stringVideoUrl.split('|');
          console.log(jsonVideoUrl,jsonSub);
          var dataArray=[];
          for(var i=0;i<jsonSub.length;i++){
              var videoUrls=jsonVideoUrl[i].split(',');
              dataArray.push({
                  subject: jsonSub[i],
                  videoUrls:videoUrls
              }) 
          }
          this.setState({data:dataArray});
        })
      }
    render() {
        return (
            <ScrollView >
                {this.state.data.map((item,index) =>(
                    <>
                    <Text style={{fontSize:20,fontFamily:"Poppins-Medium",margin:20,color:'#4a47a3'}} key={index}>{item.subject}</Text>
                 
           {item.videoUrls.map((video,i) =>(
               <View key={i.toString()+index.toString()} style={{margin:20}}>
            <YoutubePlayer height={200} play={false} videoId={video}  />
            </View>
           ))}
     
               
                     </>
                ))}
            </ScrollView>
           
        )
    }
}