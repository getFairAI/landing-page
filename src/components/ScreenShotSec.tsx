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

import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function ScreenShotSec() {
  return (
    <>
      {/* <style>
        {`.Animate{ animation: rotate 1.5s infinite;transition: transform 0.6s; cubic-bezier(0.8, 0.14, 0.42, 0.72) } @keyframes rotate { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg);  transform-style: preserve-3d;    } } `}
      </style> */}

      <style>
        {`
          .twitter-tweet, .twitter-tweet-rendered {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
        `}
      </style>
      <section>
        <div className='flex justify-center'>
          <h1 className='text-4xl mt-20 mb-10 w-fit dark-text'>
            <span className='text-with-dark-bg very-rounded ml-4 mr-4'>Everyone's</span>
            AI Marketplace.
          </h1>
        </div>
        <div className='flex justify-center mb-40'>
          <div className='flex flex-col gap-10 card-glasspane-container w-[90%] max-w-[1800px]'>
            <div className='flex gap-8 items-start p-5'>
              <img
                src='./fair-protocol-face-transparent.png'
                className='w-[60px] object-contain invert opacity-70'
              />
              <div>
                <h5 className='dark-text text-3xl font-semibold'>
                  Providing a platform for a passionate open-source AI community.
                </h5>
                <p className='text-gray-500 mt-3 text-xl font-medium'>
                  Fair is the first decentralised marketplace, powered by Arweave, where creators of
                  open-source AI models can monetise their work while users retain ownership and
                  intellectual property rights of AI-generated content.
                </p>
              </div>
            </div>
            <div className='w-full flex flex-wrap gap-5 justify-evenly px-10 pb-10'>
              <div className='h-fit flex-1 min-w-[400px] rounded-2xl border-4 border-neutral-600 hover:scale-110 hover:shadow-lg hover:shadow-slate-400 transition-all duration-500'>
                <TwitterTweetEmbed tweetId={'1677415435958992896'} />
              </div>
              <div className='h-fit flex-1 min-w-[400px] rounded-2xl border-4 border-neutral-600 hover:scale-110 hover:shadow-lg hover:shadow-slate-400 transition-all duration-500'>
                <TwitterTweetEmbed tweetId={'1743286414861799782'} />
              </div>
              <div className='h-fit flex-1 min-w-[400px] rounded-2xl border-4 border-neutral-600 hover:scale-110 hover:shadow-lg hover:shadow-slate-400 transition-all duration-500'>
                <TwitterTweetEmbed tweetId={'1659033512102490114'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
