import { StyleSheet , Dimensions } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 40,
        height: '100%',
    },
    
    logo: {
        width: 170,
        height: 52,
        marginTop: 20,
    },

    image: {
        flex: 1,
        justifyContent: 'center',
    },
    
    phoneContainer: {
        width: '90%',
        height: 50,  
        //backgroundColor: '#cecece10',
    },

    countryPicker: {
        border: '1px solid black',
        borderBottomWidth : 1.0,
        borderBottom: '1px solid black',
        width: '30%',
        backgroundColor: '#00000010',
        fontSize: 24,
    },

    phoneInput: {
        border: '1px solid black',
        borderBottomWidth : 1.0,
        borderBottom: '1px solid black',
        marginLeft: 5,
        backgroundColor: '#00000010',
        //backgroundColor: 'red',
    },

    button: {
        marginTop: 54,
        width: '75%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    checkIcon: {
        width: 80,
        height: 80,
    },

    btn : {
        marginTop: 10,
    },

    textInput: {
        paddingVertical: 0,
        fontSize: 24,
    },
})

export default styles;