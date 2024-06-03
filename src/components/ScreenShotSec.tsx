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

import { wrap } from 'popmotion';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

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

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        /* opacity: 0 */
        display: 'none',
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      /*  opacity: 1, */
      display: 'flex',
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        /* opacity: 0 */
        display: 'none',
      };
    },
  };

  /**
   * Experimenting with distilling swipe offset and velocity into a single variable, so the
   * less distance a user has swiped, the more velocity they need to register as a swipe.
   * Should accomodate longer swipes and short flicks without having binary checks on
   * just distance thresholds and velocity > 0.
   */
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, tweetIds.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      {/* <style>
        {`.Animate{ animation: rotate 1.5s infinite;transition: transform 0.6s; cubic-bezier(0.8, 0.14, 0.42, 0.72) } @keyframes rotate { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg);  transform-style: preserve-3d;    } } `}
      </style> */}

      <style>
        {`
          .react-tweet-theme {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
        `}
      </style>
      <section>
        <div className='mt-10 md:mt-40 flex justify-center'>
          <div className='flex flex-col gap-10 card-glasspane-container w-[90%] max-w-[1800px]'>
            <div className='flex justify-center'>
              <h1 className='text-2xl md:text-4xl w-fit dark-text flex flex-wrap items-center justify-center px-10 gap-3'>
                <span className='text-with-dark-bg very-rounded'>Everyone's</span>
                <span>AI Marketplace.</span>
              </h1>
            </div>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{
                  x: { type: 'spring', stiffness: 50, damping: 10 },
                  opacity: { duration: 0.2 },
                }}
                drag='x'
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                style={{ minHeight: '200px' }}
              >
                <div
                  className='flex flex-wrap gap-5 md:gap-10 justify-center px-0 md:px-10 pb-0 md:pb-10 w-full rounded-2xl md:h-fit sm:h-full'
                  data-theme='light'
                >
                  <CustomTweet id={tweetIds[imageIndex]} />
                </div>
              </motion.div>
            </AnimatePresence>
            <div className='absolute right-4 top-2/4 hidden sm:flex' onClick={() => paginate(1)}>
              <ChevronRightOutlinedIcon className='cursor-pointer' />
            </div>
            <div className='absolute left-4 top-2/4 hidden sm:flex' onClick={() => paginate(-1)}>
              <ChevronLeftOutlinedIcon className='cursor-pointer' />
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
          </div>
        </div>
      </section>
    </>
  );
}
