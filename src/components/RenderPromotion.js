import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import {useTheme} from 'react-native-paper';

export default function RenderPromotion({item, navigation}) {
    const {colors} = useTheme();
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#EEE',
            paddingBottom: 25
        },
        promotionTitle: {
            alignSelf: 'flex-start',
            color: 'black',
            fontSize: 20,
            marginBottom: 5,
            marginLeft: 20
        },
        promotionImage: {
            width: 360,
            height: 200,
            resizeMode: 'stretch',
        }  
    })
    return (
        <View style={styles.container}>
            <Text style={styles.promotionTitle}>{item.name}</Text>
            <View style={{borderRadius: 20}}>
                <TouchableOpacity onPress={() => navigation.navigate('Detail', {item})}>
                    <Image style={styles.promotionImage} source={{uri: item.image[0].url}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
