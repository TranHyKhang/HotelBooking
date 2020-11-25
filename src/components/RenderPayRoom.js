import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useTheme} from 'react-native-paper';


export default function RenderPayRoom({item, dateCheckIn, dateCheckOut}) {
    const daysSpent = dateCheckOut.getDate() - dateCheckIn.getDate();
    const total = item.roomPrice * daysSpent;
    const {colors} = useTheme();

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#EEE',
            margin: 10,
            borderRadius: 20,
            marginTop: 20,
            padding: 10,
            marginBottom: 20
        },
        title: {
            color: 'black',
            fontSize: 16,
            marginBottom: 10
        },
        price: {
            fontSize: 24,
            color: colors.primary
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tiền phòng (tạm tính)</Text>
            <Text style={styles.price}>
            {
                total < 0 ? "Ngày đặt phòng không hợp lệ" : total + " VNĐ"
            }
            </Text>
        </View>
    )
}
