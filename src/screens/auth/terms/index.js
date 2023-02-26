import React , {useState, useRef} from 'react';
import { StatusBar } from "expo-status-bar";
import {Image , Text, TextInput, TouchableHighlight, View , Pressable , Button , Alert , Keyboard} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from '../terms/styles';
import OTPInput from '../../../components/otp';
import { ButtonContainer, ButtonText } from "../../../components/otp/styles";



const TermsAndConditions = ({navigation}) => {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  return (
    <View style={styles.container}>
      <View 
      //style={{alignItems: 'left',}}
      >
            
            <Text style={styles.title}>Terms & Conditions</Text>

            <Text style={styles.p}>The standard Lorem Ipsum passage, used since the 1500s" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.”</Text>

            <Text style={styles.title}>This app isn’t a financial advisor</Text>

            <Text style={styles.p}>The standard Lorem Ipsum passage, used since the 1500s" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.  </Text>

            <Text style={styles.continuing}>By continuing you agree to our Terms & Conditions</Text>

            {/* <Pressable onPress={() => buttonPress()}>
              <Text style={styles.continuing}>Terms & Conditions</Text>
            </Pressable> */}

      </View>
      <View style={{alignItems: 'center',}}>                
            <Pressable style={styles.checkBtn} 
              //</View>onPress={() => buttonPress()}
            >
              <Image 
                style={styles.checkIcon} 
                source={require('../../../assets/readImg.png')}
            /> 
            </Pressable>

            <Pressable style={styles.acceptBtn} onPress={() => navigation.navigate('Dashboard')}>
              <Image 
                style={styles.acceptBtnImg} 
                source={require('../../../assets/checkSingle.png')}
            /> 
            </Pressable>
     
      </View>  
    </View>
  );
};


export default TermsAndConditions;
