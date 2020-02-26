import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Header} from "../sections/Header";
import {Hero} from "../sections/Hero";
import {Menu} from "../sections/Menu";

export class Home extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header message="Press to Login"/>
                <Hero/>
                <Menu navigate = {navigate}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
    }
});
