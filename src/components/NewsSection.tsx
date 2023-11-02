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

function NewsSection() {
  const newsItems = [
    {
      title: 'Decentralized AI models on Arweave with Co-founder of Fair Protocol Tiago Ferreira',
      date: 'November 2, 2023',
      link: 'https://podcast.onlyarweave.com/episodes/decentralized-ai-models-on-arweave-with-co-founder-of-fair-protocol-tiago-ferreira',
      image: 'public/images/permawebpioneers.png',
    },
    {
      title: 'Fair AI Protocol Unveils "Fair Anime Superhumans" Collection',
      date: 'November 2, 2023',
      link: 'https://permaweb.news/fair-ai-protocol-unveils-fair-anime-superhumans-collection',
      image: 'public/images/superhumans.png',
    },
    {
      title: 'Fair AI Protocol Introduces New Features - PLUS Exclusive Talk with the Team',
      date: 'July 8, 2023',
      link: 'https://permaweb.news/fair-ai-protocol-introduces-new-features-plus-exclusive-interview-with-the-team',
      image: 'public/images/permanews2.jpg',
    },
    {
      title: 'Fair Protocol - Decentralising AI using Arweave and Web3',
      date: 'May 18, 2023',
      link: 'https://permaweb.news/fair-protocol-decentralising-ai-using-arweave',
      image: 'public/images/permanews1.jpg',
    },
    {
      title: 'STAMP Show #4 - Meet Fair Protocol Team',
      date: 'June 15, 2023',
      link: 'https://www.youtube.com/watch?v=pK8yjuCReKQ',
      image: 'public/images/stampShow.png',
    },
  ];

  return (
    <section className='bg-gradient-to-b from-[#e5e6eb] to-[#f4f4f6] pt-16'>
      <div className='container mx-8 xl:mx-auto'>
        <h2 className='text-3xl font-bold text-gray-900 mb-8'>Fair News</h2>
        <div className='flex overflow-x-auto overflow-y-hidden'>
          {newsItems.map((news) => (
            <a
              key={news.title}
              href={news.link}
              target='_blank'
              className='hover:scale-105 transition-transform flex-none w-64 sm:w-72 md:w-80 p-4'
            >
              <div className='bg-white rounded-lg shadow-md h-full'>
                <div className=' overflow-hidden w-full h-48 rounded-t-lg'>
                  <img src={news.image} className='object-cover w-full h-full' alt={news.title} />
                </div>
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-gray-800 mb-2'>{news.title}</h3>
                  <p className='text-gray-600 mb-2'>{news.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
