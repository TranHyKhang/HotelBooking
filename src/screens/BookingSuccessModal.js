import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo'
import {useTheme} from 'react-native-paper'

export default function BookingSuccessModal({isModalSuccessVisible, toggleModalSuccess}) {
    const {colors} = useTheme();
    return (
        <View>
            <Modal
                isVisible={isModalSuccessVisible}
            >
                <View 
                    style={{
                        flex: 0.3, 
                        backgroundColor: 'white', 
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text 
                        style={{
                            fontSize: 24, 
                            fontWeight: 'bold', 
                            color: colors.primary,
                            marginBottom: 20
                        }}
                    >
                        ĐẶT PHÒNG THÀNH CÔNG
                    </Text>
                    <TouchableOpacity 
                        style={{
                            width: 65, 
                            height: 65,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 100,
                            borderWidth: 2,
                            borderColor: colors.primary
                        }}
                        onPress={toggleModalSuccess}
                    >
                        <Entypo name="check" size={50} style={{color: colors.primary}}/>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}
