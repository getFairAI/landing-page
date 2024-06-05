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

import { useEffect, useRef, useState } from 'react';
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
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

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
        initial={{ opacity: 0.4, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.4, type: 'smooth' }}
        key={`tweetIndex-${index}`}
        className='border-4 border-neutral-600 rounded-2xl h-fit w-full max-w-[80vw]'
      >
        <CustomTweet id={tweetId} />
      </motion.div>
    );
  });

  const refereceScroll = useRef(null);

  const [jokeDragButtonBeingDragged, setJoke] = useState(false);

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
            viewport={{ amount: 0.3 }}
            className='flex flex-col gap-10 card-glasspane-container w-[90%] max-w-[1800px] items-center'
          >
            <div className='flex justify-center flex-col items-center'>
              <h1 className='text-2xl md:text-4xl w-fit dark-text flex flex-wrap items-center justify-center px-10 gap-3'>
                <span className='text-with-dark-bg very-rounded'>Everyone's</span>
                <span>AI Marketplace.</span>
              </h1>
            </div>

            <div ref={refereceScroll} className='flex w-full max-w-[1300px] overflow-hidden'>
              <motion.div drag='x' dragConstraints={refereceScroll} dragElastic={1}>
                <div
                  className='flex flex-nowrap gap-2 xl:gap-10 justify-center px-0 md:px-7 pb-2 w-full md:h-fit sm:h-full'
                  data-theme='light'
                >
                  {renderAllTweets}
                </div>
              </motion.div>
            </div>

            <motion.div
              whileTap={{ scale: 1 }}
              whileHover={{
                scale: 1.05,
              }}
              drag
              dragSnapToOrigin={true}
              onDragStart={() => {
                setJoke(true);
              }}
              onDragEnd={() => {
                setJoke(false);
              }}
              className='flex items-center flex-nowrap dark-text text-sm md:text-lg bg-neutral-700 text-white rounded-3xl p-2 font-semibold'
            >
              <ArrowLeftRoundedIcon />
              <span
                className={`${
                  jokeDragButtonBeingDragged ? 'opacity-0' : 'opacity-100'
                } transition-all absolute left-[50%] translate-x-[-50%]`}
              >
                Drag 'em Around!
              </span>
              <span
                className={`${
                  jokeDragButtonBeingDragged ? 'opacity-100' : 'opacity-0'
                } transition-all`}
              >
                Hey! Not me! The X's! (Tweets?)
              </span>
              <ArrowRightRoundedIcon />
            </motion.div>

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

            {/* <div className='flex-1 min-w-[300px] max-w-full flex justify-center'>
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
              </div> */}
          </motion.div>
        </div>
      </section>
    </>
  );
}
