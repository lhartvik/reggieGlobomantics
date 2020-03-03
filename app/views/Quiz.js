import React from "react";
import {StyleSheet, Text, FlatList, TouchableHighlight, View} from "react-native";
import {QuizData} from '../data/QuizQuestions';
import {Question} from "../sections/Question";

export const Quiz = ({navigation}) => {
    const [state, setState] = React.useState({
        completedQuiz: false,
        incorrect: 0,
        numberOfQuestions: 0,
        questionsAnswered: 0,
        questList: [],
        questLoaded: false,
        totalScore: 100,
    });

    React.useEffect(() => {
            let numQuestions = Array.from(QuizData.questions).length;
            setState({
                ...state,
                numberOfQuestions: numQuestions,
                questList: Array.from(QuizData.questions),
                questLoaded: true
            });
        }, []
    );

    const updateScore = (penalty) => {
        let tempScore = state.totalScore;
        let missed = state.incorrect;
        let questionsTotal = state.numberOfQuestions;
        let questionsDone = state.questionsAnswered;

        let newScore = tempScore - penalty;
        let totalAnswered = questionsDone + 1;
        let totalMissed = penalty ? missed + 1 : missed;

        setState({
            ...state,
            totalScore: newScore,
            incorrect: totalMissed,
            questionsAnswered: totalAnswered
        });

        if (totalAnswered === questionsTotal) {
            setState({
                ...state,
                completedQuiz: true
            });
        }
    };

    const finishQuiz = () => {
        navigation.navigate(
            'FinishRT', {
                score: state.totalScore,
                missed: state.incorrect,
                questions: state.numberOfQuestions
            }
        )
    };

    return (
        <View style={styles.container}>
            {state.questLoaded && (
                <FlatList
                    data={state.questList}
                    renderItem={
                        ({item}) =>
                            <Question
                                question={item.question}
                                answer1={item.answer1}
                                answer2={item.answer2}
                                answer3={item.answer3}
                                answer4={item.answer4}
                                correctAnswer={item.correctAnswer}
                                scoreUpdate={updateScore}
                            />
                    }
                />
            )}
            {!state.completedQuiz && (
                <TouchableHighlight style={styles.disabled}>
                    <Text>Answer all the questions</Text>
                </TouchableHighlight>
            )}
            {state.completedQuiz && (
                <TouchableHighlight onPress={finishQuiz} style={styles.enabled}>
                    <Text>Finished</Text>
                </TouchableHighlight>
            )}
            {!state.questLoaded && (
                <Text>LOADING</Text>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    disabled: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3d3d3',
        height: '10%'
    },
    enabled: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#90ee90',
        height: '10%'
    }
});

