import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity
 } from 'react-native';
 import EIcon from "react-native-vector-icons/EvilIcons";



 const HeaderBar = ({ onLeftPress, onRightPress, leftIcon, rightIcon, title }) => {

        const {container, textStyle} = styles;

        return (

                <View style={container}>

                        <TouchableOpacity activeOpacity={0.5} onPress={onLeftPress}>
                            <EIcon name={leftIcon} size={30}/>
                        </TouchableOpacity>
                        <Text style={textStyle}>{title}</Text>
                        <TouchableOpacity activeOpacity={0.5} onPress={onRightPress}>
                            <EIcon name={rightIcon} size={30}/>
                        </TouchableOpacity>

                </View>
        )


 }




 const styles = StyleSheet.create({
        container: {
            height: 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10
        },
        textStyle: {
            fontSize: 20
        }
 })


 export { HeaderBar };