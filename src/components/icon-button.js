import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import EIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../resources/styles/colors';



const IconButton = ({ name, onPress, size, style, color }) => {

        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={[styles.container,style]}>
                <EIcon name={name} size={size} color={ color || colors.DARK_COLOR }/>
            </TouchableOpacity>
        )


}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});




export { IconButton };