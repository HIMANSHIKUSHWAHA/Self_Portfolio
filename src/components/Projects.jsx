import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the hook

// Variants for Framer Motion
const bounceInVariant = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1.2,  // Adjust for a slower bounce effect
    },
  },
};

const slideInFromLeftVariant = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 }, // Negative x for coming from left
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5, // Increased duration for slower animation
      delay: delay,
      ease: "easeInOut", // Smooth easing
    },
  },
});

const slideInFromRightVariant = (delay = 0) => ({
  hidden: { x: 100, opacity: 0 }, // Positive x for coming from right
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5, // Increased duration for slower animation
      delay: delay,
      ease: "easeInOut", // Smooth easing
    },
  },
});

const Projects = () => {
  const { ref: sectionRef, inView: isInView } = useInView({ triggerOnce: true, threshold: 0.1 }); // Setting threshold for visibility

  return (
    <div ref={sectionRef} className='border-neutral-900 pb-4'>
      {/* Bouncing Projects Title */}
      <motion.h1
        className='my-8 text-center text-5xl'
        variants={bounceInVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}  // Animation triggers on scrolling into view
      >
        PROJECTS
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:wrap lg:justify-center'>
            {/* Image sliding from left */}
            <motion.div
              className='w-full lg:w-1/4'
              variants={slideInFromLeftVariant(0.3)}  // Slight delay for the image
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}  // Animation happens when in view
            >
              <img 
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className='mb-6 rounded'
              />
            </motion.div>

            {/* Project content and technologies sliding from right */}
            <motion.div
              className='w-full max-w-xl lg:w-3/4'
              variants={slideInFromRightVariant(0.5)}  // Slide content from right with delay
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}  // Animation happens when in view
            >
              <h6 className='mb-2 font-semibold uppercase'>
                {project.title}
              </h6>
              <p className='mb-4 text-neutral-400'>
                {project.description}
              </p>
              <div>
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
