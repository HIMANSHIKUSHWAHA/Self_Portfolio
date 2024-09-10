import React, { useState } from 'react';
import TypingEffect from 'react-typing-effect';
import { HERO_CONTENT } from '../constants'; 
import profilePic from '../assets/kevinRushProfile.jpg';
import { motion } from "framer-motion";

const container = (delay, direction = "left") => ({
  hidden: { 
    x: direction === "left" ? -100 : 100, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5
    }
  }
});

const Hero = () => {
  const jobRoles = ["Software Developer", "Analyst", "Pythonist", "Curious Mind", "Passionate Programmer"];
  const [prefix, setPrefix] = useState('A'); 

  const handleTypingChange = (text) => {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    if (vowels.includes(text.charAt(0).toUpperCase())) {
      setPrefix('An');
    } else {
      setPrefix('A');
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:ml-20 lg:items-start">
            {/* 'Hi, I'm' and 'Himanshi Kushwaha' from the left */}
            <motion.h1  
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className="pb-8 sm:pb-10 lg:pb-12 font-thin tracking-tight text-white">
              <span className="block text-xl sm:text-2xl lg:text-4xl">Hi, I'm </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl">Himanshi Kushwaha</span>
            </motion.h1>

            {/* Job role from the left with delay */}
            <motion.span 
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className="text-4xl font-normal text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text mt-2">
              {prefix}{" "}
              <TypingEffect
                text={jobRoles}
                speed={100}
                eraseSpeed={50}
                eraseDelay={1500}
                typingDelay={500}
                className="inline"
                displayTextRenderer={(text) => {
                  handleTypingChange(text); 
                  return text;
                }}
              />
            </motion.span>

            {/* Content part from the left with more delay */}
            <motion.p
              variants={container(1)}
              initial='hidden'
              animate='visible' 
              className='my-4 max-w-xl py-6 font-light tracking'>
              I firmly believe in the philosophy that <strong><em>"With determination and effort, any dream can be achieved." </em></strong> 
              This mindset drives me to continuously learn new technologies and tackle complex, real-world problems. <br /><br />Currently pursuing my Master’s in Computer Science at Indiana University, I am eager to join an innovative organization where I can apply my technical, analytical, and problem-solving skills. Passionate about creating meaningful, user-centered solutions, I thrive on challenges that push me to think critically and creatively, and I am committed to contributing to impactful projects that advance the industry and deliver exceptional results.
            </motion.p>
          </div>
        </div>

        {/* Image coming from the right */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              src={profilePic} alt='Himanshi K Pic' className='rounded-full h-96 w-96 object-cover' 
            /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
