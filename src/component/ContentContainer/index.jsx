import { useState, useEffect } from "react";
import FormattedDate from "../FormattedDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";

const ContentContainer = ({
    onInitial,
    title: sectionTitle = "",
    data = [],
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const SECTION_ID = `${sectionTitle}-section`;

    useEffect(() => {
        onInitial(SECTION_ID);
    }, [])

    return (
        <div id={SECTION_ID} className="scroll-mt-14">
            <div className='text-xl text-blue-600 font-medium px-2'>{sectionTitle}</div>
            {
                data.map(({
                    date = "",
                    title = "",
                    link = "",
                    materials = [],
                    description = [],
                    skill = [],
                    picture = "",
                }, index) => (
                    <div
                        key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "")}`}
                        className={`bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-[30%_70%] transition-all duration-300 hover:shadow-lg hover:scale-105 ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-gradient-to-r from-blue-50 to-indigo-50" : ""}`}
                        onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
                        onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
                    >
                        <div>
                            <FormattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormattedDate>
                            <Picture picture={picture} title={title} />
                        </div>
                        <div className="grid gap-y-4">
                            <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />
                            {
                                materials.length > 0 ?
                                    <div className="flex gap-4 text-xl item-center">
                                        {
                                            materials.map((e, i) => (
                                                <Material key={`${e}-material-${i}`} icon={e.type} link={e.link} />
                                            ))
                                        }
                                    </div>
                                    : null
                            }
                            {
                                description.map((e, i) => (
                                    <Description key={`${e}-description-${i}`} description={e} />
                                ))
                            }
                            {
                                skill.map((e, i) => (
                                    <Tech key={`${e}-skill-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ContentContainer;