import quizCompleteImg from "../assets/quiz-complete.png"
import QUESTIONS from "../questions.js"

export default function Summary({ userAnswers }) {
    return (

        <div id="summary">
            <img src={quizCompleteImg} alt="quiz win" />
            <h2>Quiz Complete ....</h2>
            <div className="summary-stats">
               {/*  <p>
                    <span className="number">10%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">10%</span>
                    <span className="text">answered inCorrect</span>
                </p>
                <p>
                    <span className="number">10%</span>
                    <span className="text">answered correct</span>
                </p> */}

                <ol>

                    {userAnswers.map((answer , index) => {
                        let cssClase = 'user-answer' ;

                        if (answer === null) {
                            cssClase += "skipped"
                        }else if (answer === QUESTIONS[index].answers[0]){
                            cssClase += "correct"
                        }else {
                            cssClase += "wrong"
                        }

                        return (
                            <li key={answer}>
                                <h3>{index + 1}</h3>
                                <p className="question">{QUESTIONS[index].text}</p>
                                <p className={cssClase}>{answer ?? "skiped"}</p>
                            </li>
                        )
                    })}


                </ol>
            </div>

        </div>
    )
}