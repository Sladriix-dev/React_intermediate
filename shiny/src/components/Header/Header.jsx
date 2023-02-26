import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
    return (
        <div>
            <nav className="main_nav">
                <Link to="/">Accueil</Link>
                <Link to="/freelances">Freelances</Link>
                <Link to="/results">Results</Link>
                <Link to="/survey">Questionaire</Link>
            </nav>
        </div>
    )
}