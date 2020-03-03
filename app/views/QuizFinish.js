import React from "react";
import {StyleSheet, Text, FlatList, TouchableHighlight, View} from "react-native";

export const Finish = ({route, navigation}) => {
    const exitQuiz = () => {
        navigation.navigate('HomeRT')
    };

    let userScore = route.params?.score ?? 'Error - No score returned';
    let questionsMissed = route.params?.missed ?? 'Error - No missed questions';
    let totalWuestions = route.params?.questions ?? 'Error - No questions returned';

    return (
        <View style={styles.container}>
            <Text>Your quiz score was {userScore}</Text>
            <Text>You missed on {questionsMissed} out of {totalWuestions} questions</Text>
            <TouchableHighlight onPress={exitQuiz} style={styles.button}>
                <Text>Finish quiz</Text>
            </TouchableHighlight>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%'
    }
});
