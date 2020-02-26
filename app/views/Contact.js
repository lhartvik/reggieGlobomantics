import React from "react";
import {View, StyleSheet, Text, TextInput, TouchableHighlight, Alert} from "react-native";
import {Header} from "../sections/Header";

export const Contact = (props) => {

    const [msg, setMsg] = React.useState({text: 'Enter message'});
    const [name, setName] = React.useState('Enter name');
    const [email, setEmail] = React.useState('Enter your Email Address');

    const clearFields = () => {
        setName('');
        setMsg({text: ''});
        setEmail('');
    }

    const sendMessage = (name, msg, nav) => {
        Alert.alert(name, msg.text);
        nav.goBack();
    }

    return (
        <View style={styles.container}>
            <Header message="Press to Login"/>
            <Text style={styles.heading}>Contact Us</Text>
            <TextInput style={styles.inputs}
                       onChangeText={(text) => setName(text)}
                       value={name}/>
            <TextInput style={styles.multiInput}
                       onChangeText={(text) => setMsg({text})}
                       value={msg.text}
                       multiline={true}
                       numberOfLines={4}/>
            <TextInput style={styles.inputs}
                       onChangeText={(text) => setEmail(text)}
                       value={email}/>
            <TouchableHighlight onPress={() => sendMessage(name, msg, props.navigation)} underlayColor='#31e981'>
                <Text style={styles.buttons}>
                    Send Message
                </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={clearFields} underlayColor='#31e981'>
                <Text style={styles.buttons}>
                    Reset Form
                </Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    },
    multiInput: {
        flex: 2,
        width: '90%',
        paddingTop: 20
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    }
});
