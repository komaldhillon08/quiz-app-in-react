import { useCallback, useState } from "react";
// import the question file 
import QUESTIONS from "../questions.js"
import quizCompleteImg from "../assets/quiz-complete.png"
import QuestionTimer from "./questionTimer.jsx";
export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    // this is show the questopn and answers in display 
    const activeQuestionIndex = userAnswers.length;


    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


    // this function using the user click the answer   
    /*  function handleSelectAnswer(selectAnswer) {
         setUserAnswers((prevUserAnswer) => {
             return [...prevUserAnswer, selectAnswer]
         });
     } */

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectAnswer) {

        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectAnswer]
        });
    }, [])

    console.log("+ 1");

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null)
    }, [handleSelectAnswer])


    if (quizIsComplete) {
        return <div id="summary">
            <img src={quizCompleteImg} alt="quiz win" />
            <h2>Quiz Complete ....</h2>
        </div>
    }


    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">

                <QuestionTimer
                    key={activeQuestionIndex}
                    timeout={10000}
                    onTimeout={handleSkipAnswer} />

                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}