import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform
 } from 'react-native';
 import EIcon from "react-native-vector-icons/EvilIcons";
import colors from '../resources/styles/colors';



 const HeaderBar = ({ onLeftPress, onRightPress, leftIcon, rightIcon, title }) => {

        const {container, textStyle} = styles;

        return (

                <View style={container}>

                        <TouchableOpacity activeOpacity={0.5} onPress={onLeftPress}>
                            <EIcon name={leftIcon} size={30} color={colors.WHITE_COLOR}/>
                        </TouchableOpacity>
                        <Text style={textStyle}>{title}</Text>
                        <TouchableOpacity activeOpacity={0.5} onPress={onRightPress}>
                            <EIcon name={rightIcon} size={30} color={colors.WHITE_COLOR}/>
                        </TouchableOpacity>

                </View>
        )


 }




 const styles = StyleSheet.create({
        container: {
            height: Platform.OS === 'ios' ? 100 : 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-start',
            padding: 10,
            backgroundColor: colors.THEME_COLOR_LIGHT,
            elevation: 2
        },
        textStyle: {
            fontSize: 20,
            color: colors.WHITE_COLOR,
            marginLeft: Platform.OS === 'ios' ? 0 : 10,
            flex: 1,
        }
 })


 export { HeaderBar };