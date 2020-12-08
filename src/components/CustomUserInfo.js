import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function CustomUserInfo({item}) {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            borderBottomWidth: 1,
            borderColor: '#DDD',
            marginTop: 20
        }
    })
    return (
        <TouchableOpacity onPress={item.doSomeThing}>
            <View style={styles.container}>
                <View>
                    {/* <Entypo name="info"/> */}
                    <Text style={{fontSize: 18}}>{item.title}</Text>
                </View>
                <MaterialIcon style={{color: '#BBB'}} name="arrow-forward-ios" size={26}/>
            </View>
        </TouchableOpacity>
        
    )
}
