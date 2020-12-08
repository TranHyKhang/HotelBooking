import React, {useState} from 'react'
import { View, Text, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useTheme} from 'react-native-paper';
import Ionicon from 'react-native-vector-icons/Ionicons';

import BookingThisRoomModal from './BookingThisRoomModal';
import BookingInfoModal from './BookingInfoModal';
import BookingSuccessModal from './BookingSuccessModal';

export default function DetailRoomScreen({navigation, route}) {
    const {colors} = useTheme();
    const {item, carouselHotelRoom, promotions} = route.params; 
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalInfoVisible, setIsModalInfoVisible] = useState(false);
    const [isModalSuccessVisible, setIsModalSuccessVisible] = useState(false);

    const [soLuongKhach, setSoluongKhach] = useState(0);
    const [loaiKhach, setLoaiKhach] = useState('National');
    const [haveInfo, setHaveInfo] = useState(false);
    const [dateCheckIn, setDateCheckIn] = useState(new Date(1598051730000));
  const [dateCheckOut, setDateChecOut] = useState(new Date(1598051730000));
    
  
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleModalInfo = () => {
        setIsModalInfoVisible(!isModalInfoVisible);
    }

    const toggleModalSuccess = () => {
        setIsModalSuccessVisible(!isModalSuccessVisible);
    }

    const itemRoom = {
        label: item.name,
        value: item.name,
        ...item
    }
    
    const styles = StyleSheet.create({
        text: {
            fontSize: 20
        },
        label: {
            fontSize: 16,
            color: '#666'
        },
        icon: {
            color: '#DDD',
        },
        icon1: {
            position: 'relative',
            top: -325,
            left: 5,
        }
    })
   

    const _renderItem = ({item, index}) => {
        return (
            <View>
                <Image 
                    source={{uri: item.url}}
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
                data={item.image}
                renderItem={_renderItem}
                sliderWidth={400}
                sliderHeight={300}
                itemWidth={400}
                layout='stack'
                loop
            />
            <TouchableOpacity style={styles.icon1} onPress={() => navigation.navigate('Home')}>
                <Ionicon name="arrow-back" size={30} style={styles.icon}/>
            </TouchableOpacity>
            <View style={{position: 'relative', top: -45, padding: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                    <Text style={styles.label}>Tên: </Text>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                    <Text style={styles.label}>Loại phòng: </Text>
                    <Text style={styles.text}>{item.type}</Text>
                </View>
                <View style={{flexDirection: 'column', marginBottom: 5}}>
                    <Text style={styles.label}>Mô tả: </Text>
                    <Text style={styles.text}>{item.note}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                    <Text style={styles.label}>Giá phòng: </Text>
                    <Text style={styles.text}>{item.price} vnđ</Text>
                </View>
               
            </View>
            <TouchableOpacity onPress={toggleModal}>
                <View 
                    style={{
                        padding: 15, 
                        backgroundColor: colors.primary, 
                        width: 200, 
                        borderRadius: 20, 
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}
                >
                    <Text style={{
                            color: 'white',
                            fontSize: 18
                        }}
                    >
                        ĐẶT PHÒNG NGAY
                    </Text>
                </View>
            </TouchableOpacity>
            <Button title="haha" onPress={() => console.log(item)}/>
            <BookingThisRoomModal 
                isModalVisible={isModalVisible} 
                toggleModal={toggleModal} 
                toggleModalInfo={toggleModalInfo}
                toggleModalSuccess={toggleModalSuccess}
                item={itemRoom} 
                carouselHotelRoom={carouselHotelRoom}
                promotions={promotions}
                soLuongKhach={soLuongKhach}
                loaiKhach={loaiKhach}
                haveInfo={haveInfo}
                dateCheckIn={dateCheckIn}
                dateCheckOut={dateCheckOut}
                setDateChecOut={(x) => setDateChecOut(x)}
                setDateCheckIn={(x) => setDateCheckIn(x)}
            />
            <BookingInfoModal
                isModalInfoVisible={isModalInfoVisible}
                toggleModal={toggleModal}
                toggleModalInfo={toggleModalInfo}
                toggleModalSuccess={toggleModalSuccess}
                loaiKhach={loaiKhach}
                soLuongKhach={soLuongKhach}
                _handleLoaiKhach={(x) => setLoaiKhach(x)}
                _handleSoluongKhach={(x) => setSoluongKhach(x)}
                _handleHaveInfo={() => setHaveInfo(true)}
                dateCheckIn={dateCheckIn}
            />
            <BookingSuccessModal
                isModalSuccessVisible={isModalSuccessVisible}
                toggleModalSuccess={toggleModalSuccess}
            />
        </View>
    )
}
