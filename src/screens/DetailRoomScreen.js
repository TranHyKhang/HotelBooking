import React, {useState} from 'react'
import { View, Text, Image, Button, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import BookingRoomModal from './BookingRoomModal';
import BookingInfoModal from './BookingInfoModal';
import BookingSuccessModal from './BookingSuccessModal';

export default function DetailRoomScreen({navigation, route}) {

    const {item, carouselHotelRoom} = route.params; 
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalInfoVisible, setIsModalInfoVisible] = useState(false);
    const [isModalSuccessVisible, setIsModalSuccessVisible] = useState(false);
  
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleModalInfo = () => {
        setIsModalInfoVisible(!isModalInfoVisible);
    }

    const toggleModalSuccess = () => {
        setIsModalSuccessVisible(!isModalSuccessVisible);
    }
   

    const _renderItem = ({item, index}) => {
        return (
            <View>
                <Image 
                    source={item}
                    style={{
                        height: 300
                    }}
                />
            </View>
        )
    }

    var carousel = 0;
    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Carousel
                ref={(c) => {carousel = c;}}
                data={item.roomImage}
                renderItem={_renderItem}
                sliderWidth={400}
                sliderHeight={300}
                itemWidth={400}
                layout='stack'
                loop
            />
            <Button title="haha" onPress={toggleModal}/>
            <BookingRoomModal 
                isModalVisible={isModalVisible} 
                toggleModal={toggleModal} 
                toggleModalInfo={toggleModalInfo}
                item={item} 
                carouselHotelRoom={carouselHotelRoom}
            />
            <BookingInfoModal
                isModalInfoVisible={isModalInfoVisible}
                toggleModal={toggleModal}
                toggleModalInfo={toggleModalInfo}
                toggleModalSuccess={toggleModalSuccess}
            />
            <BookingSuccessModal
                isModalSuccessVisible={isModalSuccessVisible}
                toggleModalSuccess={toggleModalSuccess}
            />
        </View>
    )
}
