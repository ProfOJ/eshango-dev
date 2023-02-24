import React , {useState, useRef} from 'react';
import { StatusBar } from "expo-status-bar";
import {Image , Text, TextInput, TouchableHighlight, View , Pressable , Button , Alert , Keyboard} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from '../otp/styles';
import OTPInput from '../../../components/otp';
import { ButtonContainer, ButtonText } from "../../../components/otp/styles";



const Otp = ({navigation}) => {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  return (
    <View style={styles.container}>
      <View style={{marginBottom: '10%'}}>
        <Image 
            style={styles.logo} 
            source={require('../../../assets/eshangoLogo.png')}
        /> 
      </View> 
      <View style={{alignItems: 'center',}}>
          <Pressable style={styles.otpBox} onPress={Keyboard.dismiss}>
            
            <Text style={styles.textTop}>A code has been sent to your phone number. {'\n'}
            Type it here to sign in.</Text>

            <OTPInput
              code={otpCode}
              setCode={setOTPCode}
              maximumLength={maximumCodeLength}
              setIsPinReady={setIsPinReady}
            />

            {/* <ButtonContainer
              disabled={!isPinReady}
              style={{
                backgroundColor: !isPinReady ? "grey" : "#000000",
              }}
            >
              <ButtonText
                style={{
                  color: !isPinReady ? "black" : "#EEEEEE",
                }}
              >
                Login
              </ButtonText>
            </ButtonContainer> */}

            <Pressable style={styles.checkBtn} onPress={() => navigation.navigate('TermsAndConditions')}>
              <Image 
                style={styles.checkIcon} 
                source={require('../../../assets/checkIcon.png')}
            /> 
            </Pressable>

            <Pressable style={styles.skip} onPress={() => navigation.navigate('TermsAndConditions')}>
              <Text style={styles.skip}>Skip</Text>
            </Pressable>
            <StatusBar style="auto" />


            {/* <Text style={styles.resend}>Didn't receive the code?</Text>
            <Text style={styles.skip}>Resend</Text> */}
          </Pressable>        
      </View>  
    </View>
  );
};


export default Otp;
