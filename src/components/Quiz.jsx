import { useCallback, useState } from "react";
import quizCompeteImg from "../assets/quiz-complete.png"
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";

export default function Quiz() {
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]); 

    const activeQuestion = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsCompleted = activeQuestion === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered');

        setUserAnswers((previosAnswers) => {
            return [...previosAnswers, selectedAnswer];
        });

        setTimeout(() => {
            if(selectedAnswer === QUESTIONS[activeQuestion].answers[0]){
                setAnswerState('correct');
            }else{
                setAnswerState('wrong');
            }
            setTimeout(() => {
                setAnswerState('');
            }, 2000);
        }, 1000);
    }, []);

    const handleSkipQuestion = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);


    if(quizIsCompleted){
        return(
            <div id="summary">
                <img src={quizCompeteImg} alt="Quiz is completed" />
                <h2>Quiz is completed</h2>
            </div>
        );
    }
    
    
    return(
        <div id="quiz">
            <Question key={activeQuestion} activeQuestion={activeQuestion} answerState={answerState} userAnswers={userAnswers} handleSelectAnswer={handleSelectAnswer} handleSkipQuestion={handleSkipQuestion} />
        </div>
    );
}