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

// import styles
import { motion } from 'framer-motion';
import '../scss/video-card-styles.scss';

export default function VideoCard() {
  return (
    <div className='w-[90%] max-w-[2000px] mx-auto' id='learn-more-video-section'>
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
          <div className='flex w-full gap-10 justify-between items-start flex-wrap my-20 card-horizontal-container'>
            <div className='px-4 my-4 flex flex-col card-section mx-auto'>
              <div className='card-title'>2D Images</div>
              <div className='card-description mt-10'>
                Generate 2D images that best suit your needs. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>

            <div className='p-4 card-section mx-auto'>
              <video id='video1' className='rounded-3xl border-4 border-neutral-700'>
                <source src='./videos/video1.mp4' type='video/mp4' />
              </video>
            </div>
          </div>

          <div className='flex w-full gap-10 justify-between items-start flex-wrap my-20 card-horizontal-container'>
            <div className='p-4 card-section mx-auto'>
              <video id='video3' className='rounded-3xl border-4 border-neutral-700'>
                <source src='./videos/video3.mp4' type='video/mp4' />
              </video>
            </div>

            <div className='px-4 my-4 flex flex-col card-section mx-auto'>
              <div className='card-title'>3D Images</div>
              <div className='card-description mt-10'>
                Generate 3D images that best suit your needs. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>

          <div className='flex w-full gap-10 justify-between items-start flex-wrap my-20 card-horizontal-container'>
            <div className='px-4 my-4 flex flex-col card-section mx-auto'>
              <div className='card-title'>Anime</div>
              <div className='card-description mt-10'>
                Generate 2D images that best suit your needs. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>

            <div className='p-4 card-section mx-auto'>
              <video id='video2' className='rounded-3xl border-4 border-neutral-700'>
                <source src='./videos/video2.mp4' type='video/mp4' />
              </video>
            </div>
          </div>

          <div className='flex w-full gap-10 justify-between items-start flex-wrap my-20 card-horizontal-container'>
            <div className='p-4 card-section mx-auto'>
              <video id='video4' className='rounded-3xl border-4 border-neutral-700'>
                <source src='./videos/video4.mp4' type='video/mp4' />
              </video>
            </div>

            <div className='px-4 my-4 flex flex-col card-section mx-auto'>
              <div className='card-title'>Audio (Text-To-Speech)</div>
              <div className='card-description mt-10'>
                Generate 2D images that best suit your needs. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
