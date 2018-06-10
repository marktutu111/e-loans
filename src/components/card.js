import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,
         Dimensions } from 'react-native';

import EIcon from 'react-native-vector-icons/EvilIcons';
import colors from '../resources/styles/colors';



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
            backgroundColor: colors.WHITE_COLOR,
            padding: 15,
            borderRadius: 3,
            shadowColor: colors.DARK_COLOR,
            shadowOpacity: 1,
            shadowOffset: { width: 20, height: 20 },
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
            color: colors.DARK_COLOR,
            fontWeight: 'bold'
        },
        lableText2: {
            color: colors.LIGHT_DARK_COLOR,
            fontSize: 10,
            paddingTop: 2
        }
})



export { Card }