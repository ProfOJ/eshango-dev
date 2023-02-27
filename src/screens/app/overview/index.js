import * as React from 'react';
import {StyleSheet , PreviewLayout, Image , Text, TextInput, TouchableHighlight, View , Pressable , Button , Alert , Keyboard} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../constants/colors';


const overviewDay = require('../../../assets/day.png');
const overviewDayInactive = require('../../../assets/CalendarDayGray.png');

const overviewWeek = require('../../../assets/view7days.png');
const overviewWeekInactive = require('../../../assets/CalendarWeekGray.png');

const overviewMonth = require('../../../assets/view1month.png');
const overviewMonthInactive = require('../../../assets/CalendarMonthGrey.png');

const overviewAlltime = require('../../../assets/viewAlltime.png');
const overviewAlltimeInactive = require('../../../assets/CalendarInfiniteGrey.png');



const correction = require('../../../assets/correction.png');
const loans = require('../../../assets/loans.png');
const moneyIntoBusiness = require('../../../assets/moneyIntoBusiness.png');
const moneyOutOfBusiness = require('../../../assets/moneyOutOfBusiness.png');
const savings = require('../../../assets/savings.png');
const overview = require('../../../assets/overview.png');
const learn = require('../../../assets/learn.png');
const contact = require('../../../assets/contact.png');
const moneyOutForMe = require('../../../assets/moneyOutForMe.png');
const cashBalance = require('../../../assets/cashBalance.png');
const income = require('../../../assets/incomeIcon.png');
const moneyLoan = require('../../../assets/MoneyInforLoan.png');
const moneyDebt = require('../../../assets/MoneyOutforDebt.png');
const profitReview = require('../../../assets/profitReview.png');

function Day() {
  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 , paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10, alignItems: 'center' }}>
        <View style={[{ backgroundColor: "#ffffff" , flex: 1 , paddingHorizontal: 20 }, styles.flexRow,]}>
               <Image 
                    style={{width:35, height: 35,}} 
                    source={profitReview}
                  />
              
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               
        </View>
        <View style={[{ backgroundColor: colors.lightGreen , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 , }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyIntoBusiness}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightRed , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyOutOfBusiness}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightPurple , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={cashBalance}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightBlue , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={savings}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightYellow , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyLoan}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightYellow , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyDebt}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        
    </View> 
     
  );
}

function Week() {
  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 , paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10, alignItems: 'center' }}>
        <View style={[{ backgroundColor: "#ffffff" , flex: 1 , paddingHorizontal: 20 }, styles.flexRow,]}>
               <Image 
                    style={{width:35, height: 35,}} 
                    source={profitReview}
                  />
              
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               
        </View>
        <View style={[{ backgroundColor: colors.lightGreen , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 , }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyIntoBusiness}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightRed , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyOutOfBusiness}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightPurple , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={cashBalance}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightBlue , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={savings}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightYellow , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyLoan}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightYellow , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyDebt}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        
    </View>
  );
}

function Month() {
  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 , paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10, alignItems: 'center' }}>
        <View style={[{ backgroundColor: "#ffffff" , flex: 1 , paddingHorizontal: 20 }, styles.flexRow,]}>
               <Image 
                    style={{width:35, height: 35,}} 
                    source={profitReview}
                  />
              
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               
        </View>
        <View style={[{ backgroundColor: colors.lightGreen , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 , }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyIntoBusiness}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightRed , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyOutOfBusiness}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightPurple , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={cashBalance}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightBlue , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={savings}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightYellow , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyLoan}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightYellow , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyDebt}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        
    </View>
  );
}

function Alltime() {
  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 , paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10, alignItems: 'center' }}>
        <View style={[{ backgroundColor: "#ffffff" , flex: 1 , paddingHorizontal: 20 }, styles.flexRow,]}>
               <Image 
                    style={{width:35, height: 35,}} 
                    source={profitReview}
                  />
              
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               
        </View>
        <View style={[{ backgroundColor: colors.lightGreen , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 , }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyIntoBusiness}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightRed , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyOutOfBusiness}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightPurple , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={cashBalance}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightBlue , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={savings}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightYellow , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyLoan}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        <View style={[{ backgroundColor: colors.lightYellow , flex: 1 , paddingVertical: 10, paddingHorizontal: 20 }, styles.flexRow, styles.mb]}>
               <Image 
                    style={styles.cardImg} 
                    source={moneyDebt}
                  />
               <View style={[{flex: 3 }, styles.center]}>
                  <Text style={styles.cashBalance}> 0 GNF</Text>
               </View>
        </View>
        
    </View>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Day"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarActiveBackgroundColor: colors.lightYellow,
      }}
    >
      <Tab.Screen
        name="Day"
        component={Day}
        options={{
          tabBarLabel: '',
          tabBarIcon:({focused})=>(
            focused?
                       <Image source={overviewDay} style={styles.activeImg} />
                       : <Image source={overviewDayInactive} style={styles.activeImg} />
          ),
        }}
      />
      <Tab.Screen
        name="Week"
        component={Week}
        options={{
          tabBarLabel: '',
          tabBarIcon:({focused})=>(
            focused?
                       <Image source={overviewWeek} style={styles.activeImg} />
                       : <Image source={overviewWeekInactive} style={styles.activeImg} />
          ),
        }}
      />
      <Tab.Screen
        name="Month"
        component={Month}
        options={{
          tabBarLabel: '',
          tabBarIcon:({focused})=>(
            focused?
                       <Image source={overviewMonth} style={styles.activeImg} />
                       : <Image source={overviewMonthInactive} style={styles.activeImg} />
          ),
        }}
      />
      <Tab.Screen
        name="Alltime"
        component={Alltime}
        options={{
          tabBarLabel: '',
          tabBarIcon:({focused})=>(
            focused?
                       <Image source={overviewAlltime} style={styles.activeImg} />
                       : <Image source={overviewAlltimeInactive} style={styles.activeImg} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Overview() {
  return (
    <>
      <MyTabs />
    </>
  );
}


const styles = StyleSheet.create({
  
  activeImg: {
      width: 40,
      height: 50,
  },


  mr: {
    marginRight: 10,
  },

  mb: {
    marginBottom: 10,
  },

  curved: {
    borderRadius: 10,
  },
  
  center: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  bottom: {
    //justifyContent: 'center',
    alignItems: 'flex-end',
  },

  cardImg: {
    width:60,
    height: 50,
    justifyContent: 'center',
  },

  flexRow: {
    flexDirection: "row",
  },

  cashBalance: {
    fontSize: 36,
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