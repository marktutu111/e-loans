import React from 'react';
import { 
    StyleSheet,
    View,
    Text
 } from 'react-native';

 import Colors from "../resources/styles/colors";
 import { IconButton } from "../components";
 


 const BreadCrumbEdit = ({ text, onPress }) => {

        const {textStyle,container, iconStyle} = styles;

        return (

            <View style={container}>

                <Text style={textStyle}>{text}</Text>
                <View style={iconStyle}>
                    <IconButton name="pencil" size={20} onPress={onPress} />
                </View>

            </View>
        )

 }


 const styles = StyleSheet.create({
    textStyle: {
        color: Colors.DARK_COLOR,
        fontSize: 18
    },
    container: {
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        borderColor: Colors.INPUT_BORDER_COLOR,
        borderWidth: 1,
        borderRadius: 100,
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    iconStyle: {
        marginLeft: 10
    }
 })


 export { BreadCrumbEdit };