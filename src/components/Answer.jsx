import { useRef } from "react";
export default function Answer({
    answers,
    selectedAnswer,
    answerState,
    onSelect }) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return (
        <>
            <ul id="answers">
                {shuffledAnswers.current.map((answer) => {
                    const isSelected = selectedAnswer === answer
                    let cssClass = "";

                    if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                        cssClass = answerState
                    }
                    if (answerState === 'answered' && isSelected) {
                        cssClass = "selected"
                    }
                    return (
                        <li key={answer} className="answer">
                            <button
                                onClick={() => onSelect(answer)}
                                className={cssClass}>{answer}
                                {/* disabled={answerState !== ""} */}
                            </button>
                        </li>
                    )
                }
                )}
            </ul>
        </>
    )
}