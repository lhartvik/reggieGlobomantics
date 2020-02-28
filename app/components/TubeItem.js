import React from 'react';
import {Image, Text, View, TouchableWithoutFeedback} from "react-native";

export const TubeItem = ({id, title, imageSrc}) => {
    const onPress = () => console.log(id);
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{paddingTop: 20, alignItems: 'center'}}>
                <Image style={{width: '100%', height: 200}}
                       source={{uri: imageSrc}}/>
                <Text>
                    {title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}