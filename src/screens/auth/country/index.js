import React from 'react';
import {Image , Text, TouchableHighlight, View} from 'react-native';
import colors from '../../../constants/colors';
import styles from '../country/styles';


const Country = ({navigation}) => (
  <View style={styles.container}>
        
      <View style={{marginBottom: '40%'}}>
        <Image 
            style={styles.logo} 
            source={require('../../../assets/eshangoLogo.png')}
        /> 
      </View>  

      <TouchableHighlight activeOpacity={0.6} underlayColor={colors.yellow} onPress={() => navigation.navigate('Login')}>
        <View style={styles.flagView}>  
          <Image 
              style={styles.flag} 
              source={require('../../../assets/liberiaFlag.png')}
          />
          <Text style={styles.country}>Liberia</Text>
        </View>
      </TouchableHighlight>    

      
      <TouchableHighlight activeOpacity={0.6} underlayColor={colors.yellow} onPress={() => navigation.navigate('Login')}>
        <View style={styles.flagView}>
        <Image 
            style={styles.flag} 
            source={require('../../../assets/guineaFlag.png')}
        />
        <Text style={styles.country}>Guinea</Text>
      </View> 
      </TouchableHighlight>

  </View>
);

export default Country;