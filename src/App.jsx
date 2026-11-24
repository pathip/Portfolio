import LeftSection from './section/LeftSection'
import RightSection from './section/RightSection'
import './App.css'
import { useState, useEffect, useCallback } from 'react'

function App() {
  const [sectionIds, setSectionIds] = useState([]);
  const [navbarItems, setNavbarItems] = useState([]);
  const [currentSection, setCurrentSection] = useState("");
  // พิกัดเมาส์สำหรับสร้างเอฟเฟกต์ไฟฉาย/Spotlight ตามเมาส์ (Game-style ambient lighting)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const addSectionIds = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    
    const elementId = element.id;
    setSectionIds((prev) => [...new Set([...prev, elementId])]);

    // หา title จาก element
    const elementTitle = element.childNodes[0]?.textContent || sectionId;
    const cleanTitle = elementTitle.replace(/^\/\/\s*\d*\.?\s*/, '').trim(); // ลบ prefix // 01. ออกถ้ามี
    const obj = { title: cleanTitle || elementTitle, sectionId: elementId };

    setNavbarItems((prev) => {
      if (prev.findIndex((e) => e.sectionId === obj.sectionId) === -1) {
        return [...prev, obj];
      }
      return prev;
    });
  };

  const handleScroll = useCallback(() => {
    for (let index = 0; index < sectionIds.length; index++) {
      const element = sectionIds[index];
      const el = document.getElementById(element);
      if (!el) continue;
      
      const rect = el.getBoundingClientRect();
      const elOffsetTop = rect.top;
      const height = rect.height * 0.5;
      const viewHeight = window.innerHeight * 0.3;
      
      if (elOffsetTop <= 0) {
        if (elOffsetTop + height >= viewHeight) {
          setCurrentSection(element);
        }
      } else if (elOffsetTop > 0 && elOffsetTop < viewHeight) {
        setCurrentSection(element);
      }
    }
  }, [sectionIds]);

  useEffect(() => {
    if (sectionIds.length > 0 && !currentSection) {
      setCurrentSection(sectionIds[0]);
    }
  }, [sectionIds, currentSection]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className='relative min-h-screen bg-[#0b0f19] text-slate-300 cyber-grid overflow-hidden'>
      {/* Spotlight Effect แสงเรืองรองเคลื่อนที่ตามเคอร์เซอร์เมาส์ */}
      <div
        className='pointer-events-none fixed inset-0 z-30 transition duration-300'
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.08), transparent 80%)`,
        }}
      />

      {/* แสง Ambient Glow Background อ่อนๆ ที่มุมจอ ซ้ายบน (Cyan) และ ขวาล่าง (Purple/Indigo) */}
      <div className='pointer-events-none fixed -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]' />
      <div className='pointer-events-none fixed top-1/2 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]' />

      {/* เนื้อหาหลักของหน้าเว็บ (Layout สองคอลัมน์: ซ้ายตรึง / ขวาเลื่อน) */}
      <div className='relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-20 lg:py-0'>
        <div className='grid gap-y-12 lg:grid-cols-[45%_55%] lg:gap-x-12'>
          <LeftSection navbarItems={navbarItems} currentSection={currentSection} />
          <RightSection onInitial={addSectionIds} />
        </div>
      </div>
    </div>
  )
}

export default App
