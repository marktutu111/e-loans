import React, {Component} from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity
 } from 'react-native';

import colors from '../resources/styles/colors';
import EIcon from 'react-native-vector-icons/EvilIcons';



class TabsCard extends Component {


        constructor (props) {
            super(props)
            this.state = { index: 0 };
        }

        onButtonTapped (index) {

                this.setState({index: index});
                this.props.tabChanged(index);

        }


        render () {

            return (

                    <View style={[styles.container, this.props.style || {}]}>
                        <TouchableOpacity activeOpacity={0.8} 
                                          style={styles.buttonContainer}
                                          onPress={() => this.onButtonTapped (0)}>
                            <EIcon name="exclamation" size={50}
                                   color={this.state.index === 0 ? colors.BLUE_COLOR : colors.LIGHT_DARK_COLOR}/>
                            <Text style={{color: this.state.index === 0 ? colors.BLUE_COLOR : colors.LIGHT_DARK_COLOR}}>Loans</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} 
                                          style={styles.buttonContainer}
                                          onPress={() => this.onButtonTapped (1)}>
                            <EIcon name="exclamation" size={50}
                                   color={this.state.index === 1 ? colors.BLUE_COLOR : colors.LIGHT_DARK_COLOR}/>
                            <Text style={{color: this.state.index === 1 ? colors.BLUE_COLOR : colors.LIGHT_DARK_COLOR}}>Payments</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} 
                                          style={styles.buttonContainer}
                                          onPress={() => this.onButtonTapped (2)}>
                            <EIcon name="exclamation" size={50} 
                                   color={this.state.index === 2 ? colors.BLUE_COLOR : colors.LIGHT_DARK_COLOR}/>
                            <Text style={{color: this.state.index === 2 ? colors.BLUE_COLOR : colors.LIGHT_DARK_COLOR}}>Bills</Text>
                        </TouchableOpacity>
                    </View>

            )
        }

}


const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.WHITE_COLOR,
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            marginRight: 'auto',
            marginLeft: 'auto',
            borderRadius: 5,
            shadowOffset: {width: 1, height: 1},
            shadowColor: colors.LIGHT_GREY_COLOR,
            shadowOpacity: 0.2
        },
        buttonContainer: {
            justifyContent: 'center',
            alignItems: 'center'
        }
})





 export { TabsCard };