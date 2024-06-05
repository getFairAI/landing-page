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

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';

// import styles
import '../scss/video-card-styles.scss';
import { useRef } from 'react';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function GetCard1() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <>
      <div
        ref={ref}
        className='px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center lg:items-start'
      >
        <div className='card-title'>Reusable and Customizable</div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          Use existing AI solutions.
          <br />
          Tune them to fit your specific needs.
        </div>
      </div>
      <div className='px-4 card-section mx-auto'>
        <motion.img
          style={{ y }}
          id='solutions'
          className='rounded-3xl border-4 border-neutral-700 shadow-xl'
          src='./images/solutions.png'
        />
      </div>
    </>
  );
}

function GetCard2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <>
      <div className='p-4 card-section mx-auto'>
        <motion.img
          style={{ y }}
          id='requests'
          className='rounded-3xl border-4 border-neutral-700 shadow-xl'
          src='./images/browse-requests.png'
        />
      </div>
      <div
        ref={ref}
        className='px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center lg:items-start'
      >
        <div className='card-title'>Tailored to Your Needs</div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          State problems that AI can solve.
          <br />
          See them being solved by the open-source AI community.
        </div>
      </div>
    </>
  );
}

function GetCard3() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <>
      <div
        ref={ref}
        className='px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center lg:items-start'
      >
        <div className='card-title'>Private and Ownable</div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          Encrypt your AI prompts and responses.
          <br />
          Have digital property right over your AI-generated content.
        </div>
      </div>
      <div className='p-4 card-section mx-auto'>
        <motion.img
          style={{ y }}
          id='encrypted'
          className='rounded-3xl border-4 border-neutral-700 shadow-xl'
          src='./images/encrypted.png'
        />
      </div>
    </>
  );
}

function GetCard4() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <>
      <div className='p-4 card-section mx-auto'>
        <motion.img
          style={{ y }}
          id='choose-operator'
          className='rounded-3xl border-4 border-neutral-700 w-fit mx-auto shadow-xl'
          src='./images/choose-operator.png'
        />
      </div>
      <div
        ref={ref}
        className='px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center lg:items-start'
      >
        <div className='card-title'>Risk Diversification</div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          Pick and choose your AI hardware provider.
          <br />
          Change it anytime.
        </div>
      </div>
    </>
  );
}

function GetCard5() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <>
      <div
        ref={ref}
        className='px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center lg:items-start'
      >
        <div className='card-title'>Transparent and Open</div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          Support the open-source AI community.
          <br />
          Get traceable and verifiable AI-generated content in return.
        </div>
      </div>

      <div className='p-4 card-section mx-auto'>
        <motion.img
          style={{ y }}
          id='solutions'
          className='rounded-3xl border-4 border-neutral-700 w-fit mx-auto shadow-xl'
          src='./images/view-transaction.png'
        />
      </div>
    </>
  );
}

export default function VideoCard() {
  return (
    <div className='mt-20 w-[90%] max-w-[1800px] mx-auto' id='learn-more-video-section'>
      <motion.div
        className='relative'
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.4,
        }}
      >
        <div className='flex flex-col w-full'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.4, type: 'smooth' }}
            className='flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap my-5 xl:my-10 card-glasspane-container'
          >
            <GetCard1 />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.4, type: 'smooth' }}
            className='flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap-reverse xl:flex-wrap my-5 xl:my-10 card-glasspane-container'
          >
            <GetCard2 />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.4, type: 'smooth' }}
            className='flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap md:flex-wrap my-5 xl:my-10 card-glasspane-container'
          >
            <GetCard3 />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.4, type: 'smooth' }}
            className='flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap-reverse xl:flex-wrap my-5 xl:my-10 card-glasspane-container'
          >
            <GetCard4 />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.4, type: 'smooth' }}
            className='flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap mt-5 xl:mt-10 card-glasspane-container'
          >
            <GetCard5 />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
