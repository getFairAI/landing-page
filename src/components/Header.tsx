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

import { useContext } from 'react';
import { easeOut, motion } from 'framer-motion';
import HeaderLogo from '../svg/HeaderLogo';
import SocialsHeader from './SocialsHeader';
import { WHITEPAPER } from '../constants';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import HeaderMenuButton from './HeaderMenuHamburger';

import { useSearchParams } from 'react-router-dom';

// import needed scss styles
import '../scss/header-styles.scss';
import { LinksContext } from '../context/links';
import { Tooltip } from '@mui/material';

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
  const [urlParams, setUrlParams] = useSearchParams();

  const handleUrlParamsSet = (newParam: string) => {
    setUrlParams({ ['userType']: newParam });
  };

  const currentUserType = urlParams.get('userType') ?? 'business';

  return (
    <motion.div initial={initialConfig} animate={animateConfig} transition={transitionConfig}>
      <div className='flex justify-between flex-wrap items-center px-8 lg:px-10 py-4'>
        <div className={currentUserType === 'developer' ? 'invert' : ''}>
          <LogoFun />
        </div>
        <HeaderLeftBtn />

        <div className='flex gap-3 flex-wrap justify-center flex-grow-1 xl:absolute top-0 xl:top-3 left-0 xl:left-[50%] translate-x-0 xl:translate-x-[-50%] w-full xl:w-fit'>
          <a
            className='cursor-pointer'
            onClick={() => {
              handleUrlParamsSet('user');
            }}
          >
            <Tooltip
              classes={{ tooltip: 'tooltip-class' }}
              title='I want to explore AI! Easy and code-free.'
            >
              <div className='plausible-event-name=Im+A+User+Click w-fit'>
                <span
                  className={
                    'button-big-text smaller ' +
                    (currentUserType !== 'user' ? 'outlined-only' : '') +
                    (currentUserType === 'developer' ? ' dark-mode' : '')
                  }
                >
                  User
                </span>
              </div>
            </Tooltip>
          </a>
          <a
            className='cursor-pointer'
            onClick={() => {
              handleUrlParamsSet('business');
            }}
          >
            <Tooltip
              classes={{ tooltip: 'tooltip-class' }}
              title='I want smarter solutions that help my business grow.'
            >
              <div className='plausible-event-name=Im+A+User+Click w-fit'>
                <span
                  className={
                    'button-big-text smaller ' +
                    (currentUserType !== 'business' ? ' outlined-only' : '') +
                    (currentUserType === 'developer' ? ' dark-mode' : '')
                  }
                >
                  Business
                </span>
              </div>
            </Tooltip>
          </a>
          <a
            className='cursor-pointer'
            onClick={() => {
              handleUrlParamsSet('developer');
            }}
          >
            <Tooltip
              classes={{ tooltip: 'tooltip-class' }}
              title='I am an AI developer ready to solve real challenges and get paid.'
            >
              <div className='plausible-event-name=Im+A+User+Click w-fit'>
                <span
                  className={
                    'button-big-text smaller ' +
                    (currentUserType !== 'developer' ? ' outlined-only' : ' dark-mode')
                  }
                >
                  AI Developer
                </span>
              </div>
            </Tooltip>
          </a>
        </div>

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

const HeaderLeftBtn = () => {
  const { appLink } = useContext(LinksContext);
  const [urlParams] = useSearchParams();
  const currentUserType = urlParams.get('userType') ?? 'business';

  return (
    <div
      className={`lg:flex-row flex-col gap-3 lg:pt-0 pt-12 items-center lg:px-0 px-3 hidden lg:flex`}
    >
      <div className={currentUserType === 'developer' ? 'invert' : ''}>
        <SocialsHeader />
      </div>
      <a href={WHITEPAPER}>
        <button
          className={
            'font-semibold rounded-xl plausible-event-name=Docs+Click hover:bg-gray-200 hover:text-black py-1 px-3 duration-200 ' +
            (currentUserType === 'developer' ? 'text-white' : 'text-gray-600')
          }
        >
          Docs
        </button>
      </a>

      <a href={appLink}>
        <div className='plausible-event-name=Open+App+Click'>
          <span className='button-big-text smaller'>
            Start now <ArrowCircleRightRoundedIcon />
          </span>
        </div>
      </a>
    </div>
  );
};
