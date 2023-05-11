import React from 'react';
import { motion } from 'framer-motion';
import {downArrow} from '../assets';

import {styles} from '../styles';
import { ComputersCanvas } from './canvas';
const Hero = () => {
  return (
    <section className='relative w-full sm:h-[120vh] h-[150vh] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff] '/>
          <div className='w-1 sm:h-80 h-60 violet-gradient'/>
        </div>
        <div>
          <div className='text-secondary text-sm italic opacity-80'>&lt;H1&gt;</div>
          <h1 className={`${styles.heroHeadText} text-white ml-4`}>
            Hi, This is <br className='sm:block hidden'/><span className='text-[#915eff]'>Priyansh</span> Kushrestha
          </h1>
          <div className='text-secondary text-sm italic opacity-80'>&lt;/H1&gt;</div>
          <div className='text-secondary text-sm italic opacity-80'>&lt;p&gt;</div>
          <p className={`${styles.heroSubText} ml-4 text-white-100`}>
            A MERN Stack Developer <br className='sm:block hidden'/>and A Blockchain Enthusiast   
          </p>
          <div className='text-secondary text-sm italic opacity-80'>&lt;/p&gt;</div>
        </div>
      </div>
      <ComputersCanvas className='my-2'
      />
      {/* <div className='absolute xs:bottom-30 bottom-32 w-full hidden sm:flex sm:justify-end justify-center items-center px-5'>
        <a href='#about'>
          <div className='w-[40px] h-[65px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className=" mb-1 "
            >
              <img src={downArrow} className='w-10 mb-10'/>
            </motion.dev>
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero