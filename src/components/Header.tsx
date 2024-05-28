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

import { useState } from 'react';
import ToggleOpen from '../svg/ToggleOpen';
import Xmark from '../svg/Xmark';
import { easeOut, motion } from 'framer-motion';
import HeaderLogo from '../svg/HeaderLogo';
import SocialsHeader from './SocialsHeader';
import { FAIR_MARKETPLACE, WHITEPAPER } from '../constants';

// import needed scss styles
import '../scss/header-styles.scss';

const initialConfig = {
  opacity: 0,
  y: -10,
};

const animateConfig = {
  opacity: 1,
  y: 0,
};

const transitionConfig = {
  duration: 0.3,
  delay: 0.3,
  easeOut,
};

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <motion.div initial={initialConfig} animate={animateConfig} transition={transitionConfig}>
      <div className='flex justify-between items-center lg:px-10 '>
        <LogoFun />
        <div>
          {isOpen ? (
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className='w-7 h-fit lg:hidden block'
            >
              <ToggleOpen />
            </button>
          ) : (
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className='w-7 h-fit lg:hidden block'
            >
              <Xmark />
            </button>
          )}
        </div>
        <HeaderLeftBtn isOpen={isOpen} />
      </div>
    </motion.div>
  );
}

const LogoFun = () => {
  return (
    <div className='logo-wrapper'>
      <div className='project-logo'>
        <HeaderLogo />
      </div>
    </div>
  );
};
const HeaderLeftBtn = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`flex lg:flex-row flex-col gap-3 lg:pt-0 pt-12 items-center lg:bg-transparent bg-white  lg:relative lg:px-0 px-3 ${
        isOpen
          ? 'lg:flex hidden '
          : 'lg:z-0 z-20 lg:bg-opacity-0 bg-opacity-80 lg:relative absolute lg:top-0 top-16  h-full lg:w-fit w-full'
      }`}
    >
      <SocialsHeader />
      <a href={WHITEPAPER} target='blank'>
        <button className='px-5 font-medium text-gray-600 plausible-event-name=Docs+Click'>
          Docs
        </button>
      </a>
      <a href={FAIR_MARKETPLACE} target='blank'>
        <button className='border border-black rounded-lg px-5 bg-gray-50 font-medium w-full lg:py-0 py-3 duration-200 plausible-event-name=Open+App+Click'>
          Open App
        </button>
      </a>
    </div>
  );
};
