import React , {useState, useRef} from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet , PreviewLayout, Image , Text, TextInput, TouchableHighlight, View , Pressable , Button , Alert , Keyboard} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';
import OTPInput from '../../../components/otp';
import { ButtonContainer, ButtonText } from "../../../components/otp/styles";



const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>  
          {/* <View style={{flex: 0.5, backgroundColor: 'red'}} />
          <View style={{flex: 1, backgroundColor: 'darkorange'}} />
          <View style={{flex: 1, backgroundColor: 'green'}} />
          <View style={{flex: 1, backgroundColor: 'blue'}} />
          <View style={{flex: 1, backgroundColor: 'black'}} /> */}
    </View>
  );
};

export default Dashboard;
