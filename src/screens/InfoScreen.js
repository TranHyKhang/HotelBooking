import React from 'react';
import {Text, View, Image, StyleSheet, FlatList} from 'react-native';

import HeaderScreen from '../components/HeaderScreen';

import CustomUserInfo from '../components/CustomUserInfo';

const InfoScreen = () => {
    const mockUserData = {
        name: 'Hy Khang',
        avatar: require('../assets/images/avatar.jpg')
    }

    const feature = [
        {
            title: "Thông tin tài khoản",
        },
        {
            title: "Thay đổi thông tin"
        },
        {
            title: "Lịch sử phòng đẫ đặt"
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
                <Image source={mockUserData.avatar} style={styles.avatar}/>
                <Text style={styles.userName}>{mockUserData.name}</Text>
            </View>
            <FlatList 
                data={feature}
                renderItem={({item}) => <CustomUserInfo item={item}/> }
            />


        </View>
    )
}

export default InfoScreen;