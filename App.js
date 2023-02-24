import React from 'react';
import Onboarding from './src/screens/auth/onboarding';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Country from './src/screens/auth/country';
import Login from './src/screens/auth/login';
import Otp from './src/screens/auth/otp';
import TermsAndConditions from './src/screens/auth/terms';
import Dashboard from './src/screens/app/dashboard';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Country" component={Country} />
        <Stack.Screen name="Login" component={Login}/>       
        <Stack.Screen name="Otp" component={Otp}/>
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions}/>

        <Stack.Screen name="Dashboard" component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;