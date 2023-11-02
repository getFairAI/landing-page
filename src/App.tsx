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

import Crasual from './components/Crasual';
import Header from './components/Header';
import ImgAnimate from './components/ImgAnimate';
import JamboSection from './components/JamboSection';
import ScreenShotSec from './components/ScreenShotSec';
import Teams from './components/Teams';
import VideoCard from './components/VideoCard';
import Footer from './components/Footer';
import NewsSection from './components/NewsSection';

function App() {
  return (
    <section className='w-full min-h-screen bg-[#f4f4f6]   relative'>
      <Header />
      <JamboSection />
      <ImgAnimate />
      <VideoCard />
      <ScreenShotSec />
      <Crasual />
      <NewsSection />
      <Teams />
      <Footer />
    </section>
  );
}

export default App;
