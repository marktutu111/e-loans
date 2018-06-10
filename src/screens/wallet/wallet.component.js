import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image,
    Animated,
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
                         tabIndex: 0,
                         scroll:  new Animated.Value(0)
                    }
            }



            onScroll (e)  {

                let y = e.nativeEvent.contentOffset.y;
                this.setState({ scroll: new Animated.Value(y) });

            }


            renderViews ()  {

                    switch (this.state.tabIndex) {
                        case 1:
                            return <LoanViewComponent />
                        case 0:
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

                            <ScrollView
                                scrollEventThrottle={16} // <-- Use 1 here to make sure no events are ever missed
                                onScroll={this.onScroll.bind(this)}
                                style={styles.contents}>

                                    { this.renderViews() }

                            </ScrollView>

                            <Animated.View style={[styles.tabsStyle, {
                                        transform: [{
                                            translateY: this.state.scroll.interpolate({
                                                inputRange: [0, 100],
                                                outputRange: [1, 150]
                                            })
                                        }]
                                    }]}>
                                <TabsCard tabChanged={(index) => this.setState({tabIndex: index})}/>
                            </Animated.View>



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