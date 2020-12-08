import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';
import axios from 'axios';

import HeaderScreen from '../components/HeaderScreen';
import RenderPromotion from '../components/RenderPromotion';

const PromotionScreen = ({navigation}) => {

    const [promotions, setPromotions] = useState([]);

    const getPromtions = async() => {
        let data = await axios.get('https://dreamerhotel.herokuapp.com/promotions');
        // console.log(data.data)
        setPromotions(data.data)
    }

    useEffect(() => {
        getPromtions();
    }, [])


    
    return (
        <View style={{backgroundColor: 'white'}}>
            <ScrollView>
                <HeaderScreen title={'ƯU ĐÃI & KHUYẾN MÃI'}/>
                <FlatList
                    data={promotions}
                    renderItem={({item}) => <RenderPromotion navigation={navigation} item={item}/>}
                />
            </ScrollView>
        </View>
    )
}

export default PromotionScreen;