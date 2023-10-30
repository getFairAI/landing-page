/*
 * Fair Protocol - Landing Page
 * Copyright (C) 2023 Fair Protocol
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 */

import Star from '../svg/Star';
import { motion } from 'framer-motion';
import Image from '../../public/images/dekstopimg-removebg-preview.png';
export default function JamboSection() {
  return (
    <div className='w-[80%] relative mx-auto flex justify-center mt-28'>
      <Animation style={'left-0'} />
      <Animation2 style={'right-0'} />
      <motion.div>
        <Aiexper />
      </motion.div>
    </div>
  );
}

function Animation(props: { style: string }) {
  const { style } = props;

  return (
    <>
      <style>
        {
          '.movingfun{animation: movingfun ease-in-out 10s infinite; transform: scale(0.5,1);transform: rotate(-25deg);} @keyframes movingfun {0% {transform: translate(0, 100);} 50% {transform: translate(0, 200px);} 120% {transform: translate(0, 0); transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); } }'
        }
      </style>
      <div className={`absolute lg:block hidden  ${style} w-64 h-64 overflow-hidden`}>
        <div className='movingfun h-full  relative  w-full'>
          <div className='w-7 absolute top-10 rotate-12 right-0'>
            <img src={Image} alt='' />
          </div>
          {/* <div className="absolute w-5 translate-x-10 rotate-16 right-0">
                        <img src={Image} alt="" />
                    </div> */}
          <div className='absolute  opacity-30  translate-y-32   right-0'>+</div>
          <div className='absolute opacity-30 -translate-x-28 translate-y-20 rotate-12 right-0'>
            +
          </div>
          <div className='w-4 translate-x-24 rotate-12 top-5 absolute'>
            <img src={Image} alt='' />
          </div>

          <div className='w-6 -rotate-[30deg] top-16 left-18 absolute'>
            <img src={Image} alt='' />
          </div>
          <div className='w-5 -rotate-45 right-10 top-44 absolute'>
            <img src={Image} alt='' />
          </div>
          <div className='w-3 translate-y-36 right-24 top-10 absolute'>
            <img src={Image} alt='' />
          </div>
        </div>
      </div>
    </>
  );
}
function Animation2(props: { style: string }) {
  const { style } = props;

  return (
    <>
      <style>
        {
          '.movingfun{animation: movingfun ease-in-out 10s infinite; transform: scale(0.5,1);transform: rotate(-25deg);} @keyframes movingfun {0% {transform: translate(0, 100);} 50% {transform: translate(0, 200px);} 120% {transform: translate(0, 0); transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); } }'
        }
      </style>
      <div className={`absolute lg:block hidden  ${style} w-64 h-64 overflow-hidden`}>
        <div className='movingfun h-full  relative  w-full'>
          <div className='w-7 absolute top-10 rotate-12 right-20 '>
            <img src={Image} alt='' />
          </div>
          {/* <div className="absolute w-5 translate-x-10 rotate-16 right-0">
                        <img src={Image} alt="" />
                    </div> */}
          <div className='absolute  opacity-30  translate-y-28 right-0'>+</div>
          <div className='absolute opacity-30 -translate-x-20 translate-y-20 rotate-12 right-0'>
            +
          </div>
          <div className='w-4 translate-x-24 rotate-16 top-5  absolute'>
            <img src={Image} alt='' />
          </div>

          <div className='w-6 -rotate-[30deg] top-20 left-12 absolute'>
            <img src={Image} alt='' />
          </div>
          <div className='w-5 -rotate-45 right-10 top-44  absolute'>
            <img src={Image} alt='' />
          </div>
          <div className='w-3 translate-y-36 right-24 top-10  absolute'>
            <img src={Image} alt='' />
          </div>
        </div>
      </div>
    </>
  );
}

const animateConfig = { y: [0, 120, 0], opacity: 0.8, scale: 1 };

function Aiexper() {
  return (
    <div className='flex justify-center items-center flex-col '>
      <motion.div
        initial={{ opacity: 0, scale: 0, translateY: -5 }}
        animate={animateConfig}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <div className='duration-1000 text-black '>
          <Star />
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.3,
        }}
      >
        <h1 className='lg:text-5xl text-3xl  lg:px-96 text-center font-light'>
          Start to Decentralise Your AI Experience
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 3.5,
        }}
        className='md:w-fit w-full'
      >
        <button className=' text-gray-600 mt-16 border border-black w-full bg-white hover:shadow-md rounded-lg md:px-28  py-3 duration-500 hover:-translate-y-1 hover:bg-[#e8e8e8]'>
          Try Now
        </button>
      </motion.div>
    </div>
  );
}
