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
import {
  CheckRounded,
  KeyboardArrowDownRounded,
  ArrowCircleRightRounded,
  SettingsSuggestRounded,
  AutoAwesomeRounded,
  StarRounded,
} from '@mui/icons-material';
import { LinksContext } from '../context/links';
import { useContext } from 'react';
import { InlineWidget } from 'react-calendly';

function GetCard1({ userType }: { userType: string }) {
  return (
    <>
      <div
        className={
          'px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center lg:items-start ' +
          (userType === 'developer' ? 'dark-mode' : '')
        }
      >
        <div
          className={'card-title shadow-lg' + (userType === 'developer' ? ' primary-color-bg' : '')}
        >
          {userType === 'user' && <>Ready-to-Use & Customizable</>}
          {userType === 'developer' && (
            <div className='flex items-center gap-3'>
              <StarRounded
                className='rounded-full flex-none bg-white p-1 -ml-3'
                style={{
                  color: '#3aaaaa',
                  fontSize: '42px',
                }}
              />
              <span>You Have Skills, We Have Opportunities</span>
            </div>
          )}
        </div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          {userType === 'user' && (
            <div className='bullets-wrapper'>
              <div className='bullet'>
                <CheckRounded />
                <span>Access AI tools ready to use.</span>
              </div>
              <div className='bullet'>
                <CheckRounded />
                <span>Adjust them to fit your needs.</span>
              </div>
            </div>
          )}
          {userType === 'developer' && (
            <div className='flex flex-col gap-4 text-neutral-700 text-2xl'>
              <div className='flex gap-3 rounded-xl bg-white py-2 px-3 items-center'>
                <div className='rounded-full flex items-center justify-center bg-neutral-700 w-[35px] h-[35px] text-xl flex-none text-white'>
                  1
                </div>
                <span>Pick a challenge, submit your AI solution.</span>
              </div>
              <div className='flex gap-3 rounded-xl bg-white py-2 px-3 items-center'>
                <div className='rounded-full flex items-center justify-center bg-neutral-700 w-[35px] h-[35px] text-xl flex-none text-white'>
                  2
                </div>
                <span>Get paid for your work in an open and decentralized AI marketplace.</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='px-4 card-section mx-auto'>
        {userType === 'user' && (
          <img
            id='solutions'
            className='rounded-3xl border-4 border-neutral-700 shadow-xl'
            src='./images/solutions2.png'
          />
        )}
        {userType === 'developer' && (
          <img
            id='requests'
            className='rounded-3xl border-4 border-neutral-700 shadow-xl'
            src='./images/browse-requestsv2.png'
          />
        )}
      </div>
    </>
  );
}

function GetCard2({ userType }: { userType: string }) {
  return (
    <>
      <div className='p-4 card-section mx-auto'>
        <img
          id='encrypted'
          className='rounded-3xl border-4 border-neutral-700 shadow-xl'
          src='./images/encrypted.png'
        />
      </div>
      <div
        className={
          'px-4 my-0 md:my-4 flex flex-col card-section mx-auto items-center lg:items-start ' +
          (userType === 'developer' ? 'dark-mode' : '')
        }
      >
        <div className='card-title shadow-lg'>Complete Control</div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          <div className='bullets-wrapper'>
            <div className='bullet'>
              <CheckRounded />
              <span>Secure, private, and yours.</span>
            </div>
            <div className='bullet'>
              <CheckRounded />
              <span>Use AI with confidence, knowing your data is protected.</span>
            </div>
            <div className='bullet'>
              <CheckRounded />
              <span>Everything you create is yours, with digital property rights.</span>
            </div>
          </div>
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
          (userType === 'developer' ? 'dark-mode' : '')
        }
      >
        <div className={'card-title shadow-lg ' + (userType === 'developer' ? 'dark-mode' : '')}>
          AI That's Open, Transparent, Powerful
        </div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          <div className='bullets-wrapper'>
            <div className='bullet'>
              <CheckRounded />
              <span>Support the open-source AI community and get AI you can trust in return.</span>
            </div>
            <div className='bullet'>
              <CheckRounded />
              <span>Fully open, fully verifiable.</span>
            </div>
          </div>
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
          (userType === 'developer' ? 'dark-mode' : '')
        }
      >
        <div className={'card-title shadow-lg ' + (userType === 'developer' ? 'dark-mode' : '')}>
          Switch Providers Anytime
        </div>
        <div className='card-description mt-5 md:mt-10 px-8'>
          <div className='bullets-wrapper'>
            <div className='bullet'>
              <CheckRounded />
              <span>Choose where your AI runs.</span>
            </div>
            <div className='bullet'>
              <CheckRounded />
              <span>Balance price, speed, and availability.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function HowItWorksSection({ userType }: { userType: string }) {
  const { appLink } = useContext(LinksContext);
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='flex flex-col w-full justify-center items-center'>
        <div className='mb-8 card-title shadow-lg inverted flex gap-3 items-center'>
          <SettingsSuggestRounded
            className='text-[#3aaaaa]'
            style={{ height: '40px', width: '40px' }}
          />
          <span>How it works</span>
        </div>

        {userType === 'business' && (
          <div className='text-2xl font-medium w-full max-w-[800px] text-center mb-10 text-neutral-700'>
            You know the problem. We know the solution. <br />
            Post your challenge, get matched with experts, and start transforming your business
            without changing the way you work.
          </div>
        )}
      </div>

      <div className={'px-4 my-4 flex w-full max-w-[1500px]'}>
        <div
          className={
            'card-glasspane-container w-full max-w-[900px]' +
            (userType === 'developer' ? ' dark-mode' : '')
          }
        >
          <div
            className={
              'card-title shadow-lg flex justify-between gap-4 items-center' +
              (userType === 'developer' ? ' dark-mode' : '')
            }
          >
            <div className='rounded-full bg-white text-[#3aaaaa] w-[45px] h-[45px] -ml-4 flex justify-center items-center'>
              1
            </div>
            {userType === 'business' && <>Tell Us Your Challenge</>}
            {userType === 'developer' && <>Browse & Pick a Challenge</>}
          </div>
          <div className='card-description my-6 px-11 text-2xl'>
            {userType === 'business' && (
              <>AI experts analyze your challenge and create custom or plug-and-play solutions.</>
            )}
            {userType === 'developer' && (
              <div className='text-white'>
                Find real AI challenges and start building solutions.
              </div>
            )}
          </div>

          <div className='card-description flex flex-col gap-2 w-full px-8  text-lg'>
            <div className='flex gap-3 items-center rounded-xl bg-white py-2 px-3'>
              <CheckRounded
                className='rounded-full p-1 bg-neutral-700 text-white'
                style={{ height: '35px', width: '35px' }}
              />
              {userType === 'business' && (
                <>
                  Share what you need. Efficiency, automation, insights, or something entirely new.
                </>
              )}
              {userType === 'developer' && <>Discover businesses looking for AI solutions.</>}
            </div>
            <div className='flex gap-3 items-center rounded-xl bg-white py-2 px-3'>
              <CheckRounded
                className='rounded-full p-1 bg-neutral-700 text-white'
                style={{ height: '35px', width: '35px' }}
              />

              {userType === 'business' && <>Work with top-tier AI developers.</>}
              {userType === 'developer' && (
                <>Work on what interests you in automation, deep learning, creative AI, and more.</>
              )}
            </div>
            <div className='flex gap-3 items-center rounded-xl bg-white py-2 px-3'>
              <CheckRounded
                className='rounded-full p-1 bg-neutral-700 text-white'
                style={{ height: '35px', width: '35px' }}
              />

              {userType === 'business' && <>Get results faster, with minimal effort.</>}
              {userType === 'developer' && (
                <>No barriers. If you have the skills you can get started.</>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='rounded-full p-2 bg-white text-gray-800 shadow-lg'>
        <KeyboardArrowDownRounded style={{ height: '40px', width: '40px' }} />
      </div>

      <div className={'px-4 my-4 flex w-full justify-end max-w-[1500px]'}>
        <div
          className={
            'card-glasspane-container w-full max-w-[900px]' +
            (userType === 'developer' ? ' dark-mode' : '')
          }
        >
          <div
            className={
              'card-title shadow-lg flex justify-between gap-4 items-center' +
              (userType === 'developer' ? ' dark-mode' : '')
            }
          >
            <div className='rounded-full bg-white text-[#3aaaaa] w-[45px] h-[45px] -ml-4 flex justify-center items-center'>
              2
            </div>

            {userType === 'business' && <>Get Matched with Solutions</>}
            {userType === 'developer' && <>Submit Your Proposal & Get Matched</>}
          </div>
          <div className='card-description my-6 px-11 text-2xl'>
            {userType === 'business' && (
              <>
                Skip overpriced consulting firms. Get the right solution, built by experts, at a
                fraction of the cost.
              </>
            )}
            {userType === 'developer' && (
              <div className='text-white'>No job hunting. Find paid AI projects instantly.</div>
            )}
          </div>

          <div className='card-description flex flex-col gap-2 w-full px-8  text-lg'>
            <div className='flex gap-3 items-center rounded-xl bg-white py-2 px-3'>
              <CheckRounded
                className='rounded-full p-1 bg-neutral-700 text-white'
                style={{ height: '35px', width: '35px' }}
              />

              {userType === 'business' && (
                <>No need to hire in-house AI teams or pay for bloated consultancy fees.</>
              )}
              {userType === 'developer' && (
                <>No endless pitching. Companies come to FairAI searching for AI solutions.</>
              )}
            </div>
            <div className='flex gap-3 items-center rounded-xl bg-white py-2 px-3'>
              <CheckRounded
                className='rounded-full p-1 bg-neutral-700 text-white'
                style={{ height: '35px', width: '35px' }}
              />

              {userType === 'business' && (
                <>Choose between ready-made solutions or custom-built ones.</>
              )}
              {userType === 'developer' && (
                <>Compete on equal footing by submitting your best proposal.</>
              )}
            </div>
            <div className='flex gap-3 items-center rounded-xl bg-white py-2 px-3'>
              <CheckRounded
                className='rounded-full p-1 bg-neutral-700 text-white'
                style={{ height: '35px', width: '35px' }}
              />

              {userType === 'business' && <>Focus on results, not on development headaches.</>}
              {userType === 'developer' && (
                <>Work solo or as part of a team. Collaborate however you prefer.</>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='rounded-full p-2 bg-white text-gray-800 shadow-lg'>
        <KeyboardArrowDownRounded style={{ height: '40px', width: '40px' }} />
      </div>

      <div className={'px-4 my-4 flex w-full max-w-[1500px]'}>
        <div
          className={
            'card-glasspane-container w-full max-w-[900px]' +
            (userType === 'developer' ? ' dark-mode' : '')
          }
        >
          <div
            className={
              'card-title shadow-lg flex justify-between gap-4 items-center' +
              (userType === 'developer' ? ' dark-mode' : '')
            }
          >
            <div className='rounded-full bg-white text-[#3aaaaa] w-[45px] h-[45px] -ml-4 flex justify-center items-center'>
              3
            </div>

            {userType === 'business' && <>Seamless Integration</>}
            {userType === 'developer' && <>Develop, Deploy & Get Paid</>}
          </div>
          <div className='card-description my-6 px-11 text-2xl'>
            {userType === 'business' && (
              <>
                Your new solution integrates effortlessly with your existing workflow—zero
                disruptions.
              </>
            )}
            {userType === 'developer' && (
              <div className='text-white'>
                Don’t just build AI solutions. Turn them into lasting revenue.
              </div>
            )}
          </div>

          <div className='card-description flex flex-col gap-2 w-full px-8 text-lg'>
            <div className='flex gap-3 items-center rounded-xl bg-white py-2 px-3'>
              <CheckRounded
                className='rounded-full p-1 bg-neutral-700 text-white'
                style={{ height: '35px', width: '35px' }}
              />

              {userType === 'business' && <>Keep using the tools you already know.</>}
              {userType === 'developer' && <>Agree on clear milestones before you start.</>}
            </div>
            <div className='flex gap-3 items-center rounded-xl bg-white py-2 px-3'>
              <CheckRounded
                className='rounded-full p-1 bg-neutral-700 text-white'
                style={{ height: '35px', width: '35px' }}
              />

              {userType === 'business' && <>No need to restructure your operations.</>}
              {userType === 'developer' && (
                <>Get paid securely as you complete each stage of the project.</>
              )}
            </div>
            <div className='flex gap-3 items-center rounded-xl bg-white py-2 px-3'>
              <CheckRounded
                className='rounded-full p-1 bg-neutral-700 text-white'
                style={{ height: '35px', width: '35px' }}
              />

              {userType === 'business' && <>Implementation is smooth and fully guided.</>}
              {userType === 'developer' && (
                <>
                  Build your reputation. Your work creates visibility and unlocks new opportunities.
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {userType === 'business' && (
        <>
          <div className='rounded-full p-2 bg-white text-gray-800 shadow-lg'>
            <KeyboardArrowDownRounded style={{ height: '40px', width: '40px' }} />
          </div>

          <div className='px-4 my-4 flex w-full justify-end max-w-[1500px]'>
            <div className='card-glasspane-container w-full max-w-[900px]'>
              <div className='card-title shadow-lg flex justify-between gap-4 items-center'>
                <div className='rounded-full bg-white text-[#3aaaaa] w-[45px] h-[45px] -ml-4 flex justify-center items-center'>
                  4
                </div>
                Done! It's Really That Simple
              </div>
              <div className='card-description w-full px-8 text-lg mt-8'>
                <div className='flex gap-3 items-center rounded-xl bg-white py-2 px-3'>
                  <CheckRounded
                    className='rounded-full p-1 bg-neutral-700 text-white'
                    style={{ height: '35px', width: '35px' }}
                  />
                  Your solution is ready, no extra steps, no hidden complexity.
                </div>
              </div>
            </div>
          </div>
          <a href={appLink}>
            <div className='plausible-event-name=Try+Now+Click mt-10'>
              <span className='button-big-text min-height-change-size-button'>
                Transform Your Business Today <ArrowCircleRightRounded />
              </span>
            </div>
          </a>
        </>
      )}
    </div>
  );
}

function ContactsCards() {
  return (
    <>
      <div className='w-full flex justify-center mt-20'>
        <div className='w-full flex gap-10 flex-wrap max-w-[1400px]'>
          <div className='card-glasspane-container flex-grow flex flex-col items-center'>
            <div className='text-2xl font-semibold opacity-75 bg-neutral-900 w-fit px-4 py-1 rounded-3xl text-white'>
              Not sure where to start? We’ll guide you.
            </div>
            <div className='text-lg font-semibold opacity-50 px-4 mt-1'>
              Choose a time that works for you and we'll be there.
            </div>
            <div className='mt-5 rounded-3xl overflow-hidden shadow-xl w-full border-2 border-neutral-500'>
              <CalendlyInlineWidget />
            </div>
          </div>
          <div className='card-glasspane-container flex-grow flex flex-col items-center'>
            <div className='text-2xl font-semibold opacity-75 bg-neutral-900 w-fit px-4 py-1 rounded-3xl text-white'>
              Not ready for a call? Send us a message.
            </div>
            <div className='text-lg font-semibold opacity-50 px-4 mt-1'>
              We'll respond to you shortly, typically within an hour.
            </div>
            <div className='w-full flex flex-col gap-3 mt-8 items-center px-6'>
              <span className='text-neutral-700 font-medium w-full pl-2 -mb-3'>Full Name</span>
              <input
                type='text'
                maxLength={200}
                id='input-name'
                className='w-full border-2 border-neutral-500 rounded-xl p-3'
                placeholder='How should we call you?'
              />
              <span className='text-neutral-700 font-medium w-full pl-2 -mb-3'>Email</span>
              <input
                type='email'
                maxLength={200}
                id='input-email'
                className='w-full border-2 border-neutral-500 rounded-xl p-3'
                placeholder='Where can we reach you?'
              />
              <span className='text-neutral-700 font-medium w-full pl-2 -mb-3'>Message</span>
              <textarea
                rows={13}
                maxLength={4000}
                id='input-message'
                className='w-full border-2 border-neutral-500 rounded-xl p-3'
                placeholder='How can we help? Feel free to share any defails.'
              />
            </div>

            <div className='w-full flex flex-col justify-end items-center mt-6'>
              <button className='button-big-text smaller w-fit'>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DeveloperCallToActionCard() {
  const { appLink } = useContext(LinksContext);
  return (
    <div className='mt-40 mb-10 w-full flex justify-center flex-col gap-6 items-center dark-mode'>
      <div className={'card-title shadow-lg flex gap-4 inverted items-center'}>
        <AutoAwesomeRounded style={{ width: '40px', height: '40px', color: '#3aaaaa' }} />
        The world needs AI developers like you
      </div>
      <div className='text-white text-2xl font-semibold'>
        Pick a project, showcase your skills, and get paid for your work.
      </div>
      <a href={appLink}>
        <div className='plausible-event-name=Try+Now+Click mt-8'>
          <span className='button-big-text min-height-change-size-button'>
            Start earning now <ArrowCircleRightRounded />
          </span>
        </div>
      </a>
    </div>
  );
}

function CalendlyInlineWidget() {
  return (
    <div className='App'>
      <InlineWidget url='https://calendly.com/getfairai/30min' />
    </div>
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
          {currentUserType === 'business' && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.4, type: 'smooth' }}
            >
              <HowItWorksSection userType={currentUserType} />
            </motion.div>
          )}
          {currentUserType === 'business' && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.4, type: 'smooth' }}
            >
              <ContactsCards />
            </motion.div>
          )}

          {currentUserType !== 'business' && (
            <>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ amount: 0.3, once: true }}
                transition={{ duration: 0.4, type: 'smooth' }}
                className={
                  'flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap my-5 xl:my-10 card-glasspane-container ' +
                  (currentUserType === 'developer' ? 'dark-mode' : '')
                }
              >
                <GetCard1 userType={currentUserType} />
              </motion.div>

              {currentUserType === 'developer' && (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ scale: 1, opacity: 1, x: 0 }}
                  viewport={{ amount: 0.3, once: true }}
                  transition={{ duration: 0.4, type: 'smooth' }}
                >
                  <HowItWorksSection userType={currentUserType} />

                  <DeveloperCallToActionCard />
                </motion.div>
              )}

              {currentUserType !== 'developer' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ scale: 1, opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3, once: true }}
                    transition={{ duration: 0.4, type: 'smooth' }}
                    className={
                      'flex w-full gap-3 md:gap-10 justify-center md:justify-between items-start flex-wrap-reverse xl:flex-wrap my-5 xl:my-10 card-glasspane-container ' +
                      (currentUserType === 'developer' ? 'dark-mode' : '')
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
                      (currentUserType === 'developer' ? 'dark-mode' : '')
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
                      (currentUserType === 'developer' ? 'dark-mode' : '')
                    }
                  >
                    <GetCard4 userType={currentUserType} />
                  </motion.div>
                </>
              )}
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
