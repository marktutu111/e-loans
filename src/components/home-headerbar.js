import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Colors from "../resources/styles/colors";
import { IconButton } from "../components";



const HomeHeaderBar = ({ onLeftPress, onRightPress, title }) => {

        const { container, textStyle, titleContainer } = styles;

        return (

            <View style={container}>
                
                <View style={titleContainer}>
                    <IconButton name="navicon" size={30} onPress={onLeftPress}/>
                    <Text style={textStyle}>{ title }</Text>
                </View>
                <IconButton name={ Platform.OS === 'ios' ? 'share-apple' : 'share-android' } size={30}
                            onPress={onRightPress} />

            </View>

        )


}



const styles = StyleSheet.create({
        container: {
            height: 80,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
        },
        textStyle: {
            fontSize: 15,
            color: Colors.DARK_COLOR,
            paddingLeft: 15,
            marginBottom: 3
        },
        titleContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }
})


export { HomeHeaderBar }