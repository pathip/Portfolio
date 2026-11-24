import ContentContainer from "../../component/ContentContainer";
import About from "../About";
import { data as experienceData } from "../../content/experience"
import { data as projectData } from "../../content/project"
import Footer from "../Footer";
import { motion } from "framer-motion";

const RightSection = ({ onInitial }) => {
  return (
    <div className="flex flex-col gap-y-16 lg:gap-y-24 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <About
          title="About"
          onInitial={onInitial}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ContentContainer
          onInitial={onInitial}
          title="Experience"
          data={experienceData}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ContentContainer
          onInitial={onInitial}
          title="Project"
          data={projectData}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Footer />
      </motion.div>
    </div>
  )
}

export default RightSection;
