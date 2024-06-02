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
        <div className='flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap my-5 md:my-10 card-glasspane-container'>
          <div className='px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center md:items-start'>
            <div className='card-title'>Reusable and Sustainable</div>
            <div className='card-description mt-5 md:mt-10 px-8'>
              Use existing AI solutions.
              <br />
              Modify them to fit your specific needs.
            </div>
          </div>
          <div className='p-4 card-section mx-auto'>
            <img
              id='solutions'
              className='rounded-3xl border-4 border-neutral-700'
              src='./images/solutions.png'
            />
          </div>
        </div>

        <div className='flex flex-col w-full'>
          <div className='flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap my-5 md:my-10 card-glasspane-container'>
            <div className='p-4 card-section mx-auto'>
              <img
                id='requests'
                className='rounded-3xl border-4 border-neutral-700'
                src='./images/request.png'
              />
            </div>

            <div className='px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center md:items-start'>
              <div className='card-title'>AI Tailored to Your Needs</div>
              <div className='card-description mt-5 md:mt-10 px-8'>
                State problems that AI can solve.
                <br />
                See them being solved by the open-source AI community.
              </div>
            </div>
          </div>

          <div className='flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap-reverse md:flex-wrap my-5 md:my-10 card-glasspane-container'>
            <div className='px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center md:items-start'>
              <div className='card-title'>Risk Diversification</div>
              <div className='card-description mt-5 md:mt-10 px-8'>
                Pick and choose your AI hardware provider.
                <br />
                Change it anytime.
              </div>
            </div>

            <div className='p-4 card-section mx-auto'>
              <img
                id='choose-operator'
                className='rounded-3xl border-4 border-neutral-700'
                src='./images/choose-operator.png'
              />
            </div>
          </div>

          <div className='flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap mt-5 md:my-10 card-glasspane-container'>
            <div className='p-4 card-section mx-auto'>
              <img
                id='solutions'
                className='rounded-3xl border-4 border-neutral-700'
                src='./images/viewblock.png'
              />
            </div>

            <div className='px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center md:items-start'>
              <div className='card-title'>Transparent and Open AI</div>
              <div className='card-description mt-5 md:mt-10 px-8'>
                Support the open-source AI community.
                <br />
                Get traceable and verifiable AI-generated content in return.
              </div>
            </div>
          </div>

          <div className='flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap-reverse md:flex-wrap my-5 md:my-10 card-glasspane-container'>
            <div className='px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center md:items-start'>
              <div className='card-title'>Private and Ownable</div>
              <div className='card-description mt-5 md:mt-10 px-8'>
                Encrypt your AI prompts and responses.
                <br />
                Have digital property right over your AI-generated content.
              </div>
            </div>
            <div className='p-4 card-section mx-auto'>
              <img
                id='encrypted'
                className='rounded-3xl border-4 border-neutral-700'
                src='./images/encrypted.png'
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
