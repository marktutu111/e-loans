import React from 'react';
import { StyleSheet,
         View,
         Text,
         TouchableOpacity
 } from 'react-native'; 

 import Colors from "../resources/styles/colors";
 import { BreadCrumb } from "../components";



 const ListItem = ({ onPress }) => {

        const { container, container2, dateContainer, dataContainer, 
                dateDay, hr, textHeader, dateMonth, statusStyle,
                statusContainer } = styles;

        return (

            <TouchableOpacity style={container} activeOpacity={0.5} onPress={onPress}>

                    <View style={dateContainer}>
                        <Text style={dateMonth}>October</Text>
                        <Text style={dateDay}>25</Text>
                    </View>
                    <View style={hr}></View>
                    <View style={dataContainer}>
                        <View style={container2}>
                            <Text style={textHeader}>Account</Text>
                            <Text>********912</Text>
                        </View>
                        <View style={container2}>
                            <Text style={textHeader}>Employee</Text>
                            <Text>009912</Text>
                        </View>
                        <View style={container2}>
                            <Text style={textHeader}>Amount</Text>
                            <Text>300</Text>
                        </View>
                        <View style={container2}>
                            <Text style={textHeader}>Status</Text>
                            <BreadCrumb text='PENDING'/>
                        </View>
                    </View>

            </TouchableOpacity>

        )

 }

 const styles = StyleSheet.create({
     container: {
         backgroundColor: Colors.WHITE_COLOR,
         borderRadius: 10,
         width: '90%',
         marginRight: 'auto',
         marginLeft: 'auto',
         padding: 10,
         flexDirection: 'row',
         marginBottom: 10
     },
     container2: {
         flexDirection: 'row',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         marginBottom: 2
     },
     dataContainer: {
         flex: 3,
         paddingLeft: 10,
     },
     dateContainer: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center'
     },
     dateDay: {
         flex: 1,
         fontSize: 40,
         color: Colors.LIGHT_DARK_COLOR
     },
     dateMonth: {
         color: Colors.LIGHT_DARK_COLOR
     },
     hr: {
         width: 0.5,
         height: '100%',
         backgroundColor: Colors.GREEN_COLOR,
     },
     textHeader: {
         fontWeight: 'bold',
         color: Colors.LIGHT_DARK_COLOR
     }

 })


 export { ListItem };