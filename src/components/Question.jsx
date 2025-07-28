import QuestionTimer from "./questionTimer"
import Answer from "./Answer"

export default function Question({
    questionText,
    answers,
    onSelectAnswer,
    selectAnswer,
    answerState,
    onSkipAnswer

}) {
    return (
        <div className="quiz">
            <div id="question">

                <QuestionTimer
                    timeout={5000}
                    onTimeout={onSkipAnswer}

                />

                <h2>{questionText}</h2>
                <Answer

                    answers={answers}
                    selectedAnswer={selectAnswer}
                    answerState={answerState}
                    onSelect={onSelectAnswer}

                />
            </div>
        </div>
    )
}