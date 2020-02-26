import React from "react";
import {View, StyleSheet} from "react-native";
import {MenuButton} from "../components/MenuButton";

export const Menu = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.buttonRow}>
            <MenuButton text={"LESSONS"}/>
            <MenuButton text={"REGISTER"}/>
        </View>
        <View style={styles.buttonRow}>
            <MenuButton text={"BLOG"}/>
            <MenuButton text={"CONTACT"} callback={() => navigation.navigate("ContactRT")}/>
        </View>
        <View style={styles.buttonRow}>
            <MenuButton text={"QUIZ"}/>
            <MenuButton text={"ABOUT"}/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: "#35605a"
    },
    buttonRow: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#ffffff",
        borderBottomWidth: 1
    },
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
