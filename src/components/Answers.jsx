import { useRef } from "react";

export default function Answers({ answer, answerState, onSelect, selectedAnswer}) {
    const shuffledAnswer = useRef();

    if(!shuffledAnswer.current){
        shuffledAnswer.current = [...answer];
        shuffledAnswer.current.sort(() => Math.random() - 0.5); 
     }
    return (
        <ul id="answers">
            {shuffledAnswer.current.map( answer => {
                const isSelected = selectedAnswer === answer;
                let CssClasses = '';
                if(answerState === 'answered' && isSelected){
                    CssClasses = 'selected';
                }else if((answerState === 'correct' || answerState === 'wrong')  && isSelected){
                    CssClasses = answerState;
                }
            
            return(
                <li key={answer} className="answer">
                    <button onClick={() => onSelect(answer)} className={CssClasses} disabled={answerState !== ''}>
                        {answer}
                    </button>
                </li>
            )})}
        </ul>
    );
}