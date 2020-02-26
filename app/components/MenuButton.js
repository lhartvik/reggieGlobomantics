import React from "react";
import {Alert, StyleSheet, Text, TouchableOpacity} from "react-native";

export const MenuButton = ({text, callback}) => {

    const onPress = callback ? callback : (text) => {
        Alert.alert(`You tapped ${text.toLowerCase()}!`, 'It is not implemented though.');
    };

    return (<TouchableOpacity style={styles.buttonStyles} onPress={() => onPress(text)}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonStyles: {
        backgroundColor: "#35605a",
        width: "50%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 18
    }
});
