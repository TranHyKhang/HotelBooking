import React, {useState, useEffect} from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useTheme} from 'react-native-paper';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import RenderTime from '../components/RenderTime';
import BookingPromotion from '../components/BookingPromotion';
import RenderPayRoom from '../components/RenderPayRoom';

const {width,height} = Dimensions.get('screen');

export default function BookingRoomModal({isModalVisible, item, carouselHotelRoom, toggleModalInfo, toggleModal}) {
  const [room, setRoom] = useState(item.name);
  const [dateCheckIn, setDateCheckIn] = useState(new Date(1598051730000));
  const [dateCheckOut, setDateChecOut] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const {colors} = useTheme();

  
useEffect(() => {
  console.log(item)
  console.log(carouselHotelRoom)
}, [])

  const onChangeTimeCheckIn = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDateCheckIn(currentDate);
    setShowCheckIn(false);
  };
  const onChangeTimeCheckOut = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDateChecOut(currentDate);
    setShowCheckOut(false);
  };

  const showModeCheckIn = (currentMode) => {
    setShowCheckIn(true);
    setMode(currentMode);
  };

  const showModeCheckOut = (currentMode) => {
    setShowCheckOut(true);
    setMode(currentMode);
  };

  const showDatepickerCheckIn = () => {
    showModeCheckIn('date');
  };
  const showDatepickerCheckOut = () => {
    showModeCheckOut('date');
  };
  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <Modal isVisible={isModalVisible}>
        <View style={{flex: 0.9, backgroundColor: 'white', borderRadius: 20}}>
          <View style={{position: 'relative', left: width/1.25, top: 7}}>
            <TouchableOpacity onPress={toggleModal}>
              <FontAwesome name="close" size={20} style={{color: '#BBB'}}/>
            </TouchableOpacity>
          </View>
          <View 
            style={{
              flexDirection: 'row', 
              justifyContent: 'space-between',
              padding: 20,
              marginBottom: 5
            }}
          >
            <Image 
              source={{uri: item.image[0].url}} 
              style={{
                width: 50, 
                height: 50, 
                borderRadius: 100, 
                resizeMode: 'cover'
              }}
            />
            <DropDownPicker
              items={carouselHotelRoom}
              defaultValue={room}
              containerStyle={{height: 40}}
              style={{backgroundColor: '#fafafa', width: 250, alignSelf: 'flex-end'}}
              itemStyle={{
                  justifyContent: 'flex-start'
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={item => setRoom(item.name)}
            />
          </View>

          <View 
            style={{
              flexDirection: 'row',
              paddingRight: 10,
              paddingLeft: 10,
              paddingBottom: 20, 
              justifyContent: 'space-between'
            }}
          >
            <View>
              <TouchableOpacity 
                onPress={showDatepickerCheckIn} 
                style={{
                  backgroundColor: '#EEE',
                  width: width/3,
                  borderRadius: 10,
                  padding: 10
                }}
              >
                <RenderTime dateTime={dateCheckIn} />
              </TouchableOpacity>
              {showCheckIn && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dateCheckIn}
                  mode={mode}
                  is24Hour={true}
                  display="spinner"
                  onChange={onChangeTimeCheckIn}
                  
                />
              )}
            </View>
            <Feather name="arrow-right" size={30} style={{alignSelf: 'center', color: colors.primary}}/>
            <View>
              <TouchableOpacity 
                onPress={showDatepickerCheckOut}
                style={{
                  backgroundColor: '#EEE',
                  width: width/3,
                  borderRadius: 10,
                  padding: 10
                }}
              >
                <RenderTime dateTime={dateCheckOut} />
              </TouchableOpacity>
              {showCheckOut && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dateCheckOut}
                  mode={mode}
                  is24Hour={true}
                  display="spinner"
                  onChange={onChangeTimeCheckOut}
                />
              )}
            </View>
          </View>

          <BookingPromotion/>

          <RenderPayRoom 
            item={item} 
            dateCheckIn={dateCheckIn} 
            dateCheckOut={dateCheckOut}
          />
 
          <TouchableOpacity 
            style={{
              alignSelf: 'center', 
              backgroundColor: colors.primary,
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 80,
              paddingRight: 80,
              borderRadius: 20
            }} 
            onPress={() => {
              toggleModal();
              toggleModalInfo();
            }}
          >
            <Text style={{fontSize: 16,color: 'white'}}>ĐẶT NGAY</Text>

          </TouchableOpacity>

        </View>
      </Modal>
    </View>
  );
}