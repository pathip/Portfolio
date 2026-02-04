import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TitleLink = ({ isHighLight, title, link }) => {

    if (!link) {
        return (
            <div className={`text-[#E01F1F] ${isHighLight ? "text-[#FA3811]" : ""}`}>
                {title}
            </div>
        )
    }

    return (
        <div className={`text-[#E01F1F] ${isHighLight ? "text-[#FA3811]" : ""}`}>
            <a href={link} target="_blank">
                {title}
                <FontAwesomeIcon className={`text-xs -rotate-45 transition-all ${isHighLight ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
            </a>
        </div>
    )
}

export default TitleLink;