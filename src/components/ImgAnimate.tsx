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

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
const yScrollConfig = -0.5;

type RefType = React.RefObject<HTMLDivElement>;

export default function ImgAnimate() {
  const scrollRef: RefType = useRef(null);
  // const { scrollYProgress } = useScroll({
  //     target: scrollRef,
  //     offset: ["1 50", "1 1"],

  // })
  const controls = useAnimation();
  const handleScroll = () => {
    const scrollY = window.scrollY;
    controls.start({ y: scrollY * yScrollConfig }).catch((error: Error) => {
      console.log(error);
    });
  };
  useEffect(() => {
    controls.start({ y: 0 }).catch((error: Error) => {
      console.log(error);
    });
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      animate={controls}
      initial={{ y: 0, translateY: 0, opacity: 0 }}
      transition={{ duration: 0.0 }}
      style={{
        // scale: scrollYProgress,
        // transition: scrollYProgress,
        // translateY: 50,
        perspective: '1200px',
      }}
      whileInView={{ translateY: 10, scaleX: 1.0, opacity: 1 }}
      viewport={{ root: scrollRef }}
      className='flex justify-center '
    >
      <img
        src='public\images\animate.webp'
        className='w-[85%] opacity-50 skew-x-12 '
        style={{ transform: 'rotateX(20deg)' }}
        alt=''
      />
    </motion.div>
  );
}
