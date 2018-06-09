import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,
         Dimensions } from 'react-native';

import Colors from "../resources/styles/colors";
import EIcon from 'react-native-vector-icons/EvilIcons';



const { height , width } = Dimensions.get('window');

const Card = ({ title, description, onPress , name, color }) => {

        const { cardContainer, iconContainer, labelContainer,
                lableText1, lableText2 } = styles;

        return (
            <TouchableOpacity style={cardContainer} activeOpacity={0.5} onPress={onPress}>
                <View style={iconContainer}>
                    <EIcon name={name} size={50} color={color}/>
                </View>
                <View>
                    <Text style={lableText1}>{ title }</Text>
                    <Text style={lableText2}>{ description }</Text>
                </View>
            </TouchableOpacity>   
        )

}


const styles = StyleSheet.create({
        cardContainer: {
            width: width / 2.3,
            height: 150,
            backgroundColor: Colors.WHITE_COLOR,
            padding: 15,
            borderRadius: 3,
            shadowOffset: {width: 5, height: 10},
            shadowOpacity: 0.3,
            shadowColor: Colors.LIGHT_GREY_COLOR
        },
        iconContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
        labelContainer: {
            height: 'auto'
        },
        lableText1: {
            fontSize: 15,
            color: Colors.LIGHT_DARK_COLOR,
            fontWeight: 'bold'
        },
        lableText2: {
            color: Colors.LIGHT_DARK_COLOR,
            fontSize: 10,
            paddingTop: 2
        }
})



export { Card }