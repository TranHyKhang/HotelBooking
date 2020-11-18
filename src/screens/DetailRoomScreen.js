import React, {useState} from 'react'
import { View, Text, Image, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import BookingRoomModal from './BookingRoomModal';

export default function DetailRoomScreen({navigation}) {

    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        console.log(isModalVisible)
    };

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
            <Button title="haha" onPress={toggleModal}/>
            <BookingRoomModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
        </View>
    )
}
