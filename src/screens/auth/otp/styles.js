import { StyleSheet , Dimensions } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 40,
        height: '100%',
        //backgroundColor: "#141414",
        justifyContent: "center",
    },

    otpBox: {
        alignItems: 'center',
        padding: 10,
        height: '100%',
        //backgroundColor: "#141414",
    },
    
    logo: {
        width: 170,
        height: 52,
        marginTop: 100,
    },

    checkBtn: {
        marginTop: 80,
    },

    textTop: {
        marginBottom: 35,
    },

    skip: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    
    resend: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: '400',
    },
   
})

export default styles;