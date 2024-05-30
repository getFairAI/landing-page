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
import Teams from './components/Teams';
import VideoCard from './components/VideoCard';
import NewsSection from './components/NewsSection';
import { useEffect } from 'react';
import { Box } from '@mui/material';

function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js';
    script.setAttribute('data-button-color', '#000000');
    script.setAttribute('data-button-text-color', '#FFFFFF');
    script.setAttribute('data-site', 'https://blog.getfair.ai/');
    script.async = true;
    const lastdiv = document.getElementById('lastdiv');
    lastdiv?.appendChild(script /*  document.getElementById('lastdiv')?.parentNode! */);

    return () => {
      lastdiv?.removeChild(script);
    };
  }, []);
  return (
    <div className='z-10'>
      <JamboSection />
      <VideoCard />
      <ScreenShotSec />
      {/*< Carousel /> */}
      <NewsSection />
      <Teams />
      <Box
        id={'lastdiv'}
        sx={{
          minHeight: '58px',
          width: '100%',
          maxWidth: '444px',
          position: 'absolute',
          left: '50%',
          right: '50%',
          transform: 'translate(-50%, -50%)',
          pb: '36px',
        }}
      ></Box>
    </div>
  );
}

export default Home;
