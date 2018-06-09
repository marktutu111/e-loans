import React, { Component } from 'react';
import { StyleSheet, View, Share } from 'react-native';
import { Container, HomeHeaderBar, HomeProfile, LazyAlert,
         Card } from "../../components";
import Icon from "react-native-vector-icons/EvilIcons";
import Colors from "../../resources/styles/colors";

class HomeComponent extends Component {


            constructor (props) {

                    super(props)

            }


            shareApp () {

                    Share.share({
                        title: 'Payworld Microcredit',
                        message: 'Download payworld microcredit app',
                        url: ''
                    })

            }


            render () {

                    const { gridContainer, rowStyle, colStyle } = styles;

                    return (

                        <Container>

                            <HomeHeaderBar title="Payworld" 
                                           onLeftPress={() => this.props.navigation.navigate('Profile')}
                                           onRightPress={() => this.shareApp()} />

                            <HomeProfile />

                            <View style={gridContainer}>

                                <View style={rowStyle}>
                                    <View style={colStyle}>
                                        <Card title="Loans" description="Get a loan" 
                                              name="calendar" color={Colors.BLUE_COLOR}
                                              onPress={() => this.props.navigation.navigate('Loans')}/>
                                    </View>
                                    <View style={colStyle}>
                                        <Card title="Wallet" description="Virtual Account" 
                                              name="credit-card" color={Colors.GREEN_COLOR}
                                              onPress={() => this.props.navigation.navigate('Wallet')}/>
                                    </View>
                                </View>
                                <View style={rowStyle}>
                                    <View style={colStyle}>
                                        <Card title="Electricity" description="Pay electricity bills"
                                            name="bulb" color={Colors.ORANGE_COLOR}
                                            onPress={() => this.props.navigation.navigate('Terms')}/>
                                    </View>
                                    <View style={colStyle}>
                                        <Card title="Help" description="Looking for something"
                                              name="comment" color={Colors.DARK_GREEN_COLOR}
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