import React from "react";
import {Alert, StyleSheet, Text, View} from "react-native";
import {Header} from "../sections/Header";
import {Hero} from "../sections/Hero";
import {Menu} from "../sections/Menu";

export const Home = ({navigation}) => (
    <View style={styles.container}>
        <Header message="Press to Login"/>
        <Hero/>
        <Menu navigation={navigation}/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
    }
});
