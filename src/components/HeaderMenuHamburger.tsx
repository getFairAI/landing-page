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

import { WHITEPAPER, TWITTER_LINK, DISCORD_LINK } from '../constants';
import { MotionProps, motion, stagger, useAnimate } from 'framer-motion';
import { LinksContext } from '../context/links';
import { useContext, useEffect, useState } from 'react';

// icons
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

const sidebar = {
  open: {
    clipPath: `circle(2000px at calc(100vw - 54px) 36px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(25px at calc(100vw - 54px) 36px)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const staggerMenuItems = stagger(0.05);

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'img',
      isOpen ? { y: 0, opacity: 1, scale: 1, x: 0 } : { y: -40, opacity: 0, scale: 0.7, x: 80 },
      {
        duration: 0.2,
        delay: isOpen ? 0.2 : 0,
      },
    ).then;

    animate(
      '.button-big-text',
      isOpen ? { y: 0, scale: 1, x: 0 } : { y: -150, scale: 0.3, x: 100 },
      {
        duration: 0.1,
        delay: staggerMenuItems,
      },
    ).then;
  }, [animate, isOpen]);

  return scope;
}

export default function HeaderMenuButton() {
  const { appLink } = useContext(LinksContext);
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const Path = (props: MotionProps & { d?: string }) => (
    <motion.path
      fill='transparent'
      strokeWidth='3'
      stroke='hsl(0, 0%, 18%)'
      strokeLinecap='round'
      {...props}
    />
  );

  const MenuToggle = () => (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className='w-[65px] h-[75px] text-white invert brightness-0'
    >
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );

  return (
    <>
      <motion.div
        initial={false}
        variants={sidebar}
        animate={isOpen ? 'open' : 'closed'}
        className='absolute top-0 right-0 w-[100vw] h-[100vh] bg-[#3aaaaa]'
      >
        <div>
          <div className='flex justify-end w-full'>
            <MenuToggle />
          </div>
          <div className='flex flex-col justify-center gap-5 items-center px-5' ref={scope}>
            <img
              src='./fair-ai-outline.svg'
              alt='FairAI Logo'
              className='w-[250px] h-auto object-contain py-5 px-5 invert brightness-0 mb-4'
            />

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.01 }}
              href={appLink}
              target='blank'
              className='button-big-text w-full max-w-[300px] white-bg h-[60px]'
            >
              <div className='plausible-event-name=Open+App+Click w-full flex justify-between items-center'>
                Start using FairAI <ArrowCircleRightRoundedIcon style={{ width: '30px' }} />
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.01 }}
              href={WHITEPAPER}
              target='blank'
              className='button-big-text w-full max-w-[300px] white-bg h-[60px]'
            >
              <button className='plausible-event-name=Docs+Click w-full flex justify-between items-center'>
                Docs <ArrowCircleRightRoundedIcon style={{ width: '30px' }} />
              </button>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.01 }}
              href={DISCORD_LINK}
              target='blank'
              className='button-big-text w-full max-w-[300px] white-bg h-[60px]'
            >
              <button className='plausible-event-name=Docs+Click w-full flex justify-between items-center'>
                Discord <ArrowCircleRightRoundedIcon style={{ width: '30px' }} />
              </button>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.01 }}
              href={TWITTER_LINK}
              target='blank'
              className='button-big-text w-full max-w-[300px] white-bg h-[60px]'
            >
              <button className='plausible-event-name=Docs+Click w-full flex justify-between items-center'>
                X / twitter <ArrowCircleRightRoundedIcon style={{ width: '30px' }} />
              </button>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
