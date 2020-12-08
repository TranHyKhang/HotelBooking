import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Button } from 'react-native'
import { useTheme} from 'react-native-paper';
import DropdownPicker from 'react-native-dropdown-picker';

export default function BookingPromotion({promotions, _handleChoosePromotion}) {
    const {colors} = useTheme();
    const {width, height} = Dimensions.get('screen');
    const [promotion, setPromotion] = useState(promotions[0]);
    const [choosePromtion, setChoosePromotion] = useState([promotions[0]]);

    


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
                    items={promotions}
                    defaultValue={promotion.value}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa', width: width/2}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                        zIndex: 2
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => {
                        setPromotion(item);
                        _handleChoosePromotion(item.value);
                    }}
                />
            </View>

            <Image source={{uri: promotion.image[0].url}} style={styles.image}/>
        </View>
    )
}
