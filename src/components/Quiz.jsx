import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";


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
        return <Summary userAnswers={userAnswers} />;
    }
    
    return(
        <div id="quiz">
            <Question key={activeQuestion} questionIndex={activeQuestion} onSelectAnswer={handleSelectAnswer} onSkipAnswer={handleSkipQuestion} />
        </div>
    );
}