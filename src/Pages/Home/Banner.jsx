import React from 'react';
import { motion, transformProps } from "motion/react"
import team1 from '../../assets/team/team 1.jpg'
import team2 from '../../assets/team/team 2.jpg'
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='flex-1'>
          <motion.img
           animate={{y:[100,150,100]}}
           transition={{duration:5, repeat:Infinity}}
            src={team1}
            className="max-w-sm rounded-t-[40px] border-s-8 border-b-8 shadow-2xl"
          />
        </div>
        <div className='flex-1'>
          <motion.img
           animate={{x:[100,150,100]}}
           transition={{duration:5,delay:3, repeat:Infinity}}
            src={team2}
            className="max-w-sm rounded-t-[40px] border-s-8 border-b-8 shadow-2xl"
          />
        </div>
        
        <div>
          {/* <motion.h1 animate={{rotate:360}}
            transition={{ duration: 5 }}
                style={{ ...transformProps.style, x: 100 }}
          className="text-5xl font-bold">New Job alert!</motion.h1> */}
          <h1 className="text-5xl font-bold">Remote <span >jobs</span> for you</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;