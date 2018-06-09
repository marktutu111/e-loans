import React from 'react';
import { 
    StyleSheet,
    View,
    Text
 } from 'react-native';

 import Colors from "../resources/styles/colors";


 const BreadCrumb = ({ text }) => {

        const {statusStyle,statusContainer} = styles;

        return (

            <View style={statusContainer}>

                <Text style={statusStyle}>{text}</Text>

            </View>
        )

 }


 const styles = StyleSheet.create({
    statusStyle: {
        color: Colors.WHITE_COLOR,
        fontSize: 10
    },
    statusContainer: {
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        backgroundColor: Colors.PENDING_COLOR,
        width: 'auto'
    }
 })


 export { BreadCrumb };