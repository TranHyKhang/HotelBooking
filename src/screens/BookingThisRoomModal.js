import React, {useState, useEffect} from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useTheme} from 'react-native-paper';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import RenderTime from '../components/RenderTime';
import BookingPromotion from '../components/BookingPromotion';
import RenderPayRoom from '../components/RenderPayRoom';
import Axios from 'axios';

// import API from '../api/API';

const {width,height} = Dimensions.get('screen');

export default function BookingRoomModal({
    isModalVisible, 
    item, 
    toggleModalInfo, 
    toggleModalSuccess,
    toggleModal,
    promotions,
    soLuongKhach,
    loaiKhach,
    haveInfo,
    dateCheckIn,
    dateCheckOut,
    setDateChecOut,
    setDateCheckIn,
    reservationId
    }) {
  const [mode, setMode] = useState('date');
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [total, setTotal] = useState(0);
  
  const {colors} = useTheme();

  const [choosePromotion, setChoosePromtion] = useState('');
  


  const postApi = async() => {
    const obj = {
      "payment_date": dateCheckOut,
      "total": total,
      "reservation": reservationId
    } 

    await Axios.post('https://dreamerhotel.herokuapp.com/payments', obj);
  }



const clonePormotion = promotions.map(function(x) {
    return {
        label: x.name,
        ...x
    }
})

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
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: 10,
              marginBottom: 5,
              marginTop: 10
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
            <View
                style={{
                    backgroundColor: '#EEE',
                    padding: 15,
                    borderRadius: 10,
                    marginLeft: 20,
                    flex: 1
                }}
            >
                <Text>{item.name}</Text>
            </View>
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

          <BookingPromotion 
            promotions={clonePormotion}
            _handleChoosePromotion={(x) => setChoosePromtion(parseInt(x))}
          />

          <RenderPayRoom 
            item={item} 
            choosePromotion={choosePromotion}
            dateCheckIn={dateCheckIn} 
            dateCheckOut={dateCheckOut}
            soLuongKhach={soLuongKhach}
            loaiKhach={loaiKhach}
            setTotala={(x) => setTotal(x)}
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
              if(haveInfo) {
                toggleModal();
                toggleModalSuccess();
                postApi();
              } else {
                toggleModal();
                toggleModalInfo();
              }
            }}
          >
            <Text style={{fontSize: 16,color: 'white'}}>ĐẶT NGAY</Text>

          </TouchableOpacity>

        </View>
      </Modal>
    </View>
  );
}