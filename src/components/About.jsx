import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import mikeylogo from '../assets/head.png';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    

      <div className="flex flex-col transform scale-135 space-y-4">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Who's Mikey?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a curious software developer with experience in Javascript and
        C++, and expertise in frameworks like React, Node.js, and
        Three.js. 
      </motion.p>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[17px] max-w-3xl leading-[30px]'
      >If I'm being honest, I love building, period. </motion.p>

        <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[17px] max-w-3xl leading-[30px]'
      >Startups, personal projects, viral TikToks,
      Youtube Videos, you name it.  Editing and Coding have given me a medium to design and 
      actualize everything that goes on in that brain of mine. 
      Walk with me, down this page, and lets learn a bit more about myself.</motion.p>
      <img src={mikeylogo} alt='logo' className='w-80 h-90 absolute right-36 -top-20 -z-50' />
      </div>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");