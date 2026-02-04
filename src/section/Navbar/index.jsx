import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navs = [
  {
    title: "About",
    sectionId: "About-section",
  },
  {
    title: "Experience",
    sectionId: "Experience-section",
  },
  {
    title: "Project",
    sectionId: "Project-section",
  },
  {
    title: "Article",
    sectionId: "Article-section",
  },
]

const Navbar = ({ navbarItems, currentSection }) => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className='hidden lg:flex flex-col gap-3 font-semibold'>
      {navbarItems.map((e, i) => (
        <div
          key={`nav-${e.title}-${i}`}
          onClick={() => handleClick(e.sectionId)}
          onMouseEnter={() => setIsMouseEnter((prev) => ({ ...prev, [e.title]: true }))}
          onMouseLeave={() => setIsMouseEnter((prev) => ({ ...prev, [e.title]: false }))}
          className="cursor-pointer flex items-center"
        >
          <div>
            {isMouseEnter[e.title] || currentSection === e.sectionId ? <FontAwesomeIcon className="text-[#E01F1F]" icon={faArrowRight} /> : null}
          </div>
          <div className={`${currentSection === e.sectionId || isMouseEnter[e.title] ? "translate-x-2" : ""} duration-500 ease-out`}>{e.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Navbar;