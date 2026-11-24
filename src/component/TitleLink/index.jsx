import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TitleLink = ({ isHighLight, title, link }) => {
  if (!link) {
    return (
      <h3 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
        {title}
      </h3>
    );
  }

  return (
    <h3 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 focus:outline-none"
      >
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faArrowRight}
          className={`text-xs -rotate-45 transition-transform duration-300 ${isHighLight
              ? "translate-x-1 -translate-y-1 text-cyan-400"
              : "text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            }`}
        />
      </a>
    </h3>
  );
};

export default TitleLink;
