import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";  // Import the Intersection Observer

// Variants for Framer Motion
const slideInFromLeftVariant = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },  // Negative x for coming from left
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,  // Increased duration for slower animation
      delay: delay,
      ease: "easeInOut",  // Smooth easing
    },
  },
});

const slideInFromRightVariant = (delay = 0) => ({
  hidden: { x: 100, opacity: 0 },  // Positive x for coming from right
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,  // Increased duration for slower animation
      delay: delay,
      ease: "easeInOut",  // Smooth easing
    },
  },
});

const Experience = () => {
  // Hook to track when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger the animation once
    threshold: 0.2,     // When 20% of the component is visible
  });

  return (
    <div className="border-neutral-900 pb-4" ref={ref}> {/* Ref for intersection observer */}
      {/* Bouncing Experience Title */}
      <motion.h1
        className="my-8 text-center text-5xl"
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}  // Trigger animation when in view
        transition={{ type: "spring", stiffness: 120, duration: 1.2 }}
      >
        EXPERIENCE
      </motion.h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:wrap lg:justify-center">
            {/* Timeline/Year sliding from left */}
            <motion.div
              className="w-full lg:w-1/4"
              variants={slideInFromLeftVariant(0.3)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}  // Trigger animation when in view
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>

            {/* Company, Role, Description, and Technologies sliding from right */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              variants={slideInFromRightVariant(0.5)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}  // Trigger animation when in view
            >
              <h6 className="mb-2 font-semibold uppercase">
                {experience.company} {/* Capitalized company name */}
              </h6>
              <p className="mb-2 font-medium text-neutral-300">
                {experience.role} {/* Role */}
              </p>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 text-sm bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
