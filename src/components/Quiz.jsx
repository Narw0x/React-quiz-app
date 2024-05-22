import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompeteImg from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer.jsx";

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
    const shuffledQuestions = [...QUESTIONS[activeQuestion].answers].sort(() => Math.random() - 0.5);
    return(
        <div id="quiz">
            <div id="question">
                <QuestionTimer key={activeQuestion} timeout={10000} onTimeout={handleSkipQuestion} />
                <h2>{QUESTIONS[activeQuestion].text}</h2>
                <ul id="answers">
                    {shuffledQuestions.map( answer => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
        
        
    );
}