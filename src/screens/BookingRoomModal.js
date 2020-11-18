import React, {useState} from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import Modal from 'react-native-modal'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper'

const {width,height} = Dimensions.get('screen');

export default function BookingRoomModal({isModalVisible, toggleModal}) {
    const [country, setCountry] = useState('uk');
    const {colors} = useTheme();
    return (
      <View style={{flex: 1}}>
        <Modal isVisible={isModalVisible}>
          <View style={{flex: 0.9, backgroundColor: 'white', borderRadius: 20}}>
            <View 
              style={{
                flexDirection: 'row', 
                justifyContent: 'space-between',
                padding: 20
              }}
            >
              <Text>haha</Text>
              <DropDownPicker
                items={[
                    {label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />},
                    {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
                    {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
                ]}
                defaultValue={country}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa', width: 250, alignSelf: 'flex-end'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => setCountry(item.value)}
              />
            </View>
            <TouchableOpacity 
              style={{
                alignSelf: 'center', 
                backgroundColor: colors.primary,
                position: 'relative', 
                top: height/1.65,
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 80,
                paddingRight: 80,
                borderRadius: 20
              }} 
              onPress={toggleModal}
            >
              <Text>ĐẶT NGAY</Text>

            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
}