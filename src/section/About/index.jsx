import { data } from "../../content/about"
import { useEffect } from "react"

const About = ({ onInitial, title = "" }) => {
  const SECTION_ID = `${title}-section`;

  useEffect(() => {
    onInitial(SECTION_ID);
  }, []);

  return (
    <section className='scroll-mt-16 lg:scroll-mt-24 space-y-4' id={SECTION_ID}>
      {/* HUD Header สไตล์ Game Console / Terminal */}
      <div className="flex items-center gap-2">
        <span className="text-cyan-400 font-mono text-sm font-semibold">//</span>
        <h2 className="text-lg font-mono font-bold tracking-wider text-white uppercase">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
      </div>

      {/* กล่องข้อความสไตล์ Glassmorphic Card สะอาดตาและอ่านง่าย */}
      <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm text-slate-300 leading-relaxed text-sm md:text-base font-sans">
        <p>
          {data.description}
        </p>
      </div>
    </section>
  )
}

export default About;
