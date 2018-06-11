import React, {Component} from 'react';
import { 
    StyleSheet,
    View,
    Text
 } from 'react-native';

import { Container, HeaderBar, CreditCard, Button, IconButton } from "../components";
import Colors from "../resources/styles/colors";



 class ModalComponent extends Component {

            constructor (props) {
                super(props)

            }

            render () {

                const { container, amountStyle, amountContainer, amountLabel,
                        dueDateTextContainer, dueDateTextStyle, dueDateLabelStyle,
                        cardContainer, buttonStyle } = styles;

                return (

                    <Container>

                        <IconButton name="close"
                                    size={25} 
                                    onPress={this.props.closeModal}
                                    style={styles.closeButton}/>

                        <View style={container}>

                                <View style={amountContainer}>
                                    <Text style={amountStyle}>Gh 300</Text>
                                    <Text style={amountLabel}>Amount</Text>
                                </View>
                                <View>
                                    <View style={dueDateTextContainer}>
                                        <Text style={dueDateTextStyle}>2nd October 2018</Text>
                                    </View>
                                    <Text style={dueDateLabelStyle}>Next payment date</Text>
                                </View>

                                <CreditCard />

                                <Button title='Pay' style={buttonStyle}/>


                        </View>

                    </Container>

                )
            }

 }



 const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        amountContainer: {
            marginBottom: 40
        },
        amountStyle: {
            fontSize: 50,
            textAlign: 'center',
            color: Colors.LIGHT_DARK_COLOR
        },
        amountLabel: {
            fontSize: 10,
            textAlign: 'center',
            color: Colors.LIGHT_DARK_COLOR
        },
        dueDateTextContainer: {
            borderRadius: 15,
            padding: 5,
            borderWidth: 0.5,
            borderColor: Colors.LIGHT_GREY_COLOR,
            paddingLeft: 15,
            paddingRight: 15,
        },
        dueDateTextStyle: {
            color: Colors.ORANGE_COLOR,
            textAlign: 'center'
        },
        dueDateLabelStyle: {
            textAlign: 'center',
            fontSize: 10,
            color: Colors.LIGHT_DARK_COLOR,
            margin: 20,
        },
        cardContainer: {
            marginTop: 30
        },
        buttonStyle: {
            marginTop: 60,
            marginBottom: 50,
            backgroundColor: Colors.DARK_COLOR,
            borderRadius: 2,
            width: '70%',
            padding: 10,
        },
        closeButton: {
            width: 60,
            height: 60,
        }
 })




 export { ModalComponent };
 