import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import EIcon from 'react-native-vector-icons/EvilIcons';



const IconButton = ({ name, onPress, size }) => {

        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
                <EIcon name={name} size={size}/>
            </TouchableOpacity>
        )


}




export { IconButton };