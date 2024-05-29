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

export default function ScreenShotSec() {
  return (
    <>
      <style>
        {`.Animate{ animation: rotate 0.80s infinite;transition: transform 0.6s; cubic-bezier(0.8, 0.14, 0.42, 0.72) } @keyframes rotate { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg);  transform-style: preserve-3d;    } } `}
      </style>
      <section>
        <div className='min-h-[100vh]  flex lg:flex-row flex-col gap-5  lg:pt-24 pt-0 items-center'>
          <div className='flex flex-col gap-7 lg:px-24 px-4 lg:w-[75%] w-full'>
            <div className='relative w-fit top-12 lg:my-7 my-5 -translate-x-6'>
              <div className='Animate'>
                <img src='.\images\red.png' className='w-24 h-fit  ' alt='' />
              </div>
            </div>

            <h5 className=' text-[#000000b0] text-xl'>
              Providing a platform for a passionate open-source AI community
            </h5>
            <p className='text-gray-500 '>
              Fair is the first decentralised marketplace, powered by Arweave, where creators of
              open-source AI models can monetise their work while users retain ownership and
              intellectual property rights of AI-generated content.
            </p>
          </div>
          <div className='lg:w-fit w-full '>
            <a href='https://x.com/rakis_me/status/1677415435958992896?s=20' target='_blank'>
              <div className='h-60 flex items-center justify-end lg:hover:scale-125 transform transition lg:-translate-x-72 lg:px-0 px-4 lg:mb-7 mb-0'>
                <img src='.\images\screenshot.webp' alt='' />
              </div>
            </a>
            <a href='https://x.com/samecwilliams/status/1659033512102490114?s=20' target='_blank'>
              <div className='rounded-lg lg:h-64 justify-start flex items-center lg:hover:scale-125 transform transition'>
                <img src='.\images\screen2.webp' alt='' className='w-[75%] lg:px-0 px-4 ' />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
