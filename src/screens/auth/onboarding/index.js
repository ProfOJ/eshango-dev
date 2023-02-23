import React from 'react';
import {ImageBackground, Image , StyleSheet, Text, View} from 'react-native';
import colors from '../../../constants/colors';

const image = require('../../../assets/woman-bg.png');

const Onboarding = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image 
            style={styles.logo} 
            source={require('../../../assets/eshangoLogo.png')}
        /> 
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{

  },
});

export default Onboarding;