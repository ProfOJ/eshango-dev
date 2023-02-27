import { StyleSheet , Dimensions } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.yellow,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 50,
        height: '100%',
    },
    
    logo: {
        width: 170,
        height: 52,
    },

    image: {
        flex: 1,
        justifyContent: 'center',
    },
    
   
})

export default styles;