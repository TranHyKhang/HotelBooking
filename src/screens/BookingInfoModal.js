import React, {useState} from 'react'
import { ScrollView,View, Text, Button, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import {useTheme} from 'react-native-paper';
import TextInputInfo from '../components/TextInputInfo';

export default function BookingInfoModal({toggleModalInfo, isModalInfoVisible, toggleModalSuccess}) {
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userCMND, setUserCMND] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const {colors} = useTheme(); 
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
                            <TouchableOpacity 
                                onPress={() => {
                                    toggleModalInfo();
                                    toggleModalSuccess();
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
