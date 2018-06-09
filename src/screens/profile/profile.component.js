import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    CameraRoll,
    Modal
 } from 'react-native';
import { NavigationActions } from "react-navigation";


import Colors from "../../resources/styles/colors";
import { Container, 
         RoundAvatar, 
         BreadCrumbEdit,
         HeaderBar,
         SettingsListItem } from "../../components";

import { EditProfileComponent } from "../../screens";


class ProfileComponent extends Component {

            constructor (props) {
                    super(props)
                    this.state = {
                        openModal: false,
                        icon: '',
                        title: '',
                        value: ''
                    }


            }


            openModal (data)  {

                this.setState({ openModal: true, 
                                icon: data.icon,
                                title: data.title,
                                value: data.value });

            }


            openPhotos ()  {

                CameraRoll.getPhotos({first: 20, assetType: 'Photos'})
                          .then((r) => {
                                console.log(r);
                          }, err => {
                              console.log(err);
                          })

            }


            render () {

                const { container, listButtonsContainer, itemStyle } = styles;

                return (

                    <Container>

                            <HeaderBar leftIcon="arrow-left" 
                                       title="Profile" 
                                       rightIcon="camera"
                                       onLeftPress={() => this.props.navigation.dispatch(NavigationActions.back())}
                                       onRightPress={() => this.openPhotos()}/>

                            <Modal animationType="slide"
                                   transparent={false}
                                   visible={this.state.openModal}>

                                   <EditProfileComponent close={() => this.setState({openModal: false})}
                                                         icon={this.state.icon}
                                                         title={this.state.title}
                                                         value={this.state.value}/>

                            </Modal>

                            <View style={container}>
                                <RoundAvatar/>
                                <BreadCrumbEdit text="mark tutu" />
                            </View>

                            <View style={listButtonsContainer}>

                                    <SettingsListItem title="username" 
                                                      icon="user" 
                                                      style={itemStyle} 
                                                      onPress={() => this.openModal({
                                                          icon: 'user',
                                                          title: 'Username',
                                                          value: 'mark tutu'
                                                      })}/>

                                    <SettingsListItem title="password" 
                                                      icon="lock" 
                                                      style={itemStyle} 
                                                      onPress={() => this.props.navigation.navigate('ResetPassword')}/>

                                    <SettingsListItem title="mobilenumber" 
                                                      icon="phone" 
                                                      style={itemStyle} 
                                                      onPress={() => this.openModal({
                                                          icon: 'phone',
                                                          title: 'Phonenumber',
                                                          value: '0207573792'
                                                      })}/>

                                    <SettingsListItem title="Email" 
                                                      icon="envelope" 
                                                      style={itemStyle} 
                                                      onPress={() => this.openModal({
                                                          icon: 'envelope',
                                                          title: 'Email',
                                                          value: 'mark@gmail.com'
                                                      })}/>

                                    <SettingsListItem title="Employee code" 
                                                      icon="lock" 
                                                      style={itemStyle} 
                                                      onPress={() => this.openModal({
                                                          icon: 'lock',
                                                          title: 'Employee Code',
                                                          value: '00944421'
                                                      })}/>

                                    <SettingsListItem title="Company Tin" 
                                                      icon="briefcase" 
                                                      style={itemStyle} 
                                                      onPress={() => this.openModal({
                                                          icon: 'briefcase',
                                                          title: 'Company Tin',
                                                          value: '0093332'
                                                      })}/>

                                    <SettingsListItem title="GW122" 
                                                      icon="location-arrow" 
                                                      onPress={() => this.openModal({
                                                          icon: 'location-arrow',
                                                          title: 'Digital Address',
                                                          value: 'GW998332'
                                                      })}/>

                            </View>

                    </Container>

                )
            }

}



const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'space-around'
        },
        listButtonsContainer: {
            marginBottom: 30
        },
        itemStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: Colors.INPUT_BORDER_COLOR
        }
})





export { ProfileComponent }