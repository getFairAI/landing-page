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

import { useRef } from 'react';
import 'swiper/css/pagination';
import 'swiper/css';
import { SwiperRef, Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import ArrorR from '../svg/ArrowR';
import { ArrowLeft } from '../svg/Index';
import { motion } from 'framer-motion';
import { Pagination } from 'swiper/modules';

const exampleDescription = 'Break From Limitations';
const exampleTitle = 'Cencorship-Free AI bot';
const fstyleGap2 = 'flex flex-col-reverse gap-2';
const fStyle2 = 'md:px-[50px] px-[10px] py-12';

export default function Crasual() {
  const Carddata = [
    {
      title: 'Cencorship-Free AI',
      description: exampleDescription,
      src: 'public/images/cracul.png',
      fStyle: fstyleGap2,
      fStyle2: 'px-16 ',
    },
    {
      title: exampleTitle,
      description: exampleDescription,
      fStyle: 'flex flex-col-reverse gap-3',
      fStyle2: fStyle2,
      fStyle3: '',
      discripstion2:
        'Lorem  elit 1. Enim quidem et totam exercitationem, expedita officia eligendi eveniet explicabo voluptate illo nobis cupiditate sequi quos veritatis odit neque dolorum deserunt consequatur. ipsum dolor, sit amet consectetur adipisicing elit. Id neque, exercitationem, dicta corrupti adipisci et, harum',
    },
    {
      title: exampleTitle,
      description: exampleDescription,
      fStyle: 'flex gap-3',
      fStyle2: fStyle2,
      fStyle3: '',
      discripstion2:
        'Lorem  elit 2. Enim quidem et totam exercitationem, expedita officia eligendi eveniet explicabo voluptate illo nobis cupiditate sequi quos veritatis odit neque dolorum deserunt consequatur. ipsum dolor, sit amet consectetur adipisicing elit. Id neque, exercitationem, dicta corrupti adipisci et, harum',
    },
    {
      title: exampleTitle,
      description: exampleDescription,
      fStyle: fstyleGap2,
      fStyle2: fStyle2,
      fStyle3: '',
      discripstion2:
        'Lorem  elit 3. Enim quidem et totam exercitationem, expedita officia eligendi eveniet explicabo voluptate illo nobis cupiditate sequi quos veritatis odit neque dolorum deserunt consequatur. ipsum dolor, sit amet consectetur adipisicing elit. Id neque, exercitationem, dicta corrupti adipisci et, harum',
    },
    {
      title: exampleTitle,
      description: exampleDescription,
      fStyle: fstyleGap2,
      fStyle2: fStyle2,
      fStyle3: '',
      discripstion2:
        'Lorem  elit 4. Enim quidem et totam exercitationem, expedita officia eligendi eveniet explicabo voluptate illo nobis cupiditate sequi quos veritatis odit neque dolorum deserunt consequatur. ipsum dolor, sit amet consectetur adipisicing elit. Id neque, exercitationem, dicta corrupti adipisci et, harum',
    },
  ];

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <section className='bg-[#e5e6eb] pt-8'>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        style={{ direction: 'rtl' }}
        dir='rtl'
        ref={swiperRef}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        className='relative  lg:block hidden justify-center  '
      >
        {Carddata.map((items) => {
          return (
            <SwiperSlide key={items.title} className='p-4 '>
              <Card
                description={items.description}
                title={items.title}
                src={items.src}
                fStyle={items.fStyle}
                fStyle2={items.fStyle2}
                discripstion2={items.discripstion2}
                fStyle3={items.fStyle3}
              />
            </SwiperSlide>
          );
        })}
        <div className='flex  w-full justify-between pl-12 lg:px-11  h-fit top-56  z-10 absolute'>
          <motion.div whileTap={{ scale: 0.9 }}>
            <button
              className='rounded-full h-fit w-10 bg-opacity-75 text-white  duration-500  bg-gray-400 p-1'
              onClick={handlePrev}
            >
              <ArrorR />
            </button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }}>
            <button
              className='rounded-full w-10 h-fit bg-opacity-75 text-white bg-gray-400 p-1'
              onClick={handleNext}
            >
              <ArrowLeft />
            </button>
          </motion.div>
        </div>
      </Swiper>

      <Swiper
        dir='rtl'
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper p-6 relative lg:hidden block'
      >
        {Carddata.map((items) => {
          return (
            <SwiperSlide key={items.title} className='p-4 '>
              <Card
                description={items.description}
                title={items.title}
                src={items.src}
                fStyle={items.fStyle}
                fStyle2={items.fStyle2}
                discripstion2={items.discripstion2}
                fStyle3={items.fStyle3}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className='flex justify-center pb-5'>
        <button className=' text-gray-600 mt-16 border  hover:shadow-md  border-black  rounded-lg px-28 py-3 duration-500 hover:-translate-y-1 hover:bg-[#dcdbdb]'>
          Start Using
        </button>
      </div>
    </section>
  );
}
