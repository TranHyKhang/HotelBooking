import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {useTheme} from 'react-native-paper'
export default function RenderListRoom({item, promotions, navigation}) {
    const {colors} = useTheme();
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#CCC'
        },
        content: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            flex: 1,
            paddingLeft: 10
        },
        price: {
            alignSelf: 'flex-end',
            marginTop: 15,
            fontSize: 16,
            color: colors.primary
        },
        name: {
            fontSize: 20,
            color: colors.primary
        }, 
        des: {
            flexWrap: 'wrap',
            fontSize: 16
        }
    })
    return (
       <TouchableOpacity onPress={() => navigation.navigate('DetailRoom', {item, promotions, navigation})}>
            <View style={styles.container}>
                <Image source={{uri: item.image[0].url}} style={{width: 150, height: 150}}/>
                {/* <Text>{item.name}</Text> */}
                <View style={{flexDirection: 'column', flex: 1}}>
                    <View style={styles.content}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.des}>{item.note}</Text>
                    </View>
                    <Text style={styles.price}>{item.price} VNĐ</Text>
                </View>

            </View>
       </TouchableOpacity>
    )
}
