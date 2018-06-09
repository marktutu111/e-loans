import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../resources/styles/colors";


const ClearButton = ({ text, style, onPress, textStyle }) => {

        const { buttonStyle } = styles;
        return (
            <TouchableOpacity activeOpacity={0.5} style={style} onPress={onPress}>
                <Text style={[buttonStyle, textStyle]}>{ text }</Text>
            </TouchableOpacity>
        )

}


const styles = StyleSheet.create({
        buttonStyle: {
            width: 'auto',
            color: Colors.THEME_COLOR,
            fontSize: 15
        }
})


export { ClearButton }