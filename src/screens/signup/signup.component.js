import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, HeaderBar } from "../../components";
import { Input, Button } from "../../components/form";
import Colors from "../../resources/styles/colors";


class SignupComponent extends Component {


        constructor (props) {

                super(props);
                this.state = {
                    saving: false,
                    firstname: '',
                    lastname: '',
                    email: '',
                    phonenumber: '',
                    digitalAddress: '',
                    companytin: '',
                    empcode: '',
                    username: '',
                    password: ''
                }

        }


        goBack () { this.props.navigation.goBack() };


        createAccount ()  {

                let form = {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    email: this.state.email,
                    phonenumber: this.state.phonenumber,
                    digitalAddress: this.state.digitalAddress,
                    companytin: this.state.companytin,
                    empcode: this.state.empcode,
                    username: this.state.username,
                    password: this.state.password
                }

        }


        render () {

            const { container, textStyle, textStyle2, textStyle3, inputStyle,
                    titleContainer, titleStyle, nameContainer } = styles;

            return (
        
                <Container>

                    <HeaderBar  leftIcon="arrow-left" onLeftPress={() => this.goBack()}/>
                    <View style={titleContainer}>
                        <Text style={titleStyle}>Create account</Text>
                        <Text>By signing up you agree to our { <Text style={textStyle3}>Terms </Text> } 
                                                 and { <Text style={textStyle3}>Policies</Text> }.</Text>
                    </View>

                    <View style={container}>

                        <View style={nameContainer}>

                            <Input placeholder="First Name" 
                                onChangeText={(e) => this.setState({firstname: e})}
                                editable={!this.state.saving}
                                style={styles.nameInputStyle}/>

                            <Input placeholder="Last Name" 
                                onChangeText={(e) => this.setState({lastname: e})}
                                editable={!this.state.saving}
                                style={styles.nameInputStyle}/>

                        </View>
                    

                        <Input placeholder="Email" type="email-address" 
                               onChangeText={(e) => this.setState({email: e})}
                               editable={!this.state.saving}
                               style={inputStyle}/>

                        <Input placeholder="Phone Number" type="phone-pad" 
                               onChangeText={(e) => this.setState({phonenumber: e})}
                               editable={!this.state.saving}
                               style={inputStyle}/>

                        <Input placeholder="Digital Address" 
                               onChangeText={(e) => this.setState({digitalAddress: e})}
                               editable={!this.state.saving}
                               style={inputStyle}/>

                        <Input placeholder="Company Tin" 
                               onChangeText={(e) => this.setState({companytin: e})}
                               editable={!this.state.saving}
                               style={inputStyle}/>

                        <Input placeholder="Emp Code" 
                               onChangeText={(e) => this.setState({empcode: e})}
                               editable={!this.state.saving}
                               style={inputStyle}/>

                        <Input placeholder="Username" 
                               onChangeText={(e) => this.setState({username: e})}
                               editable={!this.state.saving}
                               style={inputStyle}/>

                        <Input placeholder="Password" 
                               password={true} 
                               onChangeText={(e) => this.setState({password: e})}
                               editable={!this.state.saving}
                               style={inputStyle}/>

                        <Button title="Signup" onPress={() => this.createAccount()}
                                               busy={this.state.saving}/>


                    </View>
        
                </Container>
        
            )
        
        }



}



const styles = StyleSheet.create({
        container: {
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: 'center'
        },
        textStyle: {
            fontSize: 20,
            margin: 20,
            textAlign: 'center',
            color: Colors.THEME_COLOR
        },
        textStyle2: {
            padding: 10,
            textAlign: 'center',
            fontSize: 12,
            marginTop: 20,
            color: Colors.LIGHT_DARK_COLOR
        },
        textStyle3: {
            fontWeight: 'bold',
            color: Colors.THEME_COLOR
        },
        inputStyle: {
            width: '90%'
        },
        titleContainer: {
            paddingLeft: 20,
            paddingBottom: 20
        },
        titleStyle: {
            fontSize: 25
        },
        nameContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignItems: 'center',
            marginRight: 'auto',
            marginLeft: 'auto'
        },
        nameInputStyle: {
            width: '48%'
        }

})



export {SignupComponent};

