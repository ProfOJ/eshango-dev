import { StyleSheet , Dimensions } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        height: '100%',
        //backgroundColor: "#141414",
        justifyContent: "top",
        marginTop: 40,
    },

    checkBtn: {
        marginTop: 80,
    },

    acceptBtn: {
        backgroundColor: colors.darkGreen,
        width: 380,
        height: 50,
        borderRadius: '30%',
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    
    p: {
        fontSize: 18,
    },
   
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5,
        marginTop: 20,
    },

    continuing: {
        fontSize: 18,
        marginTop: 20,
        textDecorationLine: 'underline',
    }
})

export default styles;