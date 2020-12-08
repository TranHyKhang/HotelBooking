import React from 'react'
import { View, Text, Button, FlatList } from 'react-native';

import RenderListRoom from '../components/RenderListRoom';

export default function CategoryRoomScreen({route}) {
    const {rooms} = route.params;
    return (
        <View>
            <FlatList
                data={rooms}
                renderItem={({item}) => <RenderListRoom item={item}/>}
            />
            <Button title="haha" onPress={() => console.log(rooms)}/>
        </View>
    )
}
