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
  const [hoveredCard, setHoveredCard] = useState(null);
  const SECTION_ID = `${sectionTitle}-section`;

  useEffect(() => {
    onInitial(SECTION_ID);
  }, []);

  return (
    <section id={SECTION_ID} className="scroll-mt-16 lg:scroll-mt-24">
      {/* Section Header: สไตล์ HUD ของ Game Engine */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-cyan-400 font-mono text-sm font-semibold">//</span>
        <h2 className="text-lg font-mono font-bold tracking-wider text-white uppercase">
          {sectionTitle}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
      </div>

      {/* Card Items: กล่องเควสต์/โปรเจกต์สไตล์ Sci-Fi Glassmorphism */}
      <div className="space-y-6">
        {data.map(
          (
            {
              date = "",
              title = "",
              link = "",
              materials = [],
              description = [],
              skill = [],
              picture = "",
            },
            index
          ) => {
            const cardKey = `${SECTION_ID}-${index}`;
            const isHovered = hoveredCard === cardKey;

            return (
              <div
                key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "")}`}
                onMouseEnter={() => setHoveredCard(cardKey)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/80 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] hover:-translate-y-1 grid grid-cols-1 md:grid-cols-[32%_68%] gap-4`}
              >
                {/* คอลัมน์ซ้าย: วันที่ (Date badge) และรูปภาพตัวอย่างเกม/เว็บ (Picture) */}
                <div className="flex flex-col gap-3">
                  <FormattedDate isHighLight={isHovered}>{date}</FormattedDate>
                  <Picture picture={picture} title={title} />
                </div>

                {/* คอลัมน์ขวา: ชื่อโปรเจกต์, ลิงก์ Materials, รายละเอียด และ Tags ทักษะ */}
                <div className="flex flex-col gap-3">
                  <TitleLink isHighLight={isHovered} title={title} link={link} />

                  {materials.length > 0 && (
                    <div className="flex items-center gap-3 text-lg">
                      {materials.map((e, i) => (
                        <Material key={`${e.link || i}-material-${i}`} icon={e.type} link={e.link} />
                      ))}
                    </div>
                  )}

                  <div className="space-y-1.5">
                    {description.map((desc, i) => (
                      <Description key={`${i}-description`} description={desc} />
                    ))}
                  </div>

                  <div className="mt-2">
                    {skill.map((techList, i) => (
                      <Tech key={`${i}-skill`} isHighLight={isHovered} data={techList} />
                    ))}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default ContentContainer;
