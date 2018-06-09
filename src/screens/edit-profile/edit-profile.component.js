import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text
 } from 'react-native';


 import { Container,
          HeaderBar,
          Input,
          Button } from "../../components";
import colors from '../../resources/styles/colors';
import FIcon from 'react-native-vector-icons/FontAwesome';



 class EditProfileComponent extends Component {

            constructor (props) {
                    super(props)

                    this.state = {
                           title: this.props.title,
                           saving: false,
                           typing: false,
                           newValue: ''
                    }
            }


            save ()  {


            }


            onTyping (text)  {

                    this.setState({ typing: text === '' ? false : true, newValue: text });

            }


            renderButtons () {

                    if (this.state.newValue !== '') return (<Button title="Save" 
                                                                    style={styles.button2Style}
                                                                    onPress={() => this.save()}
                                                                    busy={this.state.saving}/> );
                    return <Text style={styles.buttonStyle}>Save</Text>;

            }


            render ()  {

                    const { container, buttonStyle, inputStyle, textStyle,
                            titleStyle, titleContainer } = styles;

                    return (

                            <Container>

                                <HeaderBar rightIcon="close" onRightPress={this.props.close}/>

                                <View style={container}>

                                    <View style={titleContainer}>
                                        <View style={styles.iconContainer}>
                                            <FIcon name={this.props.icon} 
                                                size={40} 
                                                color={colors.DARK_COLOR}
                                                style={styles.iconStyle}/>
                                        </View>
                                        <Text style={titleStyle}>{ this.props.title }</Text>
                                    </View>

                                    <Text style={textStyle}>{ this.props.value }</Text>
                                    <Input placeholder="Edit" style={inputStyle}
                                           onChangeText={(text) => this.onTyping(text)}/>

                                    <View style={styles.buttonContainer}>

                                        { this.renderButtons() }

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
            alignItems: 'center'
        },
        buttonStyle: {
            marginTop: 20,
            fontSize: 20
        },
        inputStyle: {
            marginTop: 20,
            width: '70%'
        },
        textStyle: {
            fontSize: 15,
            color: colors.LIGHT_DARK_COLOR,
            marginTop: 15
        },
        titleStyle: {
            fontSize: 25
        },
        buttonContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        titleContainer: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        iconContainer: {
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderRadius: 100,
            borderColor: colors.DARK_COLOR,
            borderWidth: 1,
            marginBottom: 50
        }
 })




 export { EditProfileComponent };