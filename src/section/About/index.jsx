import { data } from "../../content/about"
import { useEffect } from "react"

const About = ({ onInitial,
    title = ""
}) => {

    const SECTION_ID = `${title}-section`;

    useEffect(() => {
        onInitial(SECTION_ID);
    }, []);

    return (
        <div className='space-y-4 scroll-mt-14' id={SECTION_ID}>
            <div className='text-xl text-[#FA3811] font-medium px-2'>{title}</div>
            <div>{data.description}</div>
        </div>
    )
}

export default About;