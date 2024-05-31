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

// icons
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

// import Snowflakes from 'magic-snowflakes';
// import { useEffect } from 'react';

// import needed scss
import '../scss/animations.scss';
import '../scss/jambo-section-styles.scss';
import { useContext } from 'react';
import { LinksContext } from '../context/links';

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

function Aiexper() {
  const { appLink } = useContext(LinksContext);

  return (
    <div className='flex justify-center items-center flex-col h-[90vh]'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
      >
        <h1 className='lg:text-5xl text-3xl text-center jambo-grey-text mx-10 min-height-change-size-text'>
          <div>
            <span className='ml-3'>Discover the full potential of a</span>
          </div>
          <div className='flex flex-wrap w-full justify-center'>
            <span className='bold-underlined-text-jambo animate-bg-block-slide-right'>
              democratized
            </span>
            <span className='ml-5 mr-5'>and</span>
            <span className='bold-underlined-text-jambo delay500ms animate-bg-block-slide-right'>
              truly open
            </span>
          </div>
          <div className='text-with-dark-bg-jambo very-rounded w-fit mx-auto mt-4 animate-bg-block-slide-right'>
            AI marketplace.
          </div>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 3,
        }}
        className='md:w-fit w-full z-10 mt-20'
      >
        <div className='flex gap-5 justify-center items-center flex-wrap-reverse mx-10'>
          <a onClick={ScrollToLearnMore} className='cursor-pointer'>
            <div className='plausible-event-name=Try+Now+Click'>
              <span className='button-big-text outlined-only min-height-change-size-button'>
                Learn more <ArrowDropDownCircleRoundedIcon />
              </span>
            </div>
          </a>
          <a href={appLink} target='blank'>
            <div className='plausible-event-name=Try+Now+Click'>
              <span className='button-big-text min-height-change-size-button'>
                Start your journey <ArrowCircleRightRoundedIcon />
              </span>
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
        }}
        className='absolute bottom-10 left-0 w-full flex justify-center min-height-change-size-backers'
      >
        <div className='max-w-[1750px] flex flex-wrap gap-5 md:gap-10 justify-center xl:justify-between w-[90%]'>
          <div className='w-fit flex flex-col items-center md:items-start'>
            <span className='jambo-grey-text font-medium'>
              <BoltRoundedIcon style={{ height: '20px', verticalAlign: 'sub' }} />
              Empowered by
            </span>
            <div className='flex flex-wrap justify-center md:justify-start items-center gap-5 md:gap-10 mt-2'>
              <a href='https://www.arweave.org/' target='_blank'>
                <img
                  src='./logos/arweave-logo-2.png'
                  alt='Arweave Logo'
                  className='w-full max-w-[200px] object-contain'
                />
              </a>
              <a href='https://arbitrum.io/' target='_blank'>
                <img
                  src='./logos/arbitrum-logo.png'
                  alt='Arbitrum Logo'
                  className='w-full max-w-[200px] object-contain'
                />
              </a>
            </div>
          </div>

          <div className='w-fit flex flex-col items-center md:items-start'>
            <span className='jambo-grey-text font-medium'>
              <FavoriteRoundedIcon
                style={{ height: '18px', verticalAlign: 'sub', marginRight: '3px' }}
              />
              Backed by
            </span>
            <div className='flex flex-wrap justify-center md:justify-start items-center gap-5 md:gap-10 mt-2'>
              <a href='https://fwd.g8way.io/' target='_blank'>
                <img
                  src='./logos/forward-research-logo-2.png'
                  alt='Forward Research Logo'
                  className='w-full max-w-[190px] object-contain'
                />
              </a>
              <a href='https://www.techstars.com/' target='_blank'>
                <img
                  src='./logos/techstars-logo.png'
                  alt='Techstars Logo'
                  className='w-full max-w-[200px] object-contain'
                />
              </a>
            </div>
          </div>
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
