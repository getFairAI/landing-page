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

import { motion, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type RefType = React.RefObject<HTMLDivElement>;

const tabs = [
  { id: '2dmages', label: '2D Images' },
  { id: 'detector', label: 'AI Detector' },
  { id: 'images', label: '3D Images' },
  { id: 'Audio ', label: 'Audio (Text-To-Speech)' },
];
export default function VideoCard() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const ref: RefType = useRef(null);
  const ref2: RefType = useRef(null);
  const ref3: RefType = useRef(null);
  const ref4: RefType = useRef(null);

  const handleClick = () => {
    const myref = ref.current;
    if (myref) {
      myref.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClick2 = () => {
    const myref2 = ref2.current;
    if (myref2) {
      myref2.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClick3 = () => {
    const myref3 = ref3.current;
    if (myref3) {
      myref3.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClick4 = () => {
    const myref4 = ref4.current;
    if (myref4) {
      myref4.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    videoEvent();
  }, []);

  function setupVideoEvents(videoId: string) {
    const video: HTMLVideoElement | null = document.getElementById(
      videoId,
    ) as HTMLVideoElement | null;

    if (video) {
      video.addEventListener('mouseover', () => {
        video.play().catch((error: Error) => {
          console.log(error);
        });
      });

      video.addEventListener('mouseout', () => {
        video.pause();
      });
    }
  }

  const videoEvent = () => {
    setupVideoEvents('video1');
    setupVideoEvents('video2');
    setupVideoEvents('video3');
    setupVideoEvents('video4');
  };

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['1 50', '1 1'],
  });
  return (
    <div className='lg:w-[80%] w-[97%] min-h-[100vh] mx-auto'>
      <motion.div
        ref={scrollRef}
        className='relative  '
        style={{
          scale: scrollYProgress,
          transition: scrollYProgress,
          translateY: 50,
        }}
        animate={{
          scale: 0.1,
          transition: scrollYProgress,
        }}
      >
        <div className=' sticky lg:-top-6 md:top-0 mb-12 '>
          <div className=' justify-center lg:flex hidden'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === '2dmages') {
                    handleClick();
                  }
                  if (tab.id === 'detector') {
                    handleClick2();
                  }
                  if (tab.id === 'images') {
                    handleClick3();
                  }
                  if (tab.id === 'Audio ') {
                    handleClick4();
                  }
                  setActiveTab(tab.id);
                }}
                className={`${
                  activeTab === tab.id ? 'bg-blue-500 text-white' : ''
                } relative rounded-full text-sm font-medium text-black xl:px-16 lg:px-11 py-3   transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    // layoutId="outline"
                    className='absolute inset-0 z-10 border border-black '
                    style={{ borderRadius: 9999 }}
                    transition={{ type: 'spring', duration: 0.6 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div
          ref={ref}
          className='justify-center flex  gap-5  sticky  top-10  xl:w-[85%] w-full mx-auto '
        >
          <video
            id='video1'
            className='mx-auto lg:hover:-translate-x-7  rounded-xl border border-black  hover:-translate-y-7 ease-out  duration-300 hover:ease-in-out'
          >
            <source src='public/videos/lionking.mp4' type='video/mp4' />
          </video>
        </div>

        <div
          ref={ref2}
          className='sticky top-20 lg:hover:-translate-x-7 hover:-translate-y-7 xl:w-[85%] w-full mx-auto  ease-out z-10  duration-300 hover:ease-in-out'
        >
          <video id='video2' className='mx-auto rounded-xl border border-black'>
            <source src='public/videos/lionking.mp4' type='video/mp4' />
          </video>
        </div>
        <div
          ref={ref3}
          className='sticky top-28 z-20 lg:hover:-translate-x-7 xl:w-[85%] w-full mx-auto     hover:-translate-y-7 ease-out  duration-300 hover:ease-in-out'
        >
          <video id='video3' className='mx-auto  rounded-xl border border-black'>
            <source src='public/videos/lionking.mp4' type='video/mp4' />
          </video>
        </div>
        <div
          ref={ref4}
          className='sticky top-32 z-30 lg:hover:-translate-x-7 xl:w-[85%] w-full mx-auto   hover:-translate-y-7 ease-out  duration-300 hover:ease-in-out'
        >
          <video id='video4' className='mx-auto  rounded-xl border border-black'>
            <source src='public\videos\lionking.mp4' type='video/mp4' />
          </video>
        </div>
      </motion.div>
    </div>
  );
}
