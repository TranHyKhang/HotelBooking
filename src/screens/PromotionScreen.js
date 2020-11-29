import React from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';

import HeaderScreen from '../components/HeaderScreen';
import RenderPromotion from '../components/RenderPromotion';

const PromotionScreen = ({navigation}) => {
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
    return (
        <View style={{backgroundColor: 'white'}}>
            <ScrollView>
                <HeaderScreen title={'ƯU ĐÃI & KHUYẾN MÃI'}/>
                <FlatList
                    data={carouselItem}
                    renderItem={({item}) => <RenderPromotion navigation={navigation} item={item}/>}
                />
            </ScrollView>
        </View>
    )
}

export default PromotionScreen;