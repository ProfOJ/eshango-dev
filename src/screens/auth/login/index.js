import React , {useState, useRef} from 'react';
import {Image , Text, TextInput, TouchableHighlight, View , Pressable , Button , Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneInput from 'react-native-phone-number-input';
import colors from '../../../constants/colors';
import styles from '../login/styles';


 
const Login = ({navigation}) => {
  const [phoneNumber, setphoneNumber] = useState('');
  const phoneInput = useRef(null);
  const buttonPress = () => {
    Alert.alert('OTP sent via SMS to: '+phoneNumber);
    navigation.navigate('Otp');
  };
  return (
    <View style={styles.container}>
      <View style={{marginBottom: '20%'}}>
        <Image 
            style={styles.logo} 
            source={require('../../../assets/eshangoLogo.png')}
        /> 
      </View> 
      <View style={{alignItems: 'center'}}>
        <PhoneInput
          ref={phoneInput}
          //defaultValue={phoneNumber}
          defaultCode="LR"
          layout="second" 
          autoFocus
          placeholder=" "
          textInputStyle={styles.textInput}
          codeTextStyle={styles.textInput}
          countryPickerButtonStyle={styles.countryPicker}
          textContainerStyle={styles.phoneInput}
          containerStyle={styles.phoneContainer}
          onChangeFormattedText={text => {
            setphoneNumber(text);
          }}
        />
        <Pressable style={styles.button} onPress={() => buttonPress()}>
          <Image 
            style={styles.checkIcon} 
            source={require('../../../assets/checkIcon.png')}
        /> 
        </Pressable>
        
      </View>  
    </View>
  );
};


export default Login;
