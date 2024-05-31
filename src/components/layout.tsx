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

import { ReactElement } from 'react';
import Footer from './Footer';
import Header from './Header';
import ImgAnimate from '../components/ImgAnimate';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <section className='w-full min-h-screen'>
      <div className='sticky top-0 left-0 -z-10'>
        <div className='absolute top-0 left-0 w-full h-[100vh]'>
          <ImgAnimate />
        </div>
      </div>
      <div className='sticky top-0 left-0 z-50 w-full blurred-backdrop'>
        <Header />
      </div>
      <div className='z-10'>
        {children}
        <Footer />
      </div>
    </section>
  );
};

export default Layout;
