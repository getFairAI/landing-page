import { Dispatch, SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSearchParams } from 'react-router-dom';

const texts = [
  '',
  'With FairAI, you have access to a range of open-source AI solutions created by the open-source community. These solutions can generic or tailored to your specific needs and you have control over who handles the computation, ensuring efficiency and resilience.',
  'Anyone can register to provide computation for AI solutions in our marketplace. When registering, the operator chooses the price he charges for each transaction. Of this amount, 70% goes to the operator, 20% to the creator of the AI solution and 10% to our marketplace.',
  "Open-source AI allows you to have a say in and trust the AI you're using. You can choose from a wide range of models, from generic to specific ones tailored to your needs. While this sounds great, accessing open-source AI is not as straightforward as it seems. FairAI solves and simplifies this complex problem by allowing companies to browse existing AI solutions or request a solution for their specific problems. The open-source AI community will collaborate to solve these problems, and then a robust and reliable decentralized network of operators will ensure the computation for the AI solutions.",
];

const questions = [
  '',
  'What is the difference between FairAI and centralized alternatives?',
  'How are Fees distributed in our marketplace?',
  'Why is FairAI needed',
];
const ContentPlaceholder = ({ i, currentUserType }: { i: number; currentUserType: string }) => (
  <motion.div
    variants={{ collapsed: { scale: 0.95, opacity: 0 }, open: { scale: 1, opacity: 1 } }}
    transition={{ duration: 0.2 }}
    className={
      'px-3 md:px-14 text-md lg:text-xl py-4 dark-text ' +
      (currentUserType === 'business' ? ' text-white' : '')
    }
  >
    <span className=''>{texts[i]}</span>
  </motion.div>
);

const Accordion = ({
  i,
  expanded,
  setExpanded,
  currentUserType,
}: {
  i: number;
  expanded: false | number;
  setExpanded: Dispatch<SetStateAction<false | number>>;
  currentUserType: string;
}) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className='flex items-center w-full'
      >
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <KeyboardArrowDownIcon />
        </motion.div>
        <h1 className='text-xl lg:text-3xl w-fit dark-text mx-3 my-3 px-4 py-1 rounded-3xl cursor-pointer hover:backdrop-brightness-90 transition-all'>
          <span className={currentUserType === 'business' ? ' text-white' : ''}>
            {questions[i]}
          </span>
        </h1>
      </motion.header>
      <div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              key='content'
              initial='collapsed'
              animate='open'
              exit='collapsed'
              variants={{
                open: { opacity: 1, height: 'fit-content' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              <ContentPlaceholder i={i} currentUserType={currentUserType} />
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export const Faq = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState<false | number>(0);
  const [urlParams] = useSearchParams();
  const currentUserType = urlParams.get('userType') ?? 'business';

  return (
    <section className='mt-16 xl:mt-40 flex justify-center'>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, type: 'smooth' }}
        viewport={{ amount: 0.3, once: true }}
        className={
          'container card-glasspane-container w-[90%] max-w-[1800px] ' +
          (currentUserType === 'business' ? ' dark-mode text-white' : '')
        }
      >
        <div className='w-full flex flex-col'>
          <h2
            className={
              'flex text-2xl lg:text-3xl font-bold text-with-dark-bg very-rounded w-fit shadow-lg ' +
              (currentUserType === 'business' ? ' dark-mode' : '')
            }
          >
            <span className='p-2'>Frequently Asked Questions</span>
          </h2>
          <div className='flex flex-col w-full mt-10'>
            <Accordion
              i={1}
              expanded={expanded}
              setExpanded={setExpanded}
              currentUserType={currentUserType}
            />
            <Accordion
              i={2}
              expanded={expanded}
              setExpanded={setExpanded}
              currentUserType={currentUserType}
            />
            <Accordion
              i={3}
              expanded={expanded}
              setExpanded={setExpanded}
              currentUserType={currentUserType}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
