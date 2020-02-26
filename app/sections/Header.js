import React from "react";
import {StyleSheet, Text, View, Platform, Image} from "react-native";

export const Header = ({message}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const toggleUser = () => setIsLoggedIn(!isLoggedIn);
    const display = isLoggedIn ? "Sample User" : message;

    return (
        <View style={styles.headStyle}>
            <Image
                style={styles.logoStyle}
                source={require("./img/Globo_logo_REV.png")}
            />
            <Text style={styles.headText} onPress={toggleUser}>{display}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headText: {
        textAlign: "right",
        color: "#ffffff",
        fontSize: 20,
        flex: 1
    },
    logoStyle: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: "#35605a",
        flex: 1,
        flexDirection: "row"
    }
});
