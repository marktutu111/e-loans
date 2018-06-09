import React from 'react';
import { 
    StyleSheet,
    View,
    Image
 } from 'react-native';
import Colors from '../resources/styles/colors';



 const RoundAvatar = ({ style, source }) => {

        const { container, imageStyle } = styles;
        return (

            <View style={[container, style]}>
                <Image style={imageStyle} source={source}/>
            </View>

        )


 }



 const styles = StyleSheet.create({
     container: {
         width: 100,
         height: 100,
         borderRadius: 100,
         justifyContent: 'center',
         alignItems: 'center',
         overflow: 'hidden',
         borderColor: Colors.INPUT_BORDER_COLOR,
         borderWidth: 10
     },
     imageStyle: {
         width: '100%',
         height: '100%'
     }
 })



 export { RoundAvatar };