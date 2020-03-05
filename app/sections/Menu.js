import React from "react";
import {View, StyleSheet} from "react-native";
import {MenuButton} from "../components/MenuButton";

export const Menu = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.buttonRow}>
            <MenuButton text={"LESSONS"} callback={() => navigation.navigate("LessonsRT")}/>
            <MenuButton text={"REGISTER"} callback={() => navigation.navigate("RegisterRT")}/>
        </View>
        <View style={styles.buttonRow}>
            <MenuButton text={"BLOG"} callback={() => navigation.navigate("BlogRT")}/>
            <MenuButton text={"CONTACT"} callback={() => navigation.navigate("ContactRT")}/>
        </View>
        <View style={styles.buttonRow}>
            <MenuButton text={"QUIZ"}callback={() => navigation.navigate("QuizRT")}/>
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
