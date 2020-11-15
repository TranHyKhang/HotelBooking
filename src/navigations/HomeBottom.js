import React from 'react';
import {Text, View} from 'react-native'

import {useTheme} from 'react-native-paper';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import PromotionScreen from '../screens/PromotionScreen';
import SearchScreen from '../screens/SearchScreen';
import BookingScreen from '../screens/BookingScreen';

import HomeStack from './HomeStack';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();

function HomeBottom() {
  const {colors} = useTheme();
  return (
    <BottomTab.Navigator 
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: colors.primary,
            inactiveTintColor: 'black'
        }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: ({color}) => <Text style={{color: color}}></Text>,
          tabBarIcon: ({color}) => <Feather style={{marginTop: 20}} name="home" color={color} size={35} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
            tabBarLabel: ({color}) => <Text style={{color: color}}></Text>,
            tabBarIcon: ({color}) => <Ionicon style={{marginTop: 20}} name="search" size={35} color={color}/>
        }}
      />
      <BottomTab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
            tabBarIcon: ({color}) => <AntDesign style={{marginTop: 20}} name="pluscircleo" size={35} color={color}/>,
            tabBarLabel: () => <Text></Text>
        }}
      />
      <BottomTab.Screen
        name="Promotion"
        component={PromotionScreen}
        options={{
          tabBarLabel: ({color}) => <Text style={{color: color}}></Text>,
          tabBarIcon: ({color}) => (
            <AntDesign style={{marginTop: 20}} name="tagso" color={color} size={35} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          tabBarLabel: ({color}) => <Text style={{color: color}}></Text>,
          tabBarIcon: ({color}) => <Ionicon style={{marginTop: 20}} name="person-circle-outline" color={color} size={35} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default HomeBottom;