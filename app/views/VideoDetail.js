import React from 'react';
import {View, Text} from "react-native";

export const VideoDetail = ({route: {params: {ytubeId}}}) => (
    <View style={{paddingTop: 40}}>
        <Text>{ytubeId}</Text>
    </View>
);
