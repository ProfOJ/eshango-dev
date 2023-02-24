import { StyleSheet , Dimensions } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 50,
        height: '100%',
    },
    
    flagView: {
        //marginBottom: '20%', 
        // backgroundColor: colors.yellow , 
        padding: 20, 
        borderRadius: 20,
    },

    logo: {
        width: 170,
        height: 52,
        //padding: '50% 10px',
    },

    flag: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    country : {
        fontSize: '18px',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 15,
    },

    image: {
        flex: 1,
        justifyContent: 'center',
    },
    
   
})

export default styles;