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

export const Login = ({navigation}) => {
    const [username, setUsername] = React.useState('');
    const [passwrd, setPasswrd] = React.useState('');

    const cancelLogin = () => {
        Alert.alert('Login cancelled');
        navigation.navigate('HomeRT');
    };

    const loginUser = () => {
        if (!username) {
            Alert.alert('Please enter a username');
        } else if (!passwrd) {
            Alert.alert('Please enter a pasword');
        } else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if (result !== 'none') {
                    Alert.alert('Someone already logged on');
                    navigation.navigate('HomeRT');
                } else {
                    AsyncStorage.getItem(username, (err, result) => {
                        if (result !== null) {
                            if (result !== passwrd) {
                                Alert.alert('Password incorrect');
                            } else {
                                AsyncStorage.setItem('userLoggedIn', username, (err, result) => {
                                    Alert.alert(`${username} logged in`);
                                    navigation.navigate('HomeRT', username);
                                });
                            }
                        } else {
                            Alert.alert(`No account for ${username}`);
                        }
                    });
                }
            });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>

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

            <TouchableHighlight onPress={loginUser} underlayColor='#31e981' underlayColor={'#31e981'}>
                <Text style={styles.buttons}>
                    Login
                </Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={cancelLogin} underlayColor='#31e981'>
                <Text style={styles.buttons}>
                    Cancel
                </Text>
            </TouchableHighlight>

        </View>
    );
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
    labels: {
        paddingBottom: 10
    }
});

