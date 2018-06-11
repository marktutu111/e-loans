import React from 'react';
import { StyleSheet,
         View,
         Text,
         TouchableOpacity
 } from 'react-native'; 

 import Colors from "../resources/styles/colors";
 import { BreadCrumb } from "../components";
import colors from '../resources/styles/colors';



 const ListItem = ({ onPress }) => {

        const { container, container2, dateContainer, dataContainer, 
                dateDay, hr, textHeader, dateMonth, statusStyle,
                statusContainer } = styles;

        return (

            <TouchableOpacity style={container} activeOpacity={0.7} onPress={onPress}>

                    <View style={dateContainer}>
                        <Text style={dateMonth}>October</Text>
                        <Text style={dateDay}>25</Text>
                    </View>
                    <View style={hr}></View>
                    <View style={dataContainer}>
                        <View style={container2}>
                            <Text style={textHeader}>Amount: </Text>
                            <Text style={styles.amount}>Gh 300</Text>
                        </View>
                        <View style={styles.container3}>
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
         width: '100%',
         marginRight: 'auto',
         marginLeft: 'auto',
         padding: 10,
         flexDirection: 'row',
         marginBottom: 10,
         borderBottomColor: colors.INPUT_BORDER_COLOR,
         borderBottomWidth: 0.3,
     },
     container2: {
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         marginBottom: 2
     },
     container3: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
         fontSize: 30,
         color: Colors.THEME_COLOR_LIGHT
     },
     dateMonth: {
         color: Colors.LIGHT_DARK_COLOR,
         opacity: 0.5
     },
     hr: {
         width: 0.5,
         height: '100%',
         backgroundColor: Colors.LIGHT_GREY_COLOR,
     },
     textHeader: {
         color: Colors.DARK_COLOR,
         marginRight: 10,
     },
     amount: {
         fontSize: 25,
     }

 })


 export { ListItem };