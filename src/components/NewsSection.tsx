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

// icons
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { motion } from 'framer-motion';

function NewsSection() {
  const newsItems = [
    {
      title: 'Companies can now create AI requests on FairAI marketplace',
      date: 'May 17, 2024',
      link: 'https://www.techstars.com/newsroom/announcing-the-techstars-web3-class-of-2024',
      image: './images/companies-request-solutions.png',
    },
    {
      title: 'FairAI on April: Techstars London Weeks and more!',
      date: 'May 12, 2024',
      link: 'https://blog.getfair.ai/fairai-on-april',
      image: './images/fairai-on-april.jpg',
    },
    {
      title: 'EP.256: Common Misconceptions About Web3',
      date: 'April 12, 2024',
      link: 'https://x.com/PeteTownsendNV/status/1778763468247581110',
      image: './images/mns-episode256.jpeg',
    },
    {
      title: 'FairAI: The importance of Curators and their role in our marketplace',
      date: 'April 10, 2024',
      link: 'https://blog.getfair.ai/fairai-the-importance-of-curators-and-their-role-in-our-marketplace/',
      image: './images/fairai-importance-curators-card-image.png',
    },
    {
      title: 'FairAI on March: Joining Techstars and more!',
      date: 'April 2, 2024',
      link: 'https://blog.getfair.ai/fairai-newsletter-march/',
      image: './images/techstars-web3.jpeg',
    },
    {
      title: 'EP.252: Meet the Techstars Web3 Class of 2024',
      date: 'March 15, 2024',
      link: 'https://www.moneyneversleeps.ie/252-meet-the-techstars-web3-class-of-2024/',
      image: './images/moneyneversleeps.jpeg',
    },
    {
      title: 'Announcing the Techstars Web3 Class of 2024',
      date: 'March 15, 2024',
      link: 'https://www.techstars.com/newsroom/announcing-the-techstars-web3-class-of-2024',
      image: './images/techstars-web3.jpeg',
    },
    {
      title: 'Introducing FairAI',
      date: 'March 6, 2024',
      link: 'https://blog.getfair.ai/introducing-fairai/',
      image: './images/first-blog-card-image.png',
    },
    {
      title: '2023 Arweave Ecosystem Report',
      date: 'February 28, 2024',
      link: 'https://permaweb.news/2023-arweave-ecosystem-report',
      image: './images/permanews3.jpg',
    },
    {
      title: 'Decentralized AI models on Arweave with Co-founder of Fair Protocol Tiago Ferreira',
      date: 'November 2, 2023',
      link: 'https://podcast.onlyarweave.com/episodes/decentralized-ai-models-on-arweave-with-co-founder-of-fair-protocol-tiago-ferreira',
      image: './images/permawebpioneers.png',
    },
    {
      title: 'Fair AI Protocol Unveils "Fair Anime Superhumans" Collection',
      date: 'November 2, 2023',
      link: 'https://permaweb.news/fair-ai-protocol-unveils-fair-anime-superhumans-collection',
      image: './images/superhumans.png',
    },
    {
      title: 'Fair AI Protocol Introduces New Features - PLUS Exclusive Talk with the Team',
      date: 'July 8, 2023',
      link: 'https://permaweb.news/fair-ai-protocol-introduces-new-features-plus-exclusive-interview-with-the-team',
      image: './images/permanews2.jpg',
    },
    {
      title: 'Fair Protocol - Decentralising AI using Arweave and Web3',
      date: 'May 18, 2023',
      link: 'https://permaweb.news/fair-protocol-decentralising-ai-using-arweave',
      image: './images/permanews1.jpg',
    },
    {
      title: 'STAMP Show #4 - Meet Fair Protocol Team',
      date: 'June 15, 2023',
      link: 'https://www.youtube.com/watch?v=pK8yjuCReKQ',
      image: './images/stampShow.png',
    },
  ];

  const scrollNews = (direction: string) => {
    const newsSectionDiv = document.getElementById('news-horizontal-scroll');
    if (newsSectionDiv) {
      if (direction === 'right') {
        newsSectionDiv.scroll({
          left: newsSectionDiv.clientWidth + newsSectionDiv.scrollLeft,
          behavior: 'smooth',
        });
      } else {
        newsSectionDiv.scroll({
          left: -newsSectionDiv.clientWidth,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section className='mt-40 flex justify-center'>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, type: 'smooth' }}
        viewport={{ amount: 0.3 }}
        className='container card-glasspane-container w-[90%] max-w-[1800px] p-14'
      >
        <div className='flex justify-center md:justify-between flex-wrap mb-8 gap-5'>
          <div className='text-with-dark-bg very-rounded font-bold w-fit'>
            <h2 className='flex text-2xl md:text-3xl py-1'>
              <img
                src='./fair-protocol-face-transparent.png'
                className='w-[30px] md:w-[50px] object-contain mr-3 md:mr-5'
              />
              <span>FairAI News</span>
            </h2>
          </div>
          <a
            href='https://blog.getfair.ai/'
            target='_blank'
            className='button-big-text cursor-pointer'
          >
            Read more <ArrowCircleRightRoundedIcon />
          </a>
        </div>
        <div
          className='flex overflow-x-auto overflow-y-hidden gap-5 px-0 md:px-5'
          id='news-horizontal-scroll'
        >
          {newsItems.map((news) => (
            <a
              key={news.title}
              href={news.link}
              target='_blank'
              className={`py-10 hover:scale-110 transition-transform duration-300 flex-none w-64 sm:w-72 md:w-80 plausible-event-name=News+Click plausible-event-link=${news.link}`}
            >
              <div className='bg-white rounded-2xl shadow-md h-full overflow-hidden'>
                <div className='overflow-hidden w-full h-48 shadow-md shadow-neutral-300'>
                  <img src={news.image} className='object-cover w-full h-full' alt={news.title} />
                </div>
                <div className='p-4 flex flex-col justify-between h-[180px]'>
                  <h3 className='text-lg font-semibold text-gray-700'>{news.title}</h3>
                  <div className='text-gray-400 font-medium flex justify-between w-full'>
                    <span>{news.date}</span>
                    <span>
                      <OpenInNewRoundedIcon />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className='flex justify-center md:justify-end w-full gap-5 flex-wrap'>
          <span
            className='opacity-70 hover:scale-110 transition-all duration-200'
            onClick={() => scrollNews('left')}
          >
            <ArrowCircleLeftOutlinedIcon
              className='cursor-pointer'
              style={{ height: '50px', width: '50px' }}
            />
          </span>
          <span
            className='opacity-70 hover:scale-110 transition-all duration-200'
            onClick={() => scrollNews('right')}
          >
            <ArrowCircleRightOutlinedIcon
              className='cursor-pointer'
              style={{ height: '50px', width: '50px' }}
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default NewsSection;
