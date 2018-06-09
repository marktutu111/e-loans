import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Alert
 } from 'react-native';


import { Container, HeaderBar, Input, ClearButton, Button } from "../../components";
import colors from '../../resources/styles/colors';
import { validateEmail } from "../helpers";


class ResetPasswordComponent extends Component {


            constructor (props) {

                    super(props);
                    this.state = {
                        typing: false,
                        valid: false,
                        email: '',
                        loading: false
                    }
            }

            goBack () { this.props.navigation.goBack() }


            resetPassword ()  {

                    this.setState({ loading: true });
                    setTimeout(() => this.setState({loading: false}), 1000 * 3);

            }


            renderButtons () {

                    if (this.state.valid && this.state.email !== '') return (<Button title="Continue" 
                                                                                     style={styles.button2Style}
                                                                                     onPress={() => this.resetPassword()}
                                                                                     busy={this.state.loading}/> );
                    return <Text style={styles.buttonStyle}>Continue</Text>;

            }


            onInputChange (email) {

                    this.setState({ typing: true, 
                                    valid: validateEmail(email), 
                                    email: email });

            }


            render ()  {

                return (

                        <Container>
                                <HeaderBar leftIcon="arrow-left" onLeftPress={() => this.goBack()}/>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.title1}>Forgot</Text>
                                    <Text style={styles.title2}>Password</Text>
                                    <Text style={styles.title3}>Enter your email address, you will receive a link
                                                                to reset your password.
                                    </Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <Input style={styles.inputStyle} 
                                           placeholder="Email"
                                           editable={ !this.state.loading }
                                           onChangeText={(e) => this.onInputChange(e)}/>
                                </View>
                                <View style={styles.buttonContainer}> { this.renderButtons() } </View>
                        </Container>

                )

            }



}






 const styles = StyleSheet.create({
        titleContainer: {
            padding: 15
        },
        title1: {
            fontSize: 30,
        },
        title2: {
            fontSize: 40,
        },
        title3: {
            color: colors.LIGHT_DARK_COLOR,
            marginTop: 10
        },
        inputContainer: {
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50
        },
        inputStyle: {
            width: '90%'
        },
        buttonContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonStyle: {
            fontSize: 20,
            color: colors.DARK_COLOR
        },
        button2Style: {
            backgroundColor: colors.GREEN_COLOR
        }
 })



 export { ResetPasswordComponent };