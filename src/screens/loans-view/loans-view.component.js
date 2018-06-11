import React, { Component } from 'react';
import { StyleSheet, 
         View, 
         Text,
         Modal } from 'react-native';
import { Container, HeaderBar, ListItem, ModalComponent } from "../../components";


class LoanViewComponent extends Component {

        constructor (props) {
                super(props);

                this.state = {
                        openModal: false
                }


        }



        render ()  {

                const { container } = styles;

                return (

                        <Container>
                        
                            <Modal animationType="slide"
                                   transparent={false}
                                   onRequestClose={() => {}}
                                   visible={this.state.openModal}>

                                   <ModalComponent closeModal={() => this.setState({openModal: false})}/>

                            </Modal>

                            <View style={container}>

                                <ListItem onPress={() => this.setState({openModal: true})}/>
                                <ListItem onPress={() => this.setState({openModal: true})}/>

                            </View>

                        </Container>

                )

        }
}



const styles = StyleSheet.create({
        container: {
                flex: 1,
                marginTop: 10,
        }
})


export {LoanViewComponent};