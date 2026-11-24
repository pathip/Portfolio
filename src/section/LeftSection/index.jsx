import Contact from "../Contact"
import Header from "../Header"
import Navbar from "../Navbar"

const LeftSection = ({ navbarItems, currentSection }) => {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col gap-y-10">
        <Header />
        <Navbar navbarItems={navbarItems} currentSection={currentSection} />
      </div>
      <div className="mt-8 lg:mt-0">
        <Contact />
      </div>
    </div>
  )
}

export default LeftSection;
