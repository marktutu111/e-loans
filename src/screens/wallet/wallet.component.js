import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
 } from 'react-native';

import { Container, 
         HeaderBar,
         TabsCard, 
         Button
        } from "../../components";

import colors from "../../resources/styles/colors";
import { LoanViewComponent } from "../../screens";


class WalletComponent extends Component {


            constructor (props) {
                    super(props);

                    this.state = {
                         tabIndex: 0
                    }
            }


            renderViews ()  {

                    switch (this.state.tabIndex) {
                        case 0:
                            return <LoanViewComponent />
                        case 1:
                            return (

                                <View>

                                    <View style={styles.imageContainer}>
                                            <Image source={require('../../images/wallet.png')}
                                                style={styles.imageStyle}/>
                                        </View>
                                        <View style={styles.amountContainer}>
                                            <Text>Total Loans</Text>
                                            <Text style={styles.amountStyle}>1,500</Text>
                                        </View>

                                </View>

                            )
                        default:
                            break;
                    }
            }


            render () {

                return (
                    <Container>

                            <HeaderBar leftIcon="arrow-left"
                                       title="Account" 
                                       onLeftPress={() => this.props.navigation.goBack()}/>

                            <ScrollView style={styles.contents}>

                                    { this.renderViews() }

                            </ScrollView>

                            <View style={styles.tabsStyle}>
                                <TabsCard tabChanged={(index) => this.setState({tabIndex: index})}/>
                            </View>



                    </Container>
                )

            }

 }



 const styles = StyleSheet.create({
     imageContainer: {
         width: 80,
         height: 80,
         justifyContent: 'center',
         alignItems: 'center',
         marginRight: 'auto',
         marginLeft: 'auto',
         marginTop: 50,
     },
     imageStyle: {
         width: '100%',
         height: '100%',
         flex: 1
     },
     amountContainer: {
         justifyContent: 'center',
         alignItems: 'center',
         padding: 10,
         margin: 20
     },
     amountStyle: {
         fontSize: 30,
         margin: 5
     },
     contents: {
         flex: 1,
         width: '100%',
         marginTop: 50,
     },
     tabsStyle: {
         position: 'absolute',
         bottom: 0,
         left: 0,
         right: 0,
         marginBottom: 20,
     }
 })


 export { WalletComponent };