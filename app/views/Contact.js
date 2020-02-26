import React from "react";
import {View, StyleSheet} from "react-native";
import {Header} from "react-native/Libraries/NewAppScreen";

export class Contact extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Header message="Press to Login"/>
                <Text style={{flex: 8}}>The contact form will got here</Text>
                <Text style={{flex: 6}}>More contact form will got here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
