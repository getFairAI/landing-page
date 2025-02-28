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
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

// import Snowflakes from 'magic-snowflakes';
// import { useEffect } from 'react';

// import needed scss
import '../scss/animations.scss';
import '../scss/jambo-section-styles.scss';
import { useContext } from 'react';
import { LinksContext } from '../context/links';
import { useSearchParams } from 'react-router-dom';

export default function JamboSection() {
  const [urlParams] = useSearchParams();
  const currentUserType = urlParams.get('userType') ?? 'business';

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
    <div className='w-[100%] flex flex-col justify-center place-items-center'>
      {currentUserType === 'user' && (
        <motion.div>
          <UserSection />
        </motion.div>
      )}

      {currentUserType === 'business' && (
        <motion.div>
          <BusinessSection />
        </motion.div>
      )}

      {currentUserType === 'developer' && (
        <motion.div>
          <DevSection />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
        }}
        className='w-full flex justify-center'
      >
        <div className='max-w-[1750px] flex flex-nowrap gap-0 md:gap-10 justify-center lg:justify-between w-full lg:w-[90%] px-4'>
          <div className='w-fit flex flex-col items-center lg:items-start min-height-change-size-backers'>
            <span
              className={
                'jambo-grey-text font-medium ' +
                (currentUserType === 'developer' ? 'dark-mode' : '')
              }
            >
              <BoltRoundedIcon style={{ height: '20px', verticalAlign: 'sub' }} />
              Empowered by
            </span>
            <div className='flex flex-wrap justify-center items-center gap-5 md:gap-10 mt-2'>
              <a href='https://www.arweave.org/' target='_blank'>
                <img
                  src='./logos/arweave-logo-2.png'
                  alt='Arweave Logo'
                  className={
                    'w-full max-w-[200px] object-contain ' +
                    (currentUserType === 'developer' ? 'invert' : '')
                  }
                />
              </a>
              <a href='https://arbitrum.io/' target='_blank'>
                {currentUserType === 'developer' && (
                  <img
                    src='./logos/arbitrum-logo-darkmode.png'
                    alt='Arbitrum Logo'
                    className='w-full max-w-[200px] object-contain'
                  />
                )}

                {currentUserType !== 'developer' && (
                  <img
                    src='./logos/arbitrum-logo.png'
                    alt='Arbitrum Logo'
                    className='w-full max-w-[200px] object-contain'
                  />
                )}
              </a>
            </div>
          </div>

          <div className='w-fit flex flex-col items-center lg:items-start min-height-change-size-backers'>
            <span
              className={
                'jambo-grey-text font-medium ' +
                (currentUserType === 'developer' ? 'dark-mode' : '')
              }
            >
              <FavoriteRoundedIcon
                style={{ height: '18px', verticalAlign: 'sub', marginRight: '3px' }}
              />
              Backed by
            </span>
            <div className='flex flex-wrap justify-center items-center gap-5 md:gap-10 mt-2'>
              <a href='https://fwd.g8way.io/' target='_blank'>
                <img
                  src='./logos/forward-research-logo-2.png'
                  alt='Forward Research Logo'
                  className={
                    'w-full max-w-[190px] object-contain ' +
                    (currentUserType === 'developer' ? 'invert' : '')
                  }
                />
              </a>
              <a href='https://www.techstars.com/' target='_blank'>
                {currentUserType === 'developer' && (
                  <img
                    src='./logos/techstars-logo-darkmode.png'
                    alt='Techstars Logo'
                    className='w-full max-w-[200px] object-contain'
                  />
                )}

                {currentUserType !== 'developer' && (
                  <img
                    src='./logos/techstars-logo.png'
                    alt='Techstars Logo'
                    className='w-full max-w-[200px] object-contain'
                  />
                )}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function UserSection() {
  const { appLink } = useContext(LinksContext);

  return (
    <div className='flex justify-center items-center flex-col h-[70vh] xl:h-[80vh]'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className='flex gap-20'
      >
        <div className='w-8 md:w-10 flex-col justify-end hidden sm:flex'>
          <AutoAwesomeRoundedIcon
            className='animate-small-stars'
            style={{
              width: '100%',
              height: 'auto',
              verticalAlign: 'text-bottom',
            }}
          />
        </div>
        <h1 className='lg:text-5xl text-3xl text-center jambo-grey-text mx-10 min-height-change-size-text'>
          <div>
            <span className='mr-3'>Discover open-source AI tools for</span>
            <span className='bold-underlined-text-jambo animate-bg-block-slide-right'>
              anything.
            </span>
          </div>
          <div className='flex flex-wrap w-full justify-center'>
            <span className='ml-5 mr-5'>Easy, fast, and</span>
            <span className='bold-underlined-text-jambo delay500ms animate-bg-block-slide-right'>
              no code needed.
            </span>
          </div>
          <div className='text-with-dark-bg-jambo very-rounded w-fit mx-auto mt-4 animate-bg-block-slide-right'>
            Explore the AI world.
          </div>
        </h1>
        <div className='w-8 md:w-10 flex-col justify-start hidden sm:flex'>
          <AutoAwesomeRoundedIcon
            className='animate-small-stars'
            style={{
              width: '100%',
              height: 'auto',
              verticalAlign: 'text-bottom',
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 3,
        }}
        className='md:w-fit w-full z-10 mt-10 sm:mt-20'
      >
        <div className='flex gap-5 justify-center items-center flex-wrap-reverse mx-10'>
          <button onClick={ScrollToLearnMore} className='cursor-pointer'>
            <div className='plausible-event-name=Learn+More+Click'>
              <span className='button-big-text outlined-only min-height-change-size-button'>
                Learn more <ArrowDropDownCircleRoundedIcon />
              </span>
            </div>
          </button>

          <a href={appLink}>
            <div className='plausible-event-name=Try+Now+Click'>
              <span className='button-big-text min-height-change-size-button'>
                Start your journey <ArrowCircleRightRoundedIcon />
              </span>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function DevSection() {
  const { appLink } = useContext(LinksContext);

  return (
    <div className='flex justify-center items-center flex-col h-[70vh] xl:h-[80vh]'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className='flex gap-20'
      >
        <div className='w-8 md:w-10 flex-col justify-end hidden sm:flex'>
          <AutoAwesomeRoundedIcon
            className='animate-small-stars dark-mode'
            style={{
              width: '100%',
              height: 'auto',
              verticalAlign: 'text-bottom',
            }}
          />
        </div>
        <h1 className='lg:text-5xl text-3xl text-center jambo-grey-text mx-10 min-height-change-size-text dark-mode'>
          <div>
            <span className='mr-3'>The AI Marketplace Built for Developers Like You.</span>
          </div>
          <div className='flex flex-wrap w-full justify-center'>
            <span className='ml-5 mr-5'>Build AI.</span>
            <span className='bold-underlined-text-jambo delay500ms animate-bg-block-slide-right dark-mode'>
              Solve Problems.
            </span>
          </div>
          <div className='text-with-dark-bg-jambo very-rounded w-fit mx-auto mt-4 animate-bg-block-slide-right dark-mode'>
            Get Paid.
          </div>
        </h1>
        <div className='w-8 md:w-10 flex-col justify-start hidden sm:flex'>
          <AutoAwesomeRoundedIcon
            className='animate-small-stars dark-mode'
            style={{
              width: '100%',
              height: 'auto',
              verticalAlign: 'text-bottom',
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 3,
        }}
        className='md:w-fit w-full z-10 mt-10 sm:mt-20'
      >
        <div className='flex gap-5 justify-center items-center flex-wrap-reverse mx-10'>
          <button onClick={ScrollToLearnMore} className='cursor-pointer'>
            <div className='plausible-event-name=Learn+More+Click'>
              <span className='button-big-text outlined-only min-height-change-size-button dark-mode'>
                Learn more <ArrowDropDownCircleRoundedIcon />
              </span>
            </div>
          </button>

          <a href={appLink}>
            <div className='plausible-event-name=Try+Now+Click'>
              <span className='button-big-text min-height-change-size-button dark-mode'>
                Find your solution <ArrowCircleRightRoundedIcon />
              </span>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function BusinessSection() {
  const { appLink } = useContext(LinksContext);

  return (
    <div className='flex justify-center items-center flex-col h-[70vh] xl:h-[80vh]'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className='flex gap-20'
      >
        <div className='w-8 md:w-10 flex-col justify-end hidden sm:flex'>
          <AutoAwesomeRoundedIcon
            className='animate-small-stars'
            style={{
              width: '100%',
              height: 'auto',
              verticalAlign: 'text-bottom',
            }}
          />
        </div>
        <h1 className='lg:text-5xl text-3xl text-center jambo-grey-text mx-10 min-height-change-size-text'>
          <div>
            <span className='ml-3'>Your Problem.</span>
          </div>
          <div className='flex flex-wrap w-full justify-center'>
            <span className='ml-5 mr-5'>A World of </span>
            <span className='bold-underlined-text-jambo animate-bg-block-slide-right'>
              AI Experts.
            </span>
          </div>
          <div className='text-with-dark-bg-jambo very-rounded w-fit mx-auto mt-4 animate-bg-block-slide-right'>
            The Right Solution.
          </div>
        </h1>
        <div className='w-8 md:w-10 flex-col justify-start hidden sm:flex'>
          <AutoAwesomeRoundedIcon
            className='animate-small-stars'
            style={{
              width: '100%',
              height: 'auto',
              verticalAlign: 'text-bottom',
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 3,
        }}
        className='md:w-fit w-full z-10 mt-10 sm:mt-20'
      >
        <div className='flex gap-5 justify-center items-center flex-wrap-reverse mx-10'>
          <button onClick={ScrollToLearnMore} className='cursor-pointer'>
            <div className='plausible-event-name=Learn+More+Click'>
              <span className='button-big-text outlined-only min-height-change-size-button'>
                Learn more <ArrowDropDownCircleRoundedIcon />
              </span>
            </div>
          </button>

          <a href={appLink}>
            <div className='plausible-event-name=Try+Now+Click'>
              <span className='button-big-text min-height-change-size-button'>
                Start evolving now <ArrowCircleRightRoundedIcon />
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
