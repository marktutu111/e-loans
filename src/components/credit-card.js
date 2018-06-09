import React from 'react';
import { 
    StyleSheet,
    View,
    Text
 } from 'react-native';
import Colors from "../resources/styles/colors";
import { BreadCrumb } from "../components";



const CreditCard = () => {

        const {container,textKey,textValue,space} = styles;

        return (

            <View style={container}>

                    <View>
                        <Text style={textKey}>Account number</Text>
                        <Text style={textKey}>Employee code</Text>
                        <Text style={textKey}>Loan amount</Text>
                        <Text style={textKey}>Date</Text> 
                        <View style={space}></View>                                           
                        <Text style={textKey}>Status</Text>                                            
                    </View>
                    <View>
                        <Text style={textValue}>**********123</Text>
                        <Text style={textValue}>0093234</Text>
                        <Text style={textValue}>$ 300</Text>
                        <Text style={textValue}>19th Dec 2017</Text>    
                        <View style={space}></View>                                                                                                           
                        <BreadCrumb text="PENDING"/>
                    </View>

            </View>

        )

}


 const styles = StyleSheet.create({
     container: {
         padding: 20,
         backgroundColor: Colors.WHITE_COLOR,
         width: '70%',
         borderRadius: 10,
         alignItems: 'center',
         flexDirection: 'row',
         justifyContent: 'space-between',
         margin: 20,
         shadowOffset: {width: 1, height: 1},
         shadowColor: Colors.LIGHT_GREY_COLOR,
         shadowOpacity: 0.3
     },
     textKey: {
         textAlign: 'right',
         color: Colors.LIGHT_DARK_COLOR
     },
     textValue: {
         textAlign: 'left',
         color: Colors.DARK_COLOR
     },
     space: {
         marginTop: 3,
         marginBottom: 3
     }
 })


 export { CreditCard };