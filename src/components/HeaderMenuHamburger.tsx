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
import { motion } from 'framer-motion';
import { LinksContext } from '../context/links';
import { useContext, useState } from 'react';

// icons
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const sidebar = {
  open: {
    clipPath: `circle(2000px at calc(100vw - 40px) 36px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(25px at calc(100vw - 40px) 36px)',
    transition: {
      delay: 0,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function HeaderMenuButton() {
  const { appLink } = useContext(LinksContext);
  const [isOpen, toggleOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={false}
        variants={sidebar}
        animate={isOpen ? 'open' : 'closed'}
        className='absolute top-0 right-0 w-[100vw] h-[100vh] bg-[#3aaaaa]'
      >
        <motion.div>
          <div className='flex justify-end w-full'>
            <button
              onClick={() => toggleOpen(!isOpen)}
              className='w-[80px] h-[72px] text-white'
              style={{
                zIndex: '1000',
              }}
            >
              <MenuRoundedIcon style={{ width: '30px', height: '30px' }} />
            </button>
          </div>
          <div className='flex flex-col justify-center gap-5 items-center px-5'>
            <img
              src='./fair-ai-outline.svg'
              alt='FairAI Logo'
              className='w-[250px] h-auto object-contain py-5 px-5 invert brightness-0 mb-4'
            />

            <a
              href={appLink}
              target='blank'
              className='button-big-text w-full max-w-[300px] white-bg h-[60px]'
            >
              <div className='plausible-event-name=Open+App+Click w-full flex justify-between items-center'>
                Start using FairAI <ArrowCircleRightRoundedIcon style={{ width: '30px' }} />
              </div>
            </a>

            <a
              href={WHITEPAPER}
              target='blank'
              className='button-big-text w-full max-w-[300px] white-bg h-[60px]'
            >
              <button className='plausible-event-name=Docs+Click w-full flex justify-between items-center'>
                Docs <ArrowCircleRightRoundedIcon style={{ width: '30px' }} />
              </button>
            </a>

            <a
              href={DISCORD_LINK}
              target='blank'
              className='button-big-text w-full max-w-[300px] white-bg h-[60px]'
            >
              <button className='plausible-event-name=Docs+Click w-full flex justify-between items-center'>
                Discord <ArrowCircleRightRoundedIcon style={{ width: '30px' }} />
              </button>
            </a>

            <a
              href={TWITTER_LINK}
              target='blank'
              className='button-big-text w-full max-w-[300px] white-bg h-[60px]'
            >
              <button className='plausible-event-name=Docs+Click w-full flex justify-between items-center'>
                X / twitter <ArrowCircleRightRoundedIcon style={{ width: '30px' }} />
              </button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
