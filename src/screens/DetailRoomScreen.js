import React from 'react'
import { View, Text, Image, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function DetailRoomScreen({route}) {

    const {navigation} = route.params;

    const carouselHotelRoom =  [
        {
            roomName: 'phong 1',
            roomDes: 'Day la phong 1',
            roomImage: require('../assets/images/resort1.png'),
            roomPrice: '100.000vnd'
        },
        {
            roomName: 'phong 1',
            roomDes: 'Day la phong 1',
            roomImage: require('../assets/images/resort1.png'),
            roomPrice: '100.000vnd'
        },
        {
            roomName: 'phong 1',
            roomDes: 'Day la phong 1',
            roomImage: require('../assets/images/resort1.png'),
            roomPrice: '100.000vnd'
        }
    ] 

    const _renderItem = ({item, index}) => {
        return (
            <View>
                <Image 
                    source={item.roomImage}
                    style={{
                        height: 300
                    }}
                />
            </View>
        )
    }

    var carousel = 0;
    return (
        <View>
            <Carousel
                ref={(c) => {carousel = c;}}
                data={carouselHotelRoom}
                renderItem={_renderItem}
                sliderWidth={400}
                sliderHeight={300}
                itemWidth={400}
                layout='stack'
                loop
            />
            <Button title="haha" onPress={() => navigation.navigate("Info")}/>
        </View>
    )
}
