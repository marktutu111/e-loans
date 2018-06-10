import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import EIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../resources/styles/colors';



const IconButton = ({ name, onPress, size, style }) => {

        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={style}>
                <EIcon name={name} size={size} color={colors.DARK_COLOR}/>
            </TouchableOpacity>
        )


}




export { IconButton };