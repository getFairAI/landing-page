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

import { Tweet } from 'react-tweet';

export default function ScreenShotSec() {
  return (
    <>
      {/* <style>
        {`.Animate{ animation: rotate 1.5s infinite;transition: transform 0.6s; cubic-bezier(0.8, 0.14, 0.42, 0.72) } @keyframes rotate { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg);  transform-style: preserve-3d;    } } `}
      </style> */}

      <style>
        {`
          .react-tweet-theme {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
        `}
      </style>
      <section>
        <div className='flex justify-center'>
          <h1 className='text-2xl md:text-4xl mt-10 md:mt-20 mb-10 w-fit dark-text flex flex-wrap items-center justify-center px-10 gap-3'>
            <span className='text-with-dark-bg very-rounded'>Everyone's</span>
            <span>AI Marketplace.</span>
          </h1>
        </div>
        <div className='flex justify-center'>
          <div className='flex flex-col gap-10 card-glasspane-container w-[90%] max-w-[1800px]'>
            <div className='flex gap-8 items-start p-5 flex-wrap'>
              <img
                src='./fair-protocol-face-transparent.png'
                className='w-[60px] object-contain invert opacity-70 ml-0 lg:ml-6'
              />

              <div className='flex-auto min-w-[200px] px-6 xl:px-0'>
                <h5 className='dark-text text-2xl md:text-3xl font-semibold'>
                  Providing a platform for a passionate open-source AI community.
                </h5>
              </div>
              <div className='flex-auto min-w-[200px] px-6'>
                <p className='text-gray-500 text-lg md:text-xl font-medium'>
                  Fair is the first decentralised marketplace, powered by Arweave, where creators of
                  open-source AI models can monetise their work while users retain ownership and
                  intellectual property rights of AI-generated content.
                </p>
              </div>
            </div>
            <div className='w-full flex flex-wrap gap-5 md:gap-10 justify-center px-0 md:px-10 pb-0 md:pb-10'>
              <div className='flex-1 min-w-[300px] max-w-full flex justify-center'>
                <div
                  data-theme='light'
                  className='h-fit w-fit rounded-2xl border-4 border-neutral-600 hover:scale-105 hover:shadow-lg hover:shadow-slate-400 transition-all duration-500'
                >
                  <Tweet id='1677415435958992896' />
                </div>
              </div>
              <div className='flex-1 min-w-[300px] max-w-full flex justify-center'>
                <div
                  data-theme='light'
                  className='h-fit w-fit rounded-2xl border-4 border-neutral-600 hover:scale-105 hover:shadow-lg hover:shadow-slate-400 transition-all duration-500'
                >
                  <Tweet id='1743286414861799782' />
                </div>
              </div>
              <div className='flex-1 min-w-[300px] max-w-full flex justify-center'>
                <div
                  data-theme='light'
                  className='h-fit w-fit rounded-2xl border-4 border-neutral-600 hover:scale-105 hover:shadow-lg hover:shadow-slate-400 transition-all duration-500'
                >
                  <Tweet id='1659033512102490114' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
