import { useState } from "react";
// import the question file 
import QUESTIONS from "../questions.js"
import quizCompleteImg from "../assets/quiz-complete.png"

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    // this is show the questopn and answers in display 
    const activeQuestionIndex = userAnswers.length;


    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


    // this function using the user click the answer   
    function handleSelectAnswer(selectAnswer) {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectAnswer]
        });
    }

    if (quizIsComplete) {
        return <div id="summary">
            <img src={quizCompleteImg} alt="quiz win" />
            <h2>Quiz Complete ....</h2>
        </div>
    }
    const shuffledAnswer = [QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswer.sort(() => Math.random() - 0.5);

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