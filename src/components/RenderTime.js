import React from 'react';
import {View, Text, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const RenderTime = ({dateTime}) => {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>12:00</Text>
            <Text>{dateTime.getDate() +'/'+ dateTime.getMonth() + '/' + dateTime.getFullYear()}</Text>
        </View>
    )
}

export default RenderTime;