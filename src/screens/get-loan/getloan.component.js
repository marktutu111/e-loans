import React, { Component } from 'react';
import {  
    View, 
    Text, 
    StyleSheet,
    Slider
} from 'react-native';
import { Container, HeaderBar, IconButton, Button  } from '../../components';
import colors from '../../resources/styles/colors';




class LoanComponent extends Component {


            constructor(props) {
                super(props);
                
            }
            

            render() {
                return (

                        <Container>

                            <HeaderBar leftIcon="arrow-left"
                                       title="Loan" 
                                       onLeftPress={() => this.props.navigation.goBack()}/>

                            <View style={styles.pickerAll}>
                                <View style={styles.amountContainer}>
                                    <Text>Amount: </Text>
                                    <Text style={styles.amount}>Gh 30000</Text>
                                </View>
                                <View style={styles.pickerContainer}>
                                    <IconButton name="remove" style={styles.iconButton} 
                                                size={25}
                                                color={colors.THEME_COLOR}/>
                                    <View style={styles.hr}></View>
                                    <Text style={styles.selectedAmount}>200</Text>
                                    <View style={styles.hr}></View>
                                    <IconButton name="add" style={styles.iconButton} 
                                                size={25}
                                                color={colors.THEME_COLOR}/>
                                </View>
                                <View style={styles.rangeContainer}>
                                    <Text style={styles.rangeText}>minimun: 500</Text>
                                    <Text style={styles.rangeText}>maximum: 2000</Text>
                                </View>
                            </View>


                            <View style={styles.pickerAll}>
                                <View style={styles.amountContainer}>
                                    <Text>Period: </Text>
                                    <Text style={styles.amount}>20</Text>
                                    <Text style={{ marginLeft: 10}}>Days</Text>
                                </View>
                                <View style={styles.pickerContainer}>
                                    <IconButton name="remove" style={styles.iconButton} 
                                                size={25}
                                                color={colors.THEME_COLOR}/>
                                    <View style={styles.hr}></View>
                                    <Text style={styles.selectedAmount}>20</Text>
                                    <View style={styles.hr}></View>
                                    <IconButton name="add" style={styles.iconButton} 
                                                size={25}
                                                color={colors.THEME_COLOR}/>
                                </View>
                                <View style={styles.rangeContainer}>
                                    <Text style={styles.rangeText}>minimun: 500</Text>
                                    <Text style={styles.rangeText}>maximum: 2000</Text>
                                </View>
                            </View>


                            <Button title="Loan now" style={styles.button}/>


                        </Container>

                );
            }


}



const styles = StyleSheet.create({
        amountContainer: {
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center'
        },
        amount: {
            fontSize: 30,
            color: colors.DARK_COLOR,
            marginLeft: 15,
        },
        hr: {
            width: 0.2,
            height: '90%',
            backgroundColor: colors.LIGHT_DARK_COLOR,
            opacity: 0.5,
        },
        pickerContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            height: 50,
            backgroundColor: colors.WHITE_COLOR,
            elevation: 0.5,
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        selectedAmount: {
            flex: 1,
            textAlign: 'center',
            fontSize: 25,
        },
        iconButton: {
            width: 60,
        },
        rangeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '95%',
            padding: 10,
            marginRight: 'auto',
            marginLeft: 'auto'
        },
        rangeText: {
            fontSize: 10,
            color: colors.LIGHT_GREY_COLOR
        },
        pickerAll: {
            marginTop: 20,
        },
        button: {
            width: '80%',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 70,
        }
});



export { LoanComponent }