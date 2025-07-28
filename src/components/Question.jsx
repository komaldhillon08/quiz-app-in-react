import QuestionTimer from "./questionTimer"
import Answer from "./Answer"
import { useState } from "react"
import QUESTIONS from "../questions.js"
export default function Question({
    onSelectAnswer,
    onSkipAnswer,
    index

}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        inCorrect: null
    });
    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            inCorrect: null
        })
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                inCorrect: QUESTIONS[index].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000);
        }, 1000);
    }
    let answerState = "";
    if (answer.selectedAnswer && answer.inCorrect !== null) {
        answerState = answer.inCorrect ? "correct" : "wrong"
    } else if (answer.selectedAnswer) {
        answerState = "answered"
    }
    return (
        <div className="quiz">
            <div id="question">
                <QuestionTimer
                    timeout={10000}
                    onTimeout={onSkipAnswer}
                />
                <h2>{QUESTIONS[index].text}</h2>
                <Answer
                    answers={QUESTIONS[index].answers}
                    selectedAnswer={answer.selectedAnswer}
                    answerState={answerState}
                    onSelect={handleSelectAnswer}

                />
            </div>
        </div>
    )
}