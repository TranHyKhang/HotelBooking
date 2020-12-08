import React, {useState} from 'react'
import { ScrollView,View, Text, Button, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import {useTheme} from 'react-native-paper';
import DropdownPicker from 'react-native-dropdown-picker';
import NumericInput from 'react-native-numeric-input';
import axios from 'axios';

import TextInputInfo from '../components/TextInputInfo';

export default function BookingInfoModal({
    toggleModalInfo, 
    isModalInfoVisible, 
    toggleModalSuccess, 
    toggleModal, 
    _handleLoaiKhach,
    _handleSoluongKhach,
    _handleHaveInfo,
    loaiKhach, 
    soLuongKhach,
    dateCheckIn,
    item,
    setReservationId
}) {
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userCMND, setUserCMND] = useState('');
    const [userAddress, setUserAddress] = useState('');

    const {colors} = useTheme(); 

    const cacLoaiKhach = [
        {
            label: 'National',
            value: 'National'
        }, 
        {
            label: 'International',
            value: 'International'
        }
    ]

    const userID = () => {
        return "KH" + (Math.floor(Math.random() * 1000000) + 1);
    }

    const _postReservation = async () => {
        const obj = {
            "reservation_date": dateCheckIn,
            "guest_name": userName,
            "guest_type": loaiKhach,
            "guest_personal_id": userCMND,
            "guest_address": userAddress,
            "list_detail_reservation":[
                {
                "deposit":10,
                "room":item.id
                }    
            ],
            "guest_id": userID()
        }
        console.log(obj);
        let data = await axios.post("https://dreamerhotel.herokuapp.com/reservations", obj);
        setReservationId(data.data.id);
        
    }



    return (
        <View style={{flex: 1}}>
            <Modal
                isVisible={isModalInfoVisible}
            >
                    <View 
                        style={{
                            flex: 0.7, 
                            // backgroundColor: 'white',
                            padding: 20,
                            justifyContent: 'center'
                        }}
                    >
                        <TextInputInfo lable={'Họ Tên'} value={userName} _handleText={setUserName}/>
                            <TextInputInfo lable={'SĐT'} value={userPhone} _handleText={setUserPhone}/>
                            <TextInputInfo lable={'CMND'} value={userCMND} _handleText={setUserCMND}/>
                            <TextInputInfo lable={'Địa chỉ'} value={userAddress} _handleText={setUserAddress}/>
                            <View 
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <View>
                                    <Text style={{color: 'white', fontSize: 18}}>Loại khách</Text>
                                    <DropdownPicker
                                        items={cacLoaiKhach}
                                        defaultValue={loaiKhach}
                                        containerStyle={{height: 40, width: 150}}
                                        style={{
                                            justifyContent: 'flex-start'
                                        }}
                                        dropDownStyle={{backgroundColor: '#fafafa'}}
                                        onChangeItem={item => _handleLoaiKhach(item.value)}
                                    />
                                </View>
                                <View>
                                    <Text style={{color: 'white', fontSize: 18}}>Số lượng khách</Text>
                                    <NumericInput
                                        containerStyle={{backgroundColor: 'white'}}
                                        value={soLuongKhach}
                                        totalHeight={40}
                                        onChange={(value) => _handleSoluongKhach(value)}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity 
                                onPress={() => {
                                    toggleModalInfo();
                                    toggleModal();
                                    _handleHaveInfo();
                                   _postReservation();
                                }}
                                style={{
                                    alignSelf: 'center', 
                                    backgroundColor: colors.primary,
                                    paddingTop: 12,
                                    paddingBottom: 12,
                                    paddingLeft: 80,
                                    paddingRight: 80,
                                    borderRadius: 20,
                                    marginTop: 20
                                }}
                            >
                                <Text style={{color: 'white', fontSize: 16}}>XÁC NHẬN</Text>
                            </TouchableOpacity>
                    </View>
            </Modal>
        </View>
    )
}
