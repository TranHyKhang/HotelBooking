import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {useTheme} from 'react-native-paper';

export default function HeaderScreen({title}) {
    const {colors} = useTheme();
    const styles = StyleSheet.create({
        container: {
            padding: 16,
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center'

        },
        title: {
            fontSize: 20,
            color: colors.primary,
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
