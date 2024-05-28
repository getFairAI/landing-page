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

import { motion } from 'framer-motion';
import { FAIR_MARKETPLACE } from '../constants';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';

// import Snowflakes from 'magic-snowflakes';
// import { useEffect } from 'react';

// import needed scss
import '../scss/universal-styles.scss';

export default function JamboSection() {
  // useEffect(() => {
  //   const layer1 = document.querySelector('#layer1');
  //   const layer2 = document.querySelector('#layer2');
  //   if (layer1) {
  //     const layer1anim = new Snowflakes({
  //       container: layer1 as HTMLElement,
  //       // color: '#EDEDED', // Default: "#5ECDEF"
  //       count: 30, // 100 snowflakes. Default: 50
  //       speed: 0.6,
  //       zIndex: 1,
  //     });
  //     layer1anim.start();
  //   }

  //   if (layer2) {
  //     const layer2anim = new Snowflakes({
  //       container: layer2 as HTMLElement,
  //       // color: '#EDEDED', // Default: "#5ECDEF"
  //       count: 30, // 100 snowflakes. Default: 50
  //       speed: 0.6,
  //       zIndex: 1,
  //     });
  //     layer2anim.start();
  //   }
  // }, []);

  return (
    <div className='w-[100%] flex justify-center place-items-center'>
      <div id='layer1' className='flex'></div>
      <div id='layer2' className='flex'></div>
      <motion.div>
        <Aiexper />
      </motion.div>
    </div>
  );
}

// const animateConfig = { y: [0, 120, 0], opacity: 0.8, scale: 1 };

function Aiexper() {
  return (
    <div className='flex justify-center items-center flex-col h-[80vh]'>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0, translateY: -5 }}
        animate={animateConfig}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        
      </motion.div> */}

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
        }}
      >
        <h1 className='lg:text-5xl text-3xl text-center font-light'>
          <div className='flex justify-center'>
            <span className='ml-3'>Unlock the full potential of</span>
          </div>
          <span className='bold-underlined-text'>democratized</span>
          <span className='ml-3 mr-3'>and</span>
          <span className='text-with-dark-bg'>open-source AI</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
        }}
        className='md:w-fit w-full z-10'
      >
        <div className='flex gap-5 justify-center items-center'>
          <a onClick={ScrollToLearnMore} className='cursor-pointer'>
            <div className='mt-10 plausible-event-name=Try+Now+Click'>
              <span className='button-big-text outlined-only'>
                Learn More <ArrowDropDownCircleRoundedIcon />
              </span>
            </div>
          </a>
          <a href={FAIR_MARKETPLACE} target='blank'>
            <div className='mt-10 plausible-event-name=Try+Now+Click'>
              <span className='button-big-text'>
                Start Your Journey <ArrowCircleRightRoundedIcon />
              </span>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function ScrollToLearnMore() {
  const elementLearnMoreY = document.getElementById('learn-more-video-section');

  if (elementLearnMoreY) {
    elementLearnMoreY.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
