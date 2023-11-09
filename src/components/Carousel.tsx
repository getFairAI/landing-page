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

import 'swiper/css/pagination';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

export default function Carousel() {
  const CardData = [
    {
      title: 'Censorship-Free AI',
      description:
        'Break free from limitations and express yourself openly in our inclusive AI marketplace. Experience a space without censorship, where diverse voices innovate and collaborate.',
    },
    {
      title: 'Permanent and Immutability',
      description:
        'Powered by the Arweave blockchain, our solution ensures the data is available forever and immutable. The models, scripts, data, and our front end are securely stored on the Arweave blockchain, guaranteeing long-term preservation.',
    },
    {
      title: 'All You Need in One Place',
      description:
        'Say goodbye to limitations and subscriptions for individual models and jumping between platforms. Explore a diverse range of AI models for image, audio, and more, all conveniently available in one place.',
    },
    {
      title: 'Empower Open-source AI',
      description:
        'Monetise your work, skills, and resources to fuel innovation or support open-source collaboration and shape the future of AI.',
    },
    {
      title: 'Own Your Data',
      description:
        "Take control of your data's value. By transforming the insights generated by the AI models into Non-Fungible Tokens (NFTs), you gain exclusive ownership. Unlock the true potential data and maximise its value like never before.",
    },
  ];

  const initialSlideIndex = 2;

  return (
    <div className='bg-[#e5e6eb]'>
      <section className='mx-8 xl:mx-auto pt-8'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={false}
          navigation
          pagination={{ clickable: true }}
          initialSlide={initialSlideIndex}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {CardData.map((items) => (
            <SwiperSlide
              className='mb-20 h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4'
              key={items.title}
            >
              <Card title={items.title} description={items.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className='flex justify-center pb-5'>
        <button className=' text-gray-600 mt-16 border  hover:shadow-md  border-black  rounded-lg px-28 py-3 duration-500 hover:-translate-y-1 hover:bg-[#dcdbdb]'>
          Start Using
        </button>
      </div>
    </div>
  );
}
