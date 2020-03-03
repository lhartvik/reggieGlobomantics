import React from "react";
import {Alert, AsyncStorage, Image, StyleSheet, Text, View} from "react-native";

export const Header = ({rerenderprop, message, navigation}) => {
    const [state, setState] = React.useState({
        isLoggedIn: false,
        loggedUser: false
    });
    const toggleUser = () => {
        if (state.isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                setState({
                    isLoggedIn: false,
                    loggedUser: false
                });
            });
            Alert.alert('User logged out');
        } else {
            navigation.navigate('LoginRT');
        }
    };

    React.useEffect(() => {
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if (result === 'none') console.log('NONE');
            else if (result === null) {
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('Set user to NONE');
                });
            } else {
                setState({
                    isLoggedIn: true,
                    loggedUser: result
                })
            }
        });
    }, [rerenderprop]);

    return (
        <View style={styles.headStyle}>
            <Image
                style={styles.logoStyle}
                source={require("./img/Globo_logo_REV.png")}
            />
            <Text style={styles.headText} onPress={toggleUser}>{state.isLoggedIn ? state.loggedUser : message}</Text>
        </View>
    );
};

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
