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

import { useContext, useState } from 'react';
import ToggleOpen from '../svg/ToggleOpen';
import Xmark from '../svg/Xmark';
import { easeOut, motion } from 'framer-motion';
import HeaderLogo from '../svg/HeaderLogo';
import SocialsHeader from './SocialsHeader';
import { WHITEPAPER } from '../constants';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import HeaderMenuButton from './HeaderMenuHamburger';

// import needed scss styles
import '../scss/header-styles.scss';
import { LinksContext } from '../context/links';

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
      <div className='flex justify-between items-center px-8 lg:px-10 py-4'>
        <LogoFun />
        <HeaderLeftBtn isOpen={isOpen} />

        <div className='block lg:hidden'>
          <HeaderMenuButton />
        </div>
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
  const { appLink } = useContext(LinksContext);

  return (
    <div
      className={`flex lg:flex-row flex-col gap-3 lg:pt-0 pt-12 items-center lg:px-0 px-3 ${
        isOpen
          ? 'lg:flex hidden '
          : 'absolute lg:top-0 top-16 left-0 h-[100vh] lg:w-fit w-full menu-open-animation'
      }`}
    >
      <SocialsHeader />
      <a href={WHITEPAPER} target='blank'>
        <button className='font-semibold rounded-xl text-gray-600 plausible-event-name=Docs+Click hover:bg-gray-200 hover:text-black py-1 px-3 duration-200'>
          Docs
        </button>
      </a>

      <a href={appLink} target='blank'>
        <div className='plausible-event-name=Open+App+Click'>
          <span className='button-big-text smaller'>
            Start now <ArrowCircleRightRoundedIcon />
          </span>
        </div>
      </a>
    </div>
  );
};
