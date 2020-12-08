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
            alignItems: 'flex-start',
            backgroundColor: 'white', 
            flex: 1
        },
        image: {
            width: width,
            height: 230,
            resizeMode: 'stretch',
            flex: 3.5
        },
        wrapContent: {
            padding: 10,
            flex: 6.5
        },  
        title: {
            color: colors.primary,
            fontSize: 22,
        },
        des: {
            fontSize: 18
        }
    })
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.image[0].url}}/>
            <View style={styles.wrapContent}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.des}>{item.note}</Text>
            </View> 
        </View>
    )
}
