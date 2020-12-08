import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';

import InfoScreen from '../screens/InfoScreen';
import DetailInfo from '../screens/DetailInfo';
import BookingHistory from '../screens/BookingHistory';

const Stack = createStackNavigator();
export default function InfoStack() {
    return (
        <Stack.Navigator initialRouteName="Info" headerMode='none' >
            <Stack.Screen name="Info" component={InfoScreen}/>
            <Stack.Screen name="Detail" component={DetailInfo}/>
            <Stack.Screen name="History" component={BookingHistory}/>
        </Stack.Navigator>
    )
}
