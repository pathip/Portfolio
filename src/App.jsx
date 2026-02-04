import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LeftSection from './section/LeftSection'
import RightSection from './section/RightSection'
import './App.css'
import { useState, useEffect, useCallback } from 'react'

function App() {
  const [sectionIds, setSectionIds] = useState([]);
  const [navbarItems, setNavbarItems] = useState([]);
  const [currentSection, setCurrentSection] = useState("");

  const addSectionIds = (sectionId) => {
    const elementId = document.getElementById(sectionId).id;
    setSectionIds((prev) => [...new Set([...prev, elementId])]);

    const elementTitle = document.getElementById(sectionId).childNodes[0].textContent;
    const obj = { title: elementTitle, sectionId: elementId };

    setNavbarItems((prev) => {
      if (prev.findIndex((e) => e.title === obj.title) === -1) {
        return [...prev, obj];
      }
      return prev;
    });
  };

  const handleScroll = useCallback(() => {
    for (let index = 0; index < sectionIds.length; index++) {
      const element = sectionIds[index];
      const elOffsetTop = document.getElementById(element).getClientRects()[0].y;
      const height = document.getElementById(element).getClientRects()[0].height * 0.5;
      const viewHeight = window.innerHeight * 0.3;
      if (elOffsetTop <= 0) {
        if (elOffsetTop + height >= viewHeight) {
          setCurrentSection(element);
        }
      }
      else if (elOffsetTop > 0 && elOffsetTop < viewHeight) {
        setCurrentSection(element);
      }
    }
  }, [sectionIds]);

  useEffect(() => {
    if (sectionIds.length > 0) {
      setCurrentSection(sectionIds[0]);
    }

  }, [sectionIds]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className='mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]'>
      <LeftSection navbarItems={navbarItems} currentSection={currentSection} />
      <RightSection onInitial={addSectionIds} />
    </div>
  )
}

export default App
