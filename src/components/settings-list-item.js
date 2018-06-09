import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity
 } from 'react-native';

 import FIcon from "react-native-vector-icons/FontAwesome";
import Colors from '../resources/styles/colors';


 const SettingsListItem = ({ onPress, title, icon, style  }) => {

        const {container,textContainer,textStyle, iconStyle} = styles;
        return (

            <TouchableOpacity style={[container, style]} activeOpacity={0.7} 
                              onPress={onPress}>

                    <View style={textContainer}>
                        <FIcon name={icon} size={15} color={Colors.LIGHT_DARK_COLOR}/>
                        <Text style={textStyle}>{ title }</Text>
                    </View>
                    <FIcon name="chevron-right" size={10} style={iconStyle}/>

            </TouchableOpacity>

        )


 }




 const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 15,
            backgroundColor: Colors.WHITE_COLOR,
        },
        textContainer: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        textStyle: {
            marginLeft: 15,
            color: Colors.LIGHT_DARK_COLOR
        },
        iconStyle: {
            color: Colors.LIGHT_GREY_COLOR
        }
 })




 export { SettingsListItem };