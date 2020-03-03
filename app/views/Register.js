import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage
} from 'react-native';

export const Register = ({navigation}) => {
    const [username, setUsername] = React.useState('');
    const [passwrd, setPasswrd] = React.useState('');
    const [passwrdConfirm, setPasswrdConfirm] = React.useState('');

    const cancelRegister = () => {
        Alert.alert('Registration cancelled');
        navigation.navigate('HomeRT');
    };

    const registerAccount = () => {
        if (!username) Alert.alert('Please enter a username');
        else if (passwrd !== passwrdConfirm) Alert.alert('Passwords do not match!');
        else AsyncStorage.getItem(username, (err, result) => {
                if (result !== null) Alert.alert(`${username} already exists`);
                else {
                    AsyncStorage.setItem(username, passwrd, (err, result) => {
                        Alert.alert(`${username} account created`);
                        navigation.navigate('HomeRT');
                    })
                }
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Register Account</Text>

            <TextInput style={styles.inputs}
                       onChangeText={(text) => setUsername(text)}
                       value={username}
                       underlineColorAndroid={'gray'}
            />
            <Text style={styles.label}>Enter Username</Text>

            <TextInput style={styles.inputs}
                       onChangeText={(text) => setPasswrd(text)}
                       value={passwrd}
                       secureTextEntry={true}
                       underlineColorAndroid={'gray'}
            />
            <Text style={styles.label}>Enter Password</Text>
            <TextInput style={styles.inputs}
                       onChangeText={(text) => setPasswrdConfirm(text)}
                       value={passwrdConfirm}
                       secureTextEntry={true}
                       underlineColorAndroid={'gray'}
            />
            <Text style={styles.label}>Confirm Password</Text>

            <TouchableHighlight onPress={registerAccount} underlayColor='#31e981' underlayColor={'#31e981'}>
                <Text style={styles.buttons}>
                    Register
                </Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={cancelRegister} underlayColor='#31e981'>
                <Text style={styles.buttons}>
                    Cancel
                </Text>
            </TouchableHighlight>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
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
    buttons: {
        marginTop: 15,
        fontSize: 16,
        backgroundColor: 'lightblue',
        padding: 10
    },
    labels:{
        paddingBottom: 10
    }
});
