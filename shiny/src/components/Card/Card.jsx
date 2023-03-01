import "./Card.css"
import DefaultPicture from "../../assets/profile.png"
import PropTypes from "prop-types"

export default function Card ({ label, title, picture }) {
    return (
        <div className="card_main">
            <span>{label}</span>
            <img src={picture} alt="freelance" className="card_img" />
            <span>{title}</span>
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    label: "",
    title: "",
    picture: DefaultPicture,
}