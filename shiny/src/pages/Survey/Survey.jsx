import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Survey() {
    const { questionNumber } = useParams()
    let questionNumberInt = parseInt(questionNumber, 10)
    if (isNaN(questionNumberInt)) {
        questionNumberInt = 0
    }
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt -1
    const nextQuestionNumber = questionNumberInt + 1

    return (
        <div>
            <h1>Questionnaire</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
            {questionNumberInt === 10 ? (
                <Link to="/results">Résultats</Link>
            ) : (
                <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
            )}
        </div>
    )
}