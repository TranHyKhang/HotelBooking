import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {useTheme} from 'react-native-paper'

export default function RenderRoom({item, navigation, carouselHotelRoom}) {
    const {colors} = useTheme()
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            borderRadius: 10,
            backgroundColor: '#EEE',
            marginTop: 20,
            padding: 10
        },
        image: {
            borderRadius: 10,
            height: 100,
            alignSelf:'center',
            width: 100,
            resizeMode: 'stretch',
        },
        containerContent: {
            marginLeft: 10,
            justifyContent: 'center',
            flex: 1
        },
        roomName: {
            fontSize: 24
        },
        roomDes: {
            fontSize: 18
        },
        roomPrice: {
            alignSelf: 'flex-end',
            fontSize: 14,
            marginRight: 5,
            color: colors.primary,
            paddingTop: 10
        }
    })
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DetailRoom', {item, carouselHotelRoom})}>
            <View style={styles.container}>
                <Image style={styles.image} source={item.roomImage[0]}/>
                <View style={styles.containerContent}>
                    <Text style={styles.roomName}>{item.roomName}</Text>
                    <Text style={styles.roomDes}>{item.roomDes}</Text>
                    <Text style={styles.roomPrice}>{item.roomPrice + " VNĐ"}</Text>
                </View> 
            </View>
        </TouchableOpacity>
    )
}
