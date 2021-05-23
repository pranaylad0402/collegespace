import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

import Pdf from 'react-native-pdf';
import { WebView } from 'react-native-webview';

export default class PDFExample extends React.Component {
    render() {
        const source = {uri:'https://drive.google.com/file/d/1IOzLArh3OxOcGL8_krL0mnaQc6Gee_Hw/view?usp=sharing',cache:true};
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};

        return (
            <View style={styles.container}>
                <WebView    style={{ height: 500, width: 300 }} source={ {uri:'https://drive.google.com/file/d/1IOzLArh3OxOcGL8_krL0mnaQc6Gee_Hw/view?usp=sharing'}}/>
                {/* <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link presse: ${uri}`)
                    }}
                    style={styles.pdf}/> */}
            </View>
        )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});