import React, { Component } from 'react';
import { View, 
         Image, 
         StyleSheet,
         Text,
         TouchableOpacity
       } from 'react-native';

import { Button, Container, Input, ClearButton } from "../../components";
import FIcons from "react-native-vector-icons/FontAwesome";
import Colors from "../../resources/styles/colors";
import { validateEmail } from "../helpers";
import { LoginService } from "../../services";



class LoginComponent extends Component {

            login$vice;


            constructor (props) {
                    super(props);

                    this.state = {
                           loading: false,
                           emailValid: false,
                           email: '',
                           password: '',
                    }


                    this.login$vice = new LoginService();
                    
            }


            componentDidMount ()  { LoginService.login$.subscribe(() => this.setState({loading:false})); }
            componentWillUnmount ()  { LoginService.login$.unsubscribe() };



            openSignup () { this.props.navigation.navigate('Signup') };
            openResetPassword () { this.props.navigation.navigate('ResetPassword') }
            login () {

                  this.setState({loading: true});
                  this.login$vice.login();

            }



            render () {


                const { container, imageContainer, imageStyle,
                        textStyle1, textStyle2, textContainer,
                        signupContainerStyle, signupButtonStyle, navButtonsContainer,
                        resetPasswordButtonStyle, resetContainer,
                        disabledButton } = styles;

                return (
                    <Container style={container}>

                            <View style={imageContainer}>
                                <Image style={imageStyle} source={require('../../images/logo.png')}/>
                            </View>
                            
                            <View style={textContainer}>
                                <Text style={textStyle1}>Welcome to Payworld</Text>
                                <Text style={textStyle2}>Please login to continue.</Text>
                            </View>

                            <Input placeholder={'Email'} 
                                   editable={!this.state.loading}
                                   onChangeText={(email) => this.setState({email: email, emailValid: validateEmail(email)})}/>

                            <Input placeholder={'Password'} 
                                   password={true} 
                                   editable={!this.state.loading}
                                   onChangeText={(password) => this.setState({password: password})}/>

                            <Button title='login' 
                                    onPress={() => this.login()} 
                                    style={ this.state.emailValid ? null : disabledButton }
                                    disabled={ !this.state.emailValid }
                                    busy={ this.state.loading }/>

                            <View style={navButtonsContainer}>
                                    <View style={signupContainerStyle}>
                                        <Text style={{ color: Colors.LIGHT_DARK_COLOR }}>Don't have an account?</Text>
                                        <ClearButton text={'Signup'} onPress={() => this.openSignup()}/>
                                    </View>
                                    <View style={resetContainer}>
                                        <ClearButton text="Reset password"
                                                     textStyle={resetPasswordButtonStyle}
                                                     onPress={() => this.openResetPassword()}/>
                                    </View>
                            </View>
                            

                    </Container>
                )

            }


}




const styles = StyleSheet.create({

        container: {
            flex: 1,
            justifyContent: 'center',
            padding: 50,
            backgroundColor: Colors.BACKGROUND_COLOR
        },
        imageContainer: {
            width: 100,
            height: 100,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 'auto',
            marginLeft: 'auto',
            margin: 50,
            overflow: 'hidden'
        },
        imageStyle: {
            flex: 1,
            width: '100%',
            height: '100%',
        },
        textContainer: {
            marginBottom: 10
        },
        textStyle1: {
            fontSize: 20,
            paddingBottom: 5,
            color: Colors.THEME_COLOR,
            fontWeight: 'bold'
        },
        textStyle2: {
            color: Colors.LIGHT_DARK_COLOR
        },
        signupContainerStyle: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '75%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        signupButtonStyle: {
            marginLeft: 5
        },
        resetPasswordButtonStyle: {
            color: Colors.DARK_COLOR,
            fontSize: 12,
            marginTop: 5
        },
        resetContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60%',
            marginRight: 'auto',
            marginLeft: 'auto'
        },
        navButtonsContainer: {
            flex: 1,
            justifyContent: 'center'
        },
        disabledButton: {
            backgroundColor: Colors.LIGHT_GREY_COLOR
        }

})



export { LoginComponent };