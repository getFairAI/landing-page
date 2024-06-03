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

import JamboSection from './components/JamboSection';
import ScreenShotSec from './components/ScreenShotSec';
import VideoCard from './components/VideoCard';
import NewsSection from './components/NewsSection';
import { useEffect } from 'react';
import { Box } from '@mui/material';

// icons
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

// styles
import './scss/universal-styles.scss';
import { Faq } from './components/faq';

function Home() {
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
    <div className='z-10'>
      <JamboSection />
      <VideoCard />
      <ScreenShotSec />
      <NewsSection />
      <Faq />
      <div className='w-full flex justify-center mt-10'>
        <div className='flex flex-col justify-center w-full items-center my-10 max-w-[80%] '>
          <div className='mb-3 text-with-dark-bg font-bold'>
            <div className='py-1 text-md md:text-xl'>
              <FavoriteRoundedIcon style={{ verticalAlign: 'text-bottom' }} />
              <span className='ml-3'>Subscribe and stay updated!</span>
            </div>
          </div>

          <div className='w-full max-w-full md:max-w-[450px] border-4 rounded-xl border-gray-700'>
            <Box
              id={'subscribe-email-div'}
              sx={{
                width: '100%',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            ></Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
