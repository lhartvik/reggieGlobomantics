import React from "react";
import {Image, StyleSheet} from "react-native";

export const Hero = () => <Image style={styles.heroImage} source={require("./img/laptop2.jpg")}/>;

const styles = StyleSheet.create({
    heroImage: {
        width: undefined,
        height: undefined,
        flex: 8
    }
});
