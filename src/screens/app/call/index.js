import React , {useState, useRef} from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet , PreviewLayout, Image , Text, TextInput, TouchableHighlight, View , Pressable , Button , Alert , Keyboard} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
//import styles from './styles';
import OTPInput from '../../../components/otp';
import { ButtonContainer, ButtonText } from "../../../components/otp/styles";
import colors from '../../../constants/colors';


const correction = require('../../../assets/correction.png');
const loans = require('../../../assets/loans.png');
const moneyIntoBusiness = require('../../../assets/moneyIntoBusiness.png');
const moneyOutOfBusiness = require('../../../assets/moneyOutOfBusiness.png');
const savings = require('../../../assets/savings.png');
const overview = require('../../../assets/overview.png');
const learn = require('../../../assets/learn.png');
const contact = require('../../../assets/Call.png');
const moneyOutForMe = require('../../../assets/moneyOutForMe.png');
const cashBalance = require('../../../assets/cashBalance.png');
const income = require('../../../assets/incomeIcon.png');
const learnIcon = require('../../../assets/learnIcon.png');

export default function Call({navigation}) {
  return (
    <View style={{ backgroundColor: colors.lightPurple, flex: 1 , paddingHorizontal: 20, paddingTop: 50, paddingBottom: 10, justifyContent: 'center' , alignItems: 'center' }}>
      
         <View style={[{ backgroundColor: "#ffffff" , height: 340, width: 340, }, styles.shadow, styles.curved , styles.mr , styles.center ]}>
               <Pressable style={styles.acceptBtn} onPress={() => navigation.navigate('Otp')}>
                  <Image 
                    style={styles.cardImg} 
                    source={contact}
                  /> 
                </Pressable>
          </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
  mr: {
    marginRight: 10,
  },

  mb: {
    marginBottom: 10,
  },

  curved: {
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  
  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  cardImg: {
      width: 200,
      height: 200,
  },

  flexRow: {
    flexDirection: "row",
  },

  cashBalance: {
    fontSize: 24,
    fontWeight: '600',
  },

  container: {
    //backgroundColor: "#7CA1B4",
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    //justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
  },
  square: {
    backgroundColor: "#7cb48f",
    //flex: 1,
    //width: 100,
    //height: 140,
    margin: 4,
    //borderRadius: 12,
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  }
});

//export default Dashboard;
