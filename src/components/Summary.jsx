import quizCompleted from '../assets/quiz-complete.png';
import QUESTION from '../questions.js';

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter((answer) => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTION[index].answers[0]);

    const skippedAnswersPercentage = Math.round((skippedAnswers.length / QUESTION.length) * 100);
    const correctAnswersPercentage = Math.round((correctAnswers.length / QUESTION.length) * 100);
    const wrongAnswersPercentage = 100 - skippedAnswersPercentage - correctAnswersPercentage;
    return (
        <div id="summary">
            <img src={quizCompleted} alt="Quiz Completed" />
            <h2>Quiz Finished</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedAnswersPercentage}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswersPercentage}%</span>
                    <span className='text'>asnwered correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswersPercentage}%</span>
                    <span className='text'>asnwered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let className = 'user-answer';
                    if (answer === QUESTION[index].answers[0]) {
                        className += ' correct';
                    } else if (answer !== QUESTION[index].answers[0] && answer !== null) {
                        className += ' wrong';
                    } else if(answer === null){
                        className += ' skipped';
                    }
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className='question-text'>{QUESTION[index].text}</p>
                            <p className={className}>{answer ?? 'Skipped'}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}