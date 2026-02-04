import Contact from "../Contact"
import Header from "../Header"
import Navbar from "../Navbar"

const LeftSection = ({ navbarItems, currentSection }) => {
  return (
    <div className="px-5 mb-10 lg:mb-0">
      <div className='lg:sticky lg:top-14 grid gap-y-5 lg:grid-rows-[1fr_2fr_20%] lg:h-[86vh]'>
        <Header />
        <Navbar navbarItems={navbarItems} currentSection={currentSection} />
        <Contact />
      </div>
    </div>
  )
}
export default LeftSection;