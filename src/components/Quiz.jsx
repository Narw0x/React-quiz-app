import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompeteImg from "../assets/quiz-complete.png"

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]); 

    const activeQuestion = userAnswers.length;
    const quizIsCompleted = activeQuestion === QUESTIONS.length;
    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((previosAnswers) => {
            return [...previosAnswers, selectedAnswer];
        });
    }

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