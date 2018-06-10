import React from 'react';
import { StyleSheet, 
         Text, 
         Image,
         View } from 'react-native';


import { IconButton } from '.';
import colors from '../resources/styles/colors';


const HomeProfile = () => {

        const { profileContainer, imageContainer, imageStyle, 
                nameTextStyle, textContainer, viewNameStyle } = styles;

        return (
            <View style={styles.container}>

                    <View style={profileContainer}>
                        <View style={imageContainer}>
                            <Image source={require('../images/image.jpeg')} style={imageStyle}/>
                        </View>
                        <View style={textContainer}>
                            <Text style={nameTextStyle}>Mark Tutu</Text>
                            <Text style={viewNameStyle}>Home</Text>
                        </View>
                    </View>

                    <IconButton name="settings" size={25} style={styles.iconButtonStyle}/>


            </View>
        )

}



const styles = StyleSheet.create({
        container: {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
        },
        profileContainer: {
            height: 'auto',
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20
        },
        imageContainer: {
            height: 50,
            width: 50,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        },
        imageStyle: {
            flex: 1,
            width: '100%',
            height: '100%'
        },
        textContainer: {
            marginLeft: 20
        },
        nameTextStyle: {
            fontSize: 20,
            color: colors.DARK_COLOR,
        },
        viewNameStyle: {
            fontSize: 10,
            color: colors.WHITE_COLOR
        },
        iconButtonStyle: {
            marginRight: 10
        }
})


export { HomeProfile }