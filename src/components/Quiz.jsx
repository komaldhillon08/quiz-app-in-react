import { useState } from "react";
// import the question file 
import QUESTIONS from "../questions.js"

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    // this is show the questopn and answers in display 
    const activeQuestionIndex = userAnswers.length;


    // this function using the user click the answer   
    function handleSelectAnswer(selectAnswer) {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectAnswer]
        });
    }
    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}