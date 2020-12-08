import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useTheme} from 'react-native-paper';


export default function RenderPayRoom({
    item, 
    dateCheckIn, 
    dateCheckOut, 
    choosePromotion,
    soLuongKhach,
    loaiKhach,
    setTotala
}) {

    
    const daysSpent = parseInt((dateCheckOut - dateCheckIn)/(24*3000*1000));
    // let total =  (parseInt(item.price) * daysSpent) - choosePromotion + ((parseInt(item.price) * daysSpent) * 0.25)
    let total


    switch(loaiKhach) {
        case 'National':
            if(soLuongKhach === 3 ) {
                total = (parseInt(item.price) * daysSpent) - choosePromotion + ((parseInt(item.price) * daysSpent) * 0.25);
                setTotala(total);
            } else {
                total = (parseInt(item.price) * daysSpent) - choosePromotion;
                setTotala(total);
            }
            break;
        case 'International':
            if(soLuongKhach === 3 ) {
                total = ((parseInt(item.price) * daysSpent) - choosePromotion + ((parseInt(item.price) * daysSpent) * 0.25)) * 1.5;
                setTotala(total);
            } else {
                total = ((parseInt(item.price) * daysSpent) - choosePromotion) * 1.5;
                setTotala(total);

            }
            break;
    }
    
    
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
