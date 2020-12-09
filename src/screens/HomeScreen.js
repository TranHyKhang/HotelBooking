import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import {useTheme} from 'react-native-paper';
import axios from 'axios';

import Carousel from 'react-native-snap-carousel';

import HeaderApp from '../components/HeaderApp';
import RenderRoom from '../components/RenderRoom';

const Loading = () => {
    return(
        <ActivityIndicator style={{marginTop:200}} 
        size="large" color="red"/>
    )
}


const HomeScreen = ({navigation}) => {

    const {colors} = useTheme();
    var carousel = 0;

    const [rooms, setRooms] = useState([]);
    const [promotions, setPromotions] = useState([]);
    const [loading,setLoading] = useState(false);

    

    if(loading) return <Loading/>

    const getRoom = async () => {
       
       let rooms = await axios.get('https://dreamerhotel.herokuapp.com/rooms');
    //    console.log(rooms);
       setRooms(rooms.data);
 
    }

    const getPromotion = async () => {
        let promotions = await axios.get('https://dreamerhotel.herokuapp.com/promotions');
        // console.log(promotions.data);
        setPromotions(promotions.data);
        
    }

    useEffect(() => {
        getRoom();
        getPromotion();
        
    }, [])

    const carouselItem =  [
        {
            title:"Item 1",
            text: "Text 1",
            image: require('../assets/images/Promo1.jpg')
        },
        {
            title:"Item 2",
            text: "Text 2",
            image: require('../assets/images/Promo2.png')

        },
        {
            title:"Item 3",
            text: "Text 3",
            image: require('../assets/images/Promo3.jpg')

        }
    ] 

    const carouselHotelRoom = rooms.map(function(x) {
        return {
            label: x.name,
            value: x.name,
            ...x
        }
    })



    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            flex: 1
        },
        body: {
            alignItems: 'center',
            justifyContent:'center',
        },
        topHotelContainer: {

        },
        topHotelImageOpacity: {
            backgroundColor: 'black',
            borderRadius: 10
        },
        topHotelImage: {
            width: 350,
            height: 200,
            borderRadius: 10,
            opacity: 0.5
        },
        topHotelImageTitle: {
            color: 'white',
            top: -110,
            left: 45,
            zIndex: 2,
            fontSize: 18,
        }
    })

    function _renderItem1({item,index}){
        return (
          <View>
            <Image 
                source={{uri: item.image[0].url}} 
                style={{
                    borderRadius: 10,
                    height: 200,
                    alignSelf:'center',
                    marginTop: 10,
                    width: 350,
                }}
            />
          </View>

        )
    }

    function _renderItem2({item, index}) {
        return (
            <RenderRoom item={item} navigation={navigation} carouselHotelRoom={carouselHotelRoom} promotions={promotions}/>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <HeaderApp/>
            {/* <Button title="ok" onPress={() => console.log(carouselHotelRoom)}/> */}
            <View style={styles.body}>
                <Carousel
                    ref={(c) => { carousel = c; }}
                    data={promotions}
                    loop
                    autoplay={true}
                    renderItem={_renderItem1}
                    sliderWidth={400}
                    itemWidth={400}
                    autoplayDelay={5000}
                    layout="tinder"
                    autoplayInterval={5000}  
                />
                <Carousel
                    ref={(c) => {carousel = c;}}
                    data={carouselHotelRoom}
                    renderItem={_renderItem2}
                    sliderWidth={350}
                    itemWidth={250}
                    layout='default'
                    loop
                />
                <View style={{alignSelf: 'flex-start'}}>
                    <Text 
                        style={{
                            color: colors.primary,
                            marginLeft: 30,
                            fontSize: 20,
                            marginTop: 20,
                            marginBottom: 10,
                        }}
                    >
                        Đề xuất cho bạn
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Category', {rooms, promotions, navigation})} style={styles.topHotelContainer}>
                    <View style={styles.topHotelImageOpacity}>
                        <Image style={styles.topHotelImage} source={require('../assets/images/resort1.png')}/>
                    </View>
                    <Text style={styles.topHotelImageTitle}>TOP PHÒNG ĐƯỢC BÌNH CHỌN</Text>
                </TouchableOpacity>
                
            </View>
            
        </ScrollView>
    )
}



export default HomeScreen;

