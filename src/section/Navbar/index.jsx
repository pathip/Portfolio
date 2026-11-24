import { useState } from "react";

const Navbar = ({ navbarItems, currentSection }) => {
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className='hidden lg:flex flex-col gap-4 font-mono text-xs tracking-widest uppercase'>
      {navbarItems.map((e, i) => {
        const isActive = currentSection === e.sectionId;
        const indexStr = String(i + 1).padStart(2, '0');

        return (
          <button
            key={`nav-${e.title}-${i}`}
            onClick={() => handleClick(e.sectionId)}
            className="group flex items-center gap-3 text-left transition-all py-1.5 focus:outline-none"
          >
            {/* เส้น Indicator ที่จะยาวขึ้นและเปลี่ยนเป็นสีฟ้าสว่างเมื่อเลือกเมนูนี้ */}
            <span
              className={`h-[2px] transition-all duration-300 ${
                isActive
                  ? "w-12 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  : "w-5 bg-slate-700 group-hover:w-10 group-hover:bg-slate-400"
              }`}
            />

            {/* เลขลำดับ 01, 02 สไตล์ Terminal/HUD */}
            <span
              className={`transition-colors duration-300 ${
                isActive ? "text-cyan-400 font-bold" : "text-slate-600 group-hover:text-slate-400"
              }`}
            >
              {indexStr}
            </span>

            {/* ชื่อหัวข้อเมนู */}
            <span
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-white font-bold tracking-wider"
                  : "text-slate-400 group-hover:text-slate-200"
              }`}
            >
              {e.title}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
