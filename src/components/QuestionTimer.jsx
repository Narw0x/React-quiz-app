import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode}) {
    const [timeLeft, setTimeLeft] = useState(timeout);

    useEffect(()=> {
        const timer = setTimeout( onTimeout, timeout);

        return () => clearTimeout(timer);
    }, [timeout, onTimeout])
    


    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTimeLeft) => {
                return prevTimeLeft - 100;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);
    
    

    return(
        <progress id="question-timer" value={timeLeft} max={timeout} className={mode}/>
    );
}