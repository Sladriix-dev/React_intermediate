import { useContext } from "react"
import { SurveyContext } from "../../utils/context"

export default function Results() {
    const { answers } = useContext(SurveyContext)
    console.log(answers)

    return (
        <div>
            <h1>Results</h1>
        </div>
    )
}