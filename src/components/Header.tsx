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
import { motion } from 'framer-motion';
import HeaderLogo from '../svg/HeaderLogo';

const initialConfig = {
  scale: 0.5,
  opacity: 0,
  x: 250,
};

const animateConfig = {
  scale: 1,
  opacity: 1,
  x: 0,
};

const transitionConfig = {
  duration: 2.5,
  delay: 2,
  ease: [0, 0.71, 0.2, 1.01],
};

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <motion.div initial={initialConfig} animate={animateConfig} transition={transitionConfig}>
      <div className='flex justify-between h-full  items-center lg:px-10 pr-3 '>
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
    <div className=' lg:px-14 px-4  lg:py-6 py-4'>
      <HeaderLogo />
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
      <button className=' px-5 font-medium pb-[3px] text-gray-500'>Docs</button>
      <button className='border border-black rounded-lg px-5   bg-gray-50  font-medium  w-full lg:py-0 py-3 text-gray-500 hover:scale-105  duration-500'>
        Open App
      </button>
    </div>
  );
};
