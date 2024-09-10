import React from 'react';
import { FaPython, FaJava, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaLinux, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiScala, SiPostgresql, SiMysql, SiMongodb, SiSnowflake, SiFlutter, SiGoogleanalytics, SiGooglecloud } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiTable, BiSpreadsheet } from "react-icons/bi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'; 
import { motion } from "framer-motion";

const floatVariants = {
  animate: {
    y: [0, -10, 0], // Move up and down
    transition: {
      duration: 4, // Duration of each floating animation cycle (slower for wavy effect)
      repeat: Infinity, // Infinite repeat
      ease: "easeInOut", // Smooth easing
    },
  },
};

const Tech = () => {
  return (
    <div className="pb-16"> 
      <h1 className="my-8 text-center text-5xl">TECHNOLOGIES</h1>  

      {/* Programming Languages */}
      <h2 className="my-8 text-center text-2xl">Programming Languages & Frameworks</h2>  
      <div className="flex flex-wrap items-center justify-center gap-2">  
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <FaPython className="text-4xl text-yellow-400 mb-1" />  
          <p className="text-xs">Python</p>  
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <SiCplusplus className="text-4xl text-blue-600 mb-1" />
          <p className="text-xs">C++</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <FaJava className="text-4xl text-red-600 mb-1" />
          <p className="text-xs">Java</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <SiJavascript className="text-4xl text-yellow-300 mb-1" />
          <p className="text-xs">JavaScript</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <SiScala className="text-4xl text-red-600 mb-1" />
          <p className="text-xs">Scala</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <FaHtml5 className="text-4xl text-orange-600 mb-1" />
          <p className="text-xs">HTML5</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <FaCss3Alt className="text-4xl text-blue-500 mb-1" />
          <p className="text-xs">CSS3</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <FaReact className="text-4xl text-cyan-400 mb-1" />
          <p className="text-xs">React</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <TbBrandNextjs className="text-4xl text-gray-500 mb-1" />
          <p className="text-xs">Next.js</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <FaNodeJs className="text-4xl text-green-500 mb-1" />
          <p className="text-xs">Node.js</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <SiFlutter className="text-4xl text-sky-400 mb-1" />
          <p className="text-xs">Flutter</p>
        </motion.div>
      </div>

      {/* Databases */}
      <h2 className="my-8 text-center text-2xl">Databases</h2>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <SiPostgresql className="text-4xl text-blue-600 mb-1" />
          <p className="text-xs">PostgreSQL</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <SiMysql className="text-4xl text-blue-500 mb-1" />
          <p className="text-xs">MySQL</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <SiMongodb className="text-4xl text-green-500 mb-1" />
          <p className="text-xs">MongoDB</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <SiSnowflake className="text-4xl text-cyan-300 mb-1" />
          <p className="text-xs">Snowflake</p>
        </motion.div>
      </div>

      {/* Visualization Tools */}
      <h2 className="my-8 text-center text-2xl">Visualization Tools & Platforms</h2>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <BiTable className="text-4xl text-orange-500 mb-1" />
          <p className="text-xs">Tableau</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <BiSpreadsheet className="text-4xl text-green-600 mb-1" />
          <p className="text-xs">Power BI</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faFileExcel} className="text-4xl text-green-600 mb-1" />
          <p className="text-xs">Excel</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <SiGooglecloud className="text-4xl text-blue-400 mb-1" />
          <p className="text-xs">Google Cloud</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <SiGoogleanalytics className="text-4xl text-orange-400 mb-1" />
          <p className="text-xs">Google Analytics</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <FaLinux className="text-4xl text-gray-500 mb-1" />
          <p className="text-xs">Linux</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <FaGitAlt className="text-4xl text-red-600 mb-1" />
          <p className="text-xs">Git</p>
        </motion.div>
        <motion.div variants={floatVariants} animate="animate" className="rounded-2xl border-4 border-neutral-800 p-2 text-center flex flex-col items-center justify-center">
          <FaGithub className="text-4xl text-gray-500 mb-1" />
          <p className="text-xs">GitHub</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
