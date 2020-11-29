import React from 'react'
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import DetailPomotionScreen from '../screens/DetailPromotionScreen';
import PromotionScreen from '../screens/PromotionScreen';
import {useTheme} from 'react-native-paper'


const Stack = createStackNavigator();



export default function PromotionStack() {
    return (
        <Stack.Navigator initialRouteName="HomePromotion" headerMode="none">
            <Stack.Screen name="HomePromotion" component={PromotionScreen}/>
            <Stack.Screen name="Detail" component={DetailPomotionScreen}/>
        </Stack.Navigator>
    )
}
