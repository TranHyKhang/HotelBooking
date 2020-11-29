import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import {useTheme} from 'react-native-paper'

export default function DetailPromotionScreen({route}) {
    const {item} = route.params;
    const {colors} = useTheme();
    const {width, height} = Dimensions.get('screen');
    const styles = StyleSheet.create({
        container: {
            justifyContent:'center',
            alignItems: 'flex-start'
        },
        image: {
            width: width,
            height: 230,
            resizeMode: 'stretch'
        },
        wrapContent: {
            padding: 10
        },  
        title: {
            color: colors.primary,
            fontSize: 20
        },
        des: {

        }
    })
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={item.image}/>
            <View style={styles.wrapContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.des}>{item.text}</Text>
            </View> 
        </View>
    )
}
