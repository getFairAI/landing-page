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

import { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { LinksContext } from '../context/links';

const NewsletterPreview = () => {
  return (
    <motion.div className='flex justify-center'>
      <img
        src={'./images/solutions.png'}
        className='w-[85%] opacity-50 rounded-2xl border-4 border-neutral-700 shadow-lg hover:skew-y-12'
        style={{ transform: 'rotateX(20deg)' }}
        alt=''
      />
    </motion.div>
  );
};

const Newsletter = () => {
  const { appLink } = useContext(LinksContext);

  useEffect(() => {
    const subscribeDiv = document.getElementById('subscribe-email-div');
    if (subscribeDiv) {
      const script = document.createElement('script');
      subscribeDiv.appendChild(
        script /*  document.getElementById('subscribe-email-div')?.parentNode! */,
      );

      script.src = 'https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js';
      script.setAttribute('data-button-color', '#3aaaaa');
      script.setAttribute('data-button-text-color', '#FFFFFF');
      script.setAttribute('data-site', 'https://blog.getfair.ai/');
      script.async = true;

      return () => {
        subscribeDiv?.removeChild(script);
      };
    } else {
      // ignore
    }
  }, []);

  return (
    <section className='flex justify-center mt-16 xl:mt-40 mb-20'>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, type: 'smooth' }}
        viewport={{ amount: 0.3, once: true }}
        className='flex flex-wrap-reverse sm:flex-nowrap gap-10 w-[90%] max-w-[1800px] items-start justify-center'
      >
        {/* <div className='w-full flex flex-col justify-end h-fit sm:h-[80%]'>
          {/* <div className='mb-3 font-bold'>
          <div className='py-1 text-2xl md:text-4xl'>
            <h1 className='ml-3 dark-text font-[600] leading-normal'>Follow our <span className='text-[#3aaaaa] dark-text font-[600] leading-normal'>Journey</span></h1>
          </div>
        </div>

          <div className='w-full max-w-full md:max-w-[450px]'>
          <Box
            id={'subscribe-email-div'}
            sx={{
              width: '100%',
            }}
          ></Box>
        </div>
        </div> */}

        <div className='w-full flex flex-col gap-8 max-w-[800px] items-center'>
          <NewsletterPreview />
          <a href={appLink} target='blank'>
            <div className='plausible-event-name=Open+App+Bottom+Click'>
              <span className='button-big-text w-fit'>
                Start now <ArrowCircleRightRoundedIcon />
              </span>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
