import { useCallback, useState } from "react";
// import the question file 
import QUESTIONS from "../questions.js"
import quizCompleteImg from "../assets/quiz-complete.png"
import Question from "./Question.jsx";

export default function Quiz() {


    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState("")

    // this is show the questopn and answers in display 
    // const activeQuestionIndex = userAnswers.length;
    const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


    // this function using the user click the answer   
    /*  function handleSelectAnswer(selectAnswer) {
         setUserAnswers((prevUserAnswer) => {
             return [...prevUserAnswer, selectAnswer]
         });
     } */

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectAnswer) {

            setAnswerState("answered")

            setUserAnswers((prevUserAnswer) => {
                return [...prevUserAnswer, selectAnswer]

            });

            setTimeout(() => {
                //  const correctAnswer = QUESTIONS[activeQuestionIndex].correctAnswer;
                // console.log("settimeout check 1");

                if (selectAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                    // console.log("check >>>>>>>>> if 2");
                    setAnswerState("correct")
                } else {
                    // console.log("check >>>>>>>>> else 2");
                    setAnswerState("wrong")
                }
                setTimeout(() => {
                    // console.log("settimeout check 2");
                    setAnswerState("")

                }, 2000);

            }, 1000);


        }, [activeQuestionIndex])

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


    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                questionText={QUESTIONS[activeQuestionIndex].text}
                answers={QUESTIONS[activeQuestionIndex].answers}
                onSelectAnswer={handleSelectAnswer}
                answerState={answerState}
                selectAnswer={userAnswers[userAnswers.length - 1]}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}