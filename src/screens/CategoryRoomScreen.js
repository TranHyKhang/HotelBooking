import React from 'react'
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'react-native-paper'

import RenderListRoom from '../components/RenderListRoom';
import HeaderScreen from '../components/HeaderScreen';

export default function CategoryRoomScreen({route, navigation}) {
    const {rooms, promotions} = route.params;
    const {colors} = useTheme();
    const styles = StyleSheet.create({
        header: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        icon: {
            color: colors.primary,
            marginLeft: 5
        }
    });
    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicon name="arrow-back" size={30} style={styles.icon}/>
                </TouchableOpacity>
                <HeaderScreen title="Top phòng được bình chọn"/>
            </View>
            <FlatList
                data={rooms}
                renderItem={({item}) => <RenderListRoom item={item} promotions={promotions} navigation={navigation}/>}
            />
            {/* <Button title="haha" onPress={() => console.log(rooms)}/> */}

        </View>
    )
}
