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

// import styles
import '../scss/video-card-styles.scss';
import { useSearchParams } from 'react-router-dom';

function GetCard1({ userType }: { userType: string }) {
  return (
    <>
      <div
        className={
          'px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center lg:items-start ' +
          (userType === 'business' ? 'dark-mode' : '')
        }
      >
        <div className='card-title shadow-lg'>
          {userType === 'user' && <>Reusable and customizable.</>}
          {userType === 'business' && <>Powerful and dependable.</>}
          {userType === 'developer' && <>Reuse, expand, costumize.</>}
        </div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          {userType === 'user' && (
            <>
              Use existing AI solutions. <br /> Tune them to fit your specific needs.
            </>
          )}
          {userType === 'business' && (
            <>
              Get instant access to many pre-configured and ready to use AI solutions. <br /> Tune
              them to your company's specific needs.
            </>
          )}
          {userType === 'developer' && (
            <>
              Use, create and expand on top of existing great open-source AI solutions. <br /> Tune
              them to fit your specific needs or the ones of your clients. <br /> Quickly develop
              solutions without much effort.
            </>
          )}
        </div>
      </div>
      <div className='px-4 card-section mx-auto'>
        <img
          id='solutions'
          className='rounded-3xl border-4 border-neutral-700 shadow-xl'
          src='./images/solutions.png'
        />
      </div>
    </>
  );
}

function GetCard2({ userType }: { userType: string }) {
  return (
    <>
      <div className='p-4 card-section mx-auto'>
        <img
          id='requests'
          className='rounded-3xl border-4 border-neutral-700 shadow-xl'
          src='./images/browse-requests.png'
        />
      </div>
      <div
        className={
          'px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center lg:items-start ' +
          (userType === 'business' ? 'dark-mode' : '')
        }
      >
        <div className='card-title shadow-lg'>
          {userType === 'user' && <>Tailored to your needs.</>}
          {userType === 'business' && <>We make it happen.</>}
          {userType === 'developer' && <>Requests are waiting for you.</>}
        </div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          {userType === 'user' && (
            <>
              State problems that AI can solve.
              <br />
              See them being solved by the open-source AI community.
            </>
          )}
          {userType === 'business' && (
            <>
              State problems, get solutions, fast. <br /> Automate anything and everything. <br />{' '}
              Solve complex real world problems with completely automated solutions and get great
              results.
            </>
          )}
          {userType === 'developer' && (
            <>
              The requests page shows you the current problems and solutions that business or other
              users are looking to pay and see sorted out. <br /> Grab a request and develop it.
              <br /> Deploy on FairAI with minimal effort. <br />
              Get paid and get yourself known as a great developer.
            </>
          )}
        </div>
      </div>
    </>
  );
}

function GetCard3({ userType }: { userType: string }) {
  return (
    <>
      <div
        className={
          'px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center lg:items-start ' +
          (userType === 'business' ? 'dark-mode' : '')
        }
      >
        <div className={'card-title shadow-lg ' + (userType === 'business' ? 'dark-mode' : '')}>
          Secure, private and ownable.
        </div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          {userType === 'user' && (
            <>
              Encrypt your AI prompts and responses. <br />
              Have digital property right over your AI-generated content.
            </>
          )}

          {userType === 'business' && (
            <>
              Completely E2E encrypted. <br /> Safe and trustable. <br /> Your company owns what it
              creates. <br />
              Copyrights automatically assigned to your company. <br /> Protects you, your company
              and your products.
            </>
          )}

          {userType === 'developer' && (
            <>
              State problems, get solutions, fast. <br /> Automate anything and everything. <br />{' '}
              Solve complex real world problems with completely automated solutions and get great
              results.
            </>
          )}
        </div>
      </div>
      <div className='p-4 card-section mx-auto'>
        <img
          id='encrypted'
          className='rounded-3xl border-4 border-neutral-700 shadow-xl'
          src='./images/encrypted.png'
        />
      </div>
    </>
  );
}

function GetCard4({ userType }: { userType: string }) {
  return (
    <>
      <div className='p-4 card-section mx-auto'>
        <img
          id='choose-operator'
          className='rounded-3xl border-4 border-neutral-700 w-fit mx-auto shadow-xl'
          src='./images/choose-operator.png'
        />
      </div>
      <div
        className={
          'px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center lg:items-start ' +
          (userType === 'business' ? 'dark-mode' : '')
        }
      >
        <div className={'card-title shadow-lg ' + (userType === 'business' ? 'dark-mode' : '')}>
          {userType === 'user' && <>Diversification.</>}
          {userType === 'business' && <>Use it directly or host it, independently.</>}
          {userType === 'developer' && <>Reusable and Customizable</>}
        </div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          {userType === 'user' && (
            <>
              Pick and choose your AI hardware provider. <br />
              Change it anytime.
            </>
          )}
          {userType === 'business' && (
            <>
              We can host solutions for your company. <br /> Get it running fast and easily. <br />
              But you can also host them yourself. <br /> Own your results and own your AI solution.
            </>
          )}
          {userType === 'developer' && (
            <>
              State problems, get solutions, fast. <br /> Automate anything and everything. <br />
              Solve complex real world problems with completely automated solutions and get great
              results.
            </>
          )}
        </div>
      </div>
    </>
  );
}

function GetCard5({ userType }: { userType: string }) {
  return (
    <>
      <div
        className={
          'px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center lg:items-start ' +
          (userType === 'business' ? 'dark-mode' : '')
        }
      >
        <div className={'card-title shadow-lg ' + (userType === 'business' ? 'dark-mode' : '')}>
          {userType === 'user' && <>Transparent, open, strong.</>}
          {userType === 'business' && <>Open-source based. Grows with you.</>}
          {userType === 'developer' && <>Reusable and Customizable</>}
        </div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          {userType === 'user' && (
            <>
              Support the open-source AI community.
              <br />
              Get traceable and verifiable AI-generated content in return.
            </>
          )}
          {userType === 'business' && (
            <>
              Based on the most recent and powerful open-source tecnologies. <br /> Your solution is
              guaranteed to be clean and safe, while keeping it future proof and easily upgradable
              and expandable when needed.
            </>
          )}
          {userType === 'developer' && (
            <>
              State problems, get solutions, fast. <br /> Automate anything and everything. <br />
              Solve complex real world problems with completely automated solutions and get great
              results.
            </>
          )}
        </div>
      </div>

      <div className='p-4 card-section mx-auto'>
        <img
          id='solutions'
          className='rounded-3xl border-4 border-neutral-700 w-fit mx-auto shadow-xl'
          src='./images/view-transaction.png'
        />
      </div>
    </>
  );
}

export default function VideoCard() {
  const [urlParams] = useSearchParams();
  const currentUserType = urlParams.get('userType') ?? 'business';

  return (
    <div className='mt-20 w-[90%] max-w-[1800px] mx-auto' id='learn-more-video-section'>
      <motion.div
        className='relative'
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.4,
        }}
      >
        <div className='flex flex-col w-full'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.4, type: 'smooth' }}
            className={
              'flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap my-5 xl:my-10 card-glasspane-container ' +
              (currentUserType === 'business' ? 'dark-mode' : '')
            }
          >
            <GetCard1 userType={currentUserType} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.4, type: 'smooth' }}
            className={
              'flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap-reverse xl:flex-wrap my-5 xl:my-10 card-glasspane-container ' +
              (currentUserType === 'business' ? 'dark-mode' : '')
            }
          >
            <GetCard2 userType={currentUserType} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.4, type: 'smooth' }}
            className={
              'flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap md:flex-wrap my-5 xl:my-10 card-glasspane-container ' +
              (currentUserType === 'business' ? 'dark-mode' : '')
            }
          >
            <GetCard3 userType={currentUserType} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.4, type: 'smooth' }}
            className={
              'flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap-reverse xl:flex-wrap my-5 xl:my-10 card-glasspane-container ' +
              (currentUserType === 'business' ? 'dark-mode' : '')
            }
          >
            <GetCard4 userType={currentUserType} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.4, type: 'smooth' }}
            className={
              'flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap mt-5 xl:mt-10 card-glasspane-container ' +
              (currentUserType === 'business' ? 'dark-mode' : '')
            }
          >
            <GetCard5 userType={currentUserType} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
