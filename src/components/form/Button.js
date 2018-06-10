'use strict'
import React, { Component } from 'react'
import {
    TouchableOpacity, 
    StyleSheet, 
    Text,
    ActivityIndicator 
} from 'react-native'


import colors from './../../resources/styles/colors'
import Icon  from 'react-native-vector-icons/SimpleLineIcons'


class Button extends Component {

    onBusy () {
        if (this.props.busy) return (<ActivityIndicator color={colors.WHITE_COLOR}/>);
        return <Text style={[ styles.defaultTxt, this.props.titleStyle || {} ]}>{ this.props.title }</Text>;
    }

    render() {
        const type = this.props.type || {}
        const txtType = type + 'Txt'
        return (
            <TouchableOpacity onPress={ this.props.onPress } style={[ styles.default, styles[type], this.props.style || {} ]}
                              activeOpacity={ this.props.disabled ? 1 : 0.7 }>
                { type == 'facebook' && <Icon style={[ styles.defaultTxt, styles[txtType], this.props.titleStyle || {} ]} name='social-facebook' size={20} /> }

                { this.onBusy() }
                
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    // Border button type by default
    default: {
        height: 50,
        borderRadius: 2,
        backgroundColor: colors.THEME_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginTop: 5
    },
    defaultTxt: {
        color: colors.txtWhite,
        fontSize: 16
    },
    facebook: {
        backgroundColor: '#3C5A99',
    },
    facebookTxt: {
        color: colors.txtWhite
    },
    // Button with background color
    submit: {
        backgroundColor: colors.bgMain
    },
    submitTxt: {
        color: colors.txtWhite
    },
    borderMain: {
        borderColor: colors.bdMain,
        borderRadius: 1,
        paddingHorizontal: 25
    },
    borderMainTxt: {
        color: colors.txtMain
    }
})



export { Button };
