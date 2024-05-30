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

// import styles
import '../scss/video-card-styles.scss';
import '../scss/universal-styles.scss';

export default function VideoCard() {
  return (
    <div className='w-[90%] max-w-[1800px] mx-auto' id='learn-more-video-section'>
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
          <div className='flex w-full gap-10 justify-between items-start flex-wrap mt-40 mb-10 card-glasspane-container'>
            <div className='px-4 my-4 flex flex-col card-section mx-auto'>
              <div className='card-title'>{'A marketplace for everyone'}</div>
              <div className='card-description mt-10'>
                Find solutions for ANY need.
                <br />
                Earn passive income on your hardware.
                <br />
                Monetize your open source AI Solutions.
              </div>
            </div>

            <div className='p-4 card-section mx-auto'>
              <video id='video1' className='rounded-3xl border-4 border-neutral-700'>
                <source src='./videos/video1.mp4' type='video/mp4' />
              </video>
            </div>
          </div>

          <div className='flex w-full gap-10 justify-between items-start flex-wrap my-10 card-glasspane-container'>
            <div className='p-4 card-section mx-auto'>
              <video id='video3' className='rounded-3xl border-4 border-neutral-700'>
                <source src='./videos/video3.mp4' type='video/mp4' />
              </video>
            </div>

            <div className='px-4 my-4 flex flex-col card-section mx-auto'>
              <div className='card-title'>{'AI Tailored to your needs'}</div>
              <div className='card-description mt-10'>
                {
                  'State problems that you believe AI can solve, and have the help of an open-source AI community to solve them.'
                }
              </div>
            </div>
          </div>

          <div className='flex w-full gap-10 justify-between items-start flex-wrap my-10 card-glasspane-container'>
            <div className='px-4 my-4 flex flex-col card-section mx-auto'>
              <div className='card-title'>{'Control & Ownership'}</div>
              <div className='card-description mt-10'>
                Choose the Solution.
                <br />
                Choose the provider.
                <br />
                Own your generated content.
              </div>
            </div>

            <div className='p-4 card-section mx-auto'>
              <video id='video2' className='rounded-3xl border-4 border-neutral-700'>
                <source src='./videos/video2.mp4' type='video/mp4' />
              </video>
            </div>
          </div>

          <div className='flex w-full gap-10 justify-between items-start flex-wrap mt-10 mb-20 card-glasspane-container'>
            <div className='p-4 card-section mx-auto'>
              <video id='video4' className='rounded-3xl border-4 border-neutral-700'>
                <source src='./videos/video4.mp4' type='video/mp4' />
              </video>
            </div>

            <div className='px-4 my-4 flex flex-col card-section mx-auto'>
              <div className='card-title'>{'Transparent & Permissionless'}</div>
              <div className='card-description mt-10'>
                Due to our novel approach, AI is democratized and open-source, allowing for a
                transparent and permissionless marketplace.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
