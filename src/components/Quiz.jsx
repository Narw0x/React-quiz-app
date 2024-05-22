import { useCallback, useState } from "react";
import quizCompeteImg from "../assets/quiz-complete.png"
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]); 

    const activeQuestion = userAnswers.length;
    const quizIsCompleted = activeQuestion === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((previosAnswers) => {
            return [...previosAnswers, selectedAnswer];
        });
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
            <Question key={activeQuestion} questionIndex={activeQuestion} onSelectAnswer={handleSelectAnswer} onSkipAnswer={handleSkipQuestion} />
        </div>
    );
}