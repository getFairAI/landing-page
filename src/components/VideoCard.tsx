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

const tabs = [
  { id: 1, label: '2D Images' },
  { id: 2, label: 'Anime' },
  { id: 3, label: '3D Images' },
  { id: 4, label: 'Audio (Text-To-Speech)' },
];

const activeClass = 'bg-gray-50 text-black';
const safeYMargin = 250;

export default function VideoCard() {
  // this way to avoid react hook error
  const videoRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleClick = (TargetTabId: number) => {
    const index = tabs.findIndex((tab) => tab.id === TargetTabId);

    if (index !== -1) {
      const myref = videoRefs[index].current;
      if (myref) {
        if (TargetTabId >= activeTab) {
          myref.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
        } else {
          window.scrollTo({
            behavior: 'smooth',
            top: window.scrollY - myref.clientHeight * (activeTab - TargetTabId),
          });
        }
      }
    }
  };

  useEffect(() => {
    const videoEvent = () => {
      tabs.forEach((tab) => {
        setupVideoEvents(`video${tab.id}`, tab.id);
      });
    };
    videoEvent();
  }, [setupVideoEvents]);

  function setupVideoEvents(videoId: string, tabId: number) {
    const video: HTMLVideoElement | null = document.getElementById(
      videoId,
    ) as HTMLVideoElement | null;

    if (video) {
      video.addEventListener('mouseover', () => {
        video.play().catch((error: Error) => {
          console.log(error);
        });

        const nextVideoIndex = tabId; // this works because tabs starts on 1

        // Check if there is a next video
        if (nextVideoIndex < tabs.length) {
          const nextVideo: HTMLVideoElement | null = document.getElementById(
            `video${tabs[nextVideoIndex].id}`,
          ) as HTMLVideoElement | null;

          if (nextVideo) {
            // Get the bounding box of the current and  next video
            const currentVideo = video.getBoundingClientRect();
            const nextVideoRect = nextVideo.getBoundingClientRect();

            if (nextVideoRect.top - currentVideo.top <= safeYMargin) {
              // Do not update the active tab
              return;
            }
          }
        }

        // Update the active tab if the conditions are met
        setActiveTab(tabId);
      });

      video.addEventListener('mouseout', () => {
        video.pause();
      });
    }
  }

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
                  handleClick(tab.id);
                  setActiveTab(tab.id);
                }}
                className={`${
                  activeTab === tab.id ? activeClass : ''
                } relative rounded-full text-sm font-medium text-black xl:px-16 lg:px-11 py-3 transition focus-visible:outline plausible-event-name=Video+Click plausible-event-label=${
                  tab.label
                }`}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    className='absolute inset-0 border border-black '
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
          ref={videoRefs[0]}
          className='justify-center flex  gap-5  sticky  top-10  xl:w-[85%] w-full mx-auto '
        >
          <video id='video1' className='mx-auto   rounded-xl border border-black    '>
            <source src='./videos/video1.mp4' type='video/mp4' />
          </video>
        </div>

        <div ref={videoRefs[1]} className='sticky top-20   xl:w-[85%] w-full mx-auto   z-10 '>
          <video id='video2' className='mx-auto rounded-xl border border-black'>
            <source src='./videos/video2.mp4' type='video/mp4' />
          </video>
        </div>
        <div ref={videoRefs[2]} className='sticky top-28 z-20  xl:w-[85%] w-full mx-auto '>
          <video id='video3' className='mx-auto  rounded-xl border border-black'>
            <source src='./videos/video3.mp4' type='video/mp4' />
          </video>
        </div>
        <div ref={videoRefs[3]} className='sticky top-28 z-30  xl:w-[85%] w-full mx-auto'>
          <video id='video4' className='mx-auto  rounded-xl border border-black'>
            <source src='./videos/video4.mp4' type='video/mp4' />
          </video>
        </div>
      </motion.div>
    </div>
  );
}
