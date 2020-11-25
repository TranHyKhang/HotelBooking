import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import {useTheme} from 'react-native-paper';
import DropdownPicker from 'react-native-dropdown-picker';

export default function BookingPromotion({promotionItem}) {
    const {colors} = useTheme();
    const {width, height} = Dimensions.get('screen');
    const [promotion, setPromotion] = useState();
    const [choosePromtion, setChoosePromotion] = useState([{
        image: require('../assets/images/Promo1.jpg'),
        label: "Item 1",
        value: "Text 1"
    }]);
    const mockPromotionItem = [
        {
            image: require('../assets/images/Promo1.jpg'),
            label: "Item 1",
            value: "Text 1"
        },
        {
            image: require('../assets/images/Promo2.png'),
            label: "Item 2",
            value: "Text 2"
        },
        {
            image: require('../assets/images/Promo3.jpg'),
            label: "Item 3",
            value: "Text 3"
        }
    ]; 

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#EEE',
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            paddingTop: 15,
            paddingBottom: 15
        },
        promotion_content: {
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        title: {
            color: colors.primary,
            fontSize: 20,
            marginRight: 10
        },
        image: {
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 20,
            width: 310,
            height: 150,
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.promotion_content}>
                <Text style={styles.title}>Promotion:</Text>
                <DropdownPicker
                    items={mockPromotionItem}
                    defaultValue={promotion}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa', width: width/2}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => {
                        setPromotion(item.value);
                        let arr = mockPromotionItem.filter(x => x.value === item.value);
                        setChoosePromotion(arr);
                    }}
                />
            </View>
            <Image source={choosePromtion[0].image} style={styles.image}/>
        </View>
    )
}
