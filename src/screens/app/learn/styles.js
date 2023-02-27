import { StyleSheet , Dimensions } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        gap: 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
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