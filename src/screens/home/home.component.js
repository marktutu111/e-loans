import React, { Component } from 'react';
import { StyleSheet, View, Share } from 'react-native';
import { Container, HomeHeaderBar, HomeProfile, LazyAlert,
         Card } from "../../components";
import Icon from "react-native-vector-icons/EvilIcons";
import Colors from "../../resources/styles/colors";
import colors from '../../resources/styles/colors';

class HomeComponent extends Component {


            constructor (props) {

                    super(props)

            }


            shareApp () {

                    Share.share({
                        title: 'Golden link Savings and Loans',
                        message: 'Download E-loans app',
                        url: ''
                    })

            }


            render () {

                    const { gridContainer, rowStyle, colStyle } = styles;

                    return (

                        <Container>

                            <HomeProfile />

                            <View style={gridContainer}>

                                <View style={rowStyle}>
                                    <View style={colStyle}>
                                        <Card title="Loan" description="Request loan" 
                                              name="calendar" color={Colors.DARK_COLOR}
                                              onPress={() => this.props.navigation.navigate('Loan')}/>
                                    </View>
                                    <View style={colStyle}>
                                        <Card title="Account" description="Virtual Account" 
                                              name="credit-card" color={Colors.DARK_COLOR}
                                              onPress={() => this.props.navigation.navigate('Wallet')}/>
                                    </View>
                                </View>
                                <View style={rowStyle}>
                                    <View style={colStyle}>
                                        <Card title="Utilities" description="Pay bills and Send money"
                                            name="arrow-down" color={Colors.DARK_COLOR}
                                            onPress={() => this.props.navigation.navigate('Terms')}/>
                                    </View>
                                    <View style={colStyle}>
                                        <Card title="Help" description="Need answers?"
                                              name="arrow-up" color={Colors.DARK_COLOR}
                                              onPress={() => this.props.navigation.navigate('Help')}  />
                                    </View>
                                </View>

                            </View>

                        </Container>

                    )

            }

}



const styles = StyleSheet.create({
        gridContainer: {
            flex: 1,
            justifyContent: 'center'
        },
        rowStyle: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            height: 'auto',
        },
        colStyle: {
            margin: 5
        }
})



export { HomeComponent };