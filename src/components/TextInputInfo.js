import React from 'react'
import { View, Text } from 'react-native'
import {TextInput} from 'react-native-paper';

export default function TextInputInfo({lable, value, _handleText}) {
    return <TextInput
        style={{backgroundColor: 'white', marginBottom: 10}}
        label={lable}
        value={value}
        onChangeText={text => _handleText(text)}
    />
}
