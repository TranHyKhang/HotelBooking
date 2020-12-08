import React from 'react'
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    StyleSheet,
    Image
} from 'react-native'
import {useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HeaderScreen from '../components/HeaderScreen';

export default function DetailInfo({route, navigation}) {
    const {user} = route.params;
    const {colors} = useTheme();
    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            flex: 1
        },
        body: {
            justifyContent: 'center',
            padding: 15
        },
        avatar: {
            height: 160,
            width: 160,
            borderRadius: 1000,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 60
        },
        wrapContent: {
            flexDirection: 'row',
            marginTop: 10
        },
        label: {
            fontSize: 16,
            color: '#666'
        },
        value: {
            fontSize: 18,
            fontWeight: 'bold'
        }
    })
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={{position: 'relative', left: 8}} onPress={() => navigation.navigate('Info')}>
                    <Ionicons name="arrow-back" size={25} style={{color: colors.primary}}/>
                </TouchableOpacity>
                <HeaderScreen title={'Thông tin của bạn'}/>
            </View>
            <View style={styles.body}>
                <Image source={user.avatar} style={styles.avatar}/>
                <View style={styles.wrapContent}>
                    <Text style={styles.label}>User name: </Text>
                    <Text style={styles.value}>{user.username}</Text>
                </View>
                <View style={styles.wrapContent}>
                    <Text style={styles.label}>Email: </Text>
                    <Text style={styles.value}>{user.email}</Text>
                </View>
            </View>
        </View>
    )
}
