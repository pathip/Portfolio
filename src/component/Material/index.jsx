import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({ icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-slate-400 transition-all duration-200 hover:text-cyan-400 hover:scale-110 focus:outline-none"
      aria-label="Project Repository"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default Material;
