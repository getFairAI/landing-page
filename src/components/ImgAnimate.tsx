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

import { motion } from 'framer-motion';

// const yScrollConfig = -0.5;

// type RefType = React.RefObject<HTMLDivElement>;

export default function ImgAnimate() {
  // const scrollRef: RefType = useRef(null);
  // const controls = useAnimation();

  // useEffect(() => {
  //   controls.start({ y: 0 }).catch((error: Error) => {
  //     console.log(error);
  //   });
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     controls.start({ y: scrollY * yScrollConfig }).catch((error: Error) => {
  //       console.log(error);
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      animate={{ opacity: 1 }}
    >
      <img
        src={'./blurred_asbtract_bg.jpg'}
        className='opacity-50 object-fill w-[100vw] h-[100vh]'
      />
    </motion.div>
  );
}
