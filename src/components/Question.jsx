import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';

export default function Question({activeQuestion, answerState, userAnswers, handleSelectAnswer, handleSkipQuestion}) {
    return(
        <div id="question">
            <QuestionTimer  timeout={10000} onTimeout={handleSkipQuestion} activeQuestion={activeQuestion} />
            <h2>{QUESTIONS[activeQuestion].text}</h2>
            <Answers  answer={QUESTIONS[activeQuestion].answers} answerState={answerState} handleSelectAnswer={handleSelectAnswer} selectedAnswer={userAnswers[userAnswers.length -1]}/>
        </div>
    )
}