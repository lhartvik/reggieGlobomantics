import React from "react";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";

export const Question = ({correctAnswer, answer1, answer2, answer3, answer4, question, scoreUpdate}) => {
    const [state, setState] = React.useState({
        selected: false,
        correct: false
    });

    const chooseAnswer = (ans) => {
        let worth = 25;
        if (ans === correctAnswer) {
            setState({
                selected: true,
                correct: true
            });
            scoreUpdate(0);
        } else {
            setState({
                selected: true
            });
            scoreUpdate(worth);
        }
    }

    return (
        <View style={styles.container}>
             {!state.selected && (
                <View style={styles.container}>
                    <Text style={styles.questionText}>{question}</Text>
                    <TouchableHighlight onPress={() => chooseAnswer('answer1')} underlayColor={'#d3d3d3'}>
                        <Text style={styles.answerText}>
                            {answer1}
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => chooseAnswer('answer2')} underlayColor={'#d3d3d3'}>
                        <Text style={styles.answerText}>
                            {answer2}
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => chooseAnswer('answer3')} underlayColor={'#d3d3d3'}>
                        <Text style={styles.answerText}>
                            {answer3}
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => chooseAnswer('answer4')} underlayColor={'#d3d3d3'}>
                        <Text style={styles.answerText}>
                            {answer4}
                        </Text>
                    </TouchableHighlight>
                </View>
            )}
            {state.selected && state.correct && (
                <View style={styles.correctContainer}>
                    <Text style={styles.questionText}>{question}</Text>
                    <Text style={styles.answerText}>{answer1}</Text>
                    <Text style={styles.answerText}>{answer2}</Text>
                    <Text style={styles.answerText}>{answer3}</Text>
                    <Text style={styles.answerText}>{answer4}</Text>
                    <Text style={styles.answerText}>CORRECT</Text>
                </View>
            )}
            {state.selected && !state.correct && (
                <View style={styles.wrongContainer}>
                    <Text style={styles.questionText}>{question}</Text>
                    <Text style={styles.answerText}>{answer1}</Text>
                    <Text style={styles.answerText}>{answer2}</Text>
                    <Text style={styles.answerText}>{answer3}</Text>
                    <Text style={styles.answerText}>{answer4}</Text>
                    <Text style={styles.answerText}>INCORRECT</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    correctContainer:{
        flex:1,
        paddingTop: 20,
        backgroundColor: '#008000'
    },
    wrongContainer:{
        flex:1,
        paddingTop: 20,
        backgroundColor: '#ff0000'
    },
    questionText:{
        flex: 2,
        padding: 15,
        fontSize: 20
    },
    answerText:{
        flex: 2,
        padding: 15,
        fontSize: 20,
        textAlign: 'center'
    }
});

