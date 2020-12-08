import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, FlatList} from 'react-native';

import HeaderScreen from '../components/HeaderScreen';

import CustomUserInfo from '../components/CustomUserInfo';

const InfoScreen = ({navigation}) => {

    const [user, setUser] = useState({
        "confirmed": true,
        "blocked": false,
        "_id": "5fc7028165613b0017d27b80",
        "username": "Gia Cát Lượng",
        "email": "giacatluong@gmail.com",
        "provider": "local",
        "createdAt": "2020-12-02T02:57:05.121Z",
        "updatedAt": "2020-12-02T02:57:05.136Z",
        "__v": 0,
        "role": {
            "_id": "5fbf597db53b1932e06024a8",
            "name": "Public API",
            "description": "Default role given to unauthenticated user. Everyone can get this resources",
            "type": "public",
            "__v": 0,
            "id": "5fbf597db53b1932e06024a8"
        },
        "id": "5fc7028165613b0017d27b80",
        "avatar": require('../assets/images/avatar.jpg')

    })
    const feature = [
        {
            title: "Thông tin tài khoản",
            doSomeThing: () => {
                navigation.navigate('Detail', {user})
            }
        },
        {
            title: "Lịch sử phòng đã đặt",
            doSomeThing: () => {
                navigation.navigate('History', {user})
            }      
        }
    ]

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white', 
            flex: 1
        },
        user: {
            justifyContent: 'center', 
            alignItems: 'center',
            
        },
        avatar: {
            height: 160,
            width: 160,
            borderRadius: 1000,
            marginTop: 40
        },
        userName: {
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 10
        }
    })
    return (
        <View style={styles.container}>
            <HeaderScreen title={"THÀNH VIÊN"}/>
            <View style={styles.user}>
                <Image source={user.avatar} style={styles.avatar}/>
                <Text style={styles.userName}>{user.username}</Text>
            </View>
            <FlatList 
                data={feature}
                renderItem={({item}) => <CustomUserInfo item={item}/> }
            />


        </View>
    )
}

export default InfoScreen;