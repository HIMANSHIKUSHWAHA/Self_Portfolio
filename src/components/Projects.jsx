import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUpVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1, // Delay based on the index
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const Projects = () => {
  const { ref: sectionRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={sectionRef} className="container mx-auto p-4">
      <motion.h1
        className="my-8 text-center text-5xl"
        variants={fadeInUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0}
      >
        PROJECTS
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="shadow-lg rounded-lg overflow-hidden"
            variants={fadeInUpVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index}
          >
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-xl font-semibold mb-2">
                {project.title}
              </h5>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="mr-2 mb-2 bg-purple-200 text-purple-900 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-white-700">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;