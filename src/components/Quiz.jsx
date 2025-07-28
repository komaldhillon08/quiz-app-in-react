import { useCallback, useState } from "react";
// import the question file 
import QUESTIONS from "../questions.js"
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    // this is show the questopn and answers in display 
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;



    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectAnswer) {
            setUserAnswers((prevUserAnswer) => {
                return [...prevUserAnswer, selectAnswer]

            });
        }, [])

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null)
    }, [handleSelectAnswer])


    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />
    }


    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}