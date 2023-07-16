import React from 'react';
import {Tilt} from "react-tilt";

import { motion } from 'framer-motion';

import {styles} from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useState } from 'react';
const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
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
  ) 
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>ABOUT ME</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I am Computer Science Engineering Graduate & A skilled software developer with good knowledge of JavaScript, Typescript & experience in frameworks or libraries like Express, Recat, and Next js. I am a Quick Learner and Worked in a startup where collaborated closely with clients to create solutions that solve real-world problems.
      </motion.p>
      <div className='btnBox flex mt-4'> 
        <a href='/Resume.pdf' title='Resume' download className='border-2 border-[#915eff] rounded-md py-4 px-6 mx-3 hover:bg-tertiary hover:font-bold '>
        Download Resume</a>
        <a href='#contact' className='border-2 border-[#915eff] rounded-md py-4 px-6 mx-3 hover:bg-tertiary hover:font-bold '>
        Hire me</a>
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about"); 