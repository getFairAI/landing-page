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

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Suspense } from 'react';
import { Tweet } from 'react-tweet/api';
import {
  type TweetProps,
  TweetNotFound,
  TweetSkeleton,
  TweetActions,
  TweetInReplyTo,
} from 'react-tweet';

import {
  type TwitterComponents,
  TweetContainer,
  TweetHeader,
  TweetBody,
  TweetInfo,
  enrichTweet,
} from 'react-tweet';

// icons
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

type Props = {
  tweet: Tweet;
  components?: TwitterComponents;
};

export const MyTweet = ({ tweet: t, components }: Props) => {
  const tweet = enrichTweet(t);
  return (
    <TweetContainer>
      <TweetHeader tweet={tweet} components={components} />
      {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />}
      <TweetBody tweet={tweet} />
      {/* {tweet.mediaDetails?.length ? (
        <TweetMedia tweet={tweet} components={components} />
      ) : null} */}
      <TweetInfo tweet={tweet} />
      <TweetActions tweet={tweet} />
      {/* We're not including the `TweetReplies` component that adds the reply button */}
    </TweetContainer>
  );
};

const TweetContent = ({ id, components }: TweetProps) => {
  const [tweet, setTweet] = useState<Tweet | null>(null);

  useEffect(() => {
    void (async () => {
      if (id) {
        const response = await fetch('https://react-tweet.vercel.app/api/tweet/' + id);
        const { data: t } = (await response.json()) as { data: Tweet };
        setTweet(t);
      } else {
        // ignore
      }
    })();
  }, [id]);

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound />;
  }

  return <MyTweet tweet={tweet} components={components} />;
};

export const CustomTweet = ({ fallback = <TweetSkeleton />, ...props }: TweetProps) => (
  <Suspense fallback={fallback}>
    <TweetContent {...props} />
  </Suspense>
);

export default function ScreenShotSec() {
  const tweetIds = [
    '1677415435958992896',
    '1743286414861799782',
    '1659033512102490114',
    '1766101540664721516',
    '1754490183825625253',
    '1747968330651303943',
    '1747486157317849594',
    '1745484835286622697',
    '1744751004195930481',
    '1743286414861799782',
    '1744751004195930481',
    '1727421341312405810',
    '1722403320239644970',
    '1720484268109959171',
    '1711387046688755916',
  ];

  /**
   * Experimenting with distilling swipe offset and velocity into a single variable, so the
   * less distance a user has swiped, the more velocity they need to register as a swipe.
   * Should accomodate longer swipes and short flicks without having binary checks on
   * just distance thresholds and velocity > 0.
   */

  const renderAllTweets = tweetIds.map((tweetId, index) => {
    return (
      <motion.div
        initial={{ opacity: 0.2, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.4, type: 'smooth' }}
        key={`tweetIndex-${index}`}
        className='rounded-2xl shadow-md h-fit w-full max-w-[80vw]'
      >
        <CustomTweet id={tweetId} />
      </motion.div>
    );
  });

  const scrollNews = (direction: string) => {
    const newsSectionDiv = document.getElementById('tweets-screenshots-scrollable-section');
    if (newsSectionDiv) {
      if (direction === 'right') {
        newsSectionDiv.scroll({
          left: newsSectionDiv.clientWidth + newsSectionDiv.scrollLeft,
          behavior: 'smooth',
        });
      } else {
        newsSectionDiv.scroll({
          left: -(newsSectionDiv.clientWidth - newsSectionDiv.scrollLeft),
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <>
      <style>
        {`
          .react-tweet-theme {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
        `}
      </style>
      <section className='mt-16 xl:mt-40'>
        <div className='flex justify-center'>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, type: 'smooth' }}
            viewport={{ amount: 0.3, once: true }}
            className='flex flex-col gap-10 card-glasspane-container w-[90%] max-w-[1800px] items-center'
          >
            <div className='flex justify-center flex-col w-full'>
              <h1 className='text-2xl md:text-4xl w-fit dark-text flex flex-wrap items-center gap-4 justify-center lg:justify-start'>
                <span className='text-with-dark-bg very-rounded shadow-lg'>
                  <span className='p-2'>Everyone's</span>
                </span>
                <span className='font-medium'>AI Marketplace</span>
              </h1>
            </div>

            <div className='w-full flex justify-center items-center flex-nowrap gap-5'>
              <div
                className='hover:scale-110 transition-all hidden md:flex justify-center flex-auto'
                onClick={() => scrollNews('left')}
              >
                <ArrowCircleLeftOutlinedIcon
                  className='cursor-pointer'
                  style={{ height: '50px', width: '50px', opacity: 0.7 }}
                />
              </div>

              <div
                id='tweets-screenshots-scrollable-section'
                className='flex flex-auto w-full max-w-[1300px] overflow-x-auto overflow-y-hidden py-0 md:py-5'
              >
                <div
                  className='flex flex-nowrap gap-2 xl:gap-6 px-0 md:px-2 pb-10 w-full'
                  data-theme='light'
                >
                  {renderAllTweets}
                </div>
              </div>

              <div
                className='hover:scale-110 transition-all hidden md:flex justify-center flex-auto'
                onClick={() => scrollNews('right')}
              >
                <ArrowCircleRightOutlinedIcon
                  className='cursor-pointer'
                  style={{ height: '50px', width: '50px', opacity: 0.7 }}
                />
              </div>
            </div>

            <div className='w-full flex justify-center gap-5 md:hidden'>
              <div className='hover:scale-110 transition-all' onClick={() => scrollNews('left')}>
                <ArrowCircleLeftOutlinedIcon
                  className='cursor-pointer'
                  style={{ height: '50px', width: '50px', opacity: 0.7 }}
                />
              </div>
              <div className='hover:scale-110 transition-all' onClick={() => scrollNews('right')}>
                <ArrowCircleRightOutlinedIcon
                  className='cursor-pointer'
                  style={{ height: '50px', width: '50px', opacity: 0.7 }}
                />
              </div>
            </div>

            <div className='w-full flex flex-wrap gap-5 justify-center dark-text'>
              <h2 className='text-md md:text-xl flex items-center'>
                <img
                  src='./fair-protocol-face-transparent.png'
                  alt=''
                  className='invert opacity-70 w-[40px] mr-3'
                />
                Share your experience
              </h2>
              <a
                href='https://twitter.com/getFairAI'
                target='_blank'
                className='text-bold button-big-text outlined-only smaller'
              >
                @getFairAI
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
