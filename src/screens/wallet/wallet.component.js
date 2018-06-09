import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image
 } from 'react-native';

import { Container, 
         HeaderBar,
         TabsCard, 
         Button} from "../../components";
import colors from "../../resources/styles/colors";



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
                            return <Text>Loans</Text>
                            break;
                        case 1:
                            return <Text>Payments</Text>
                            break;
                        case 2:
                            return <Text>Bills</Text>
                            break;
                        default:
                            break;
                    }
            }


            render () {

                return (
                    <Container>

                            <HeaderBar leftIcon="arrow-left" onLeftPress={() => this.props.navigation.goBack()}/>

                            <View style={styles.imageContainer}>
                                <Image source={require('../../images/wallet.png')}
                                    style={styles.imageStyle}/>
                            </View>
                            <View style={styles.amountContainer}>
                                <Text>Total Loans</Text>
                                <Text style={styles.amountStyle}>1,500</Text>
                            </View>

                            <TabsCard tabChanged={(index) => this.setState({tabIndex: index})}/>

                            <View style={styles.contents}>

                                    { this.renderViews() }

                            </View>

                    </Container>
                )

            }

 }



 const styles = StyleSheet.create({
     imageContainer: {
         width: 50,
         height: 50,
         justifyContent: 'center',
         alignItems: 'center',
         marginRight: 'auto',
         marginLeft: 'auto'
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
         padding: 10,
         justifyContent: 'center',
         alignItems: 'center'
     }
 })


 export { WalletComponent };