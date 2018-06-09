import React, {Component} from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Modal
 } from 'react-native';
import { Container, ClearButton } from "../components";
import EIcon from "react-native-vector-icons/EvilIcons";
import colors from '../resources/styles/colors';


class LazyAlert extends Component {


            constructor (props) {
                    super(props);
                    this.state = {
                         toggled: this.props.show
                    }
            }


            render ()  {


                return (

                    <Modal animationType="slide"
                           transparent={false}
                           visible={this.state.toggled}>
        
                        <Container style={{backgroundColor: this.props.type === 'success' ? 
                                                            colors.SUCCESS_COLOR : colors.ERROR_COLOR}}>
        
                            <View style={styles.titleContainer}>
        
                                <EIcon name={this.props.type === 'success' ? 'check' : 'minus'} 
                                       size={80} color={colors.WHITE_COLOR}/>
                                <Text style={styles.titleStyle}>
                                    { this.props.type === 'success' ? 'Success' : 'Failed' }
                                </Text>
                                <Text style={styles.messageStyle}>{ this.props.message }</Text>
        
                            </View>
                            <View style={styles.buttonContainer}>
                                        
                                <ClearButton text="OK" textStyle={styles.buttonTitleStyle} 
                                             onPress={() => this.setState({toggled: false})}/>
        
                            </View>
        
        
                        </Container>
        
                    </Modal>
        
                )

            }



}

 const styles = StyleSheet.create({
        titleStyle: {
            fontSize: 40,
            color: colors.WHITE_COLOR,
            marginBottom: 10,
            marginTop: 10
            
        },
        titleContainer: {
            justifyContent: 'flex-start',
            height: '50%',
            padding: 50,
            marginTop: 30

        },
        messageStyle: {
            color: colors.LIGHT_GREY_COLOR
        },
        buttonContainer: {
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonTitleStyle: {
            color: colors.WHITE_COLOR,
            fontSize: 18
            
        }

 })



 export { LazyAlert };