import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {useTheme} from 'react-native-paper';

export default function HeaderApp() {
    const {colors} = useTheme();
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.primary
        },
        appName: {
            padding: 18,
            fontSize: 24
        }   
    })
    return (
        <View style={styles.container}>
            <Text style={styles.appName}>Booking App</Text>
        </View>
    )
}

