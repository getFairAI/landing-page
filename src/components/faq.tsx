import { Dispatch, SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const texts = [
  'With FairAI, you have access to a range of open-source AI solutions created by the open-source community. These solutions can generic or tailored to your specific needs and you have control over who handles the computation, ensuring efficiency and resilience.',
  'Anyone can register to provide computation for AI solutions in our marketplace. When registering, the operator chooses the price he charges for each transaction. Of this amount, 70% goes to the operator, 20% to the creator of the AI solution and 10% to our marketplace.',
  "Open-source AI allows you to have a say in and trust the AI you're using. You can choose from a wide range of models, from generic to specific ones tailored to your needs. While this sounds great, accessing open-source AI is not as straightforward as it seems. FairAI solves and simplifies this complex problem by allowing companies to browse existing AI solutions or request a solution for their specific problems. The open-source AI community will collaborate to solve these problems, and then a robust and reliable decentralized network of operators will ensure the computation for the AI solutions.",
];

const questions = [
  'What is the difference between FairAI and centralized alternatives?',
  'How are Fees distributed in our marketplace?',
  'Why is FairAI needed',
];
const ContentPlaceholder = ({ i }: { i: number }) => (
  <motion.div
    variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}
    transition={{ duration: 0.2 }}
    className='px-10'
  >
    <span className=''>{texts[i]}</span>
  </motion.div>
);

const Accordion = ({
  i,
  expanded,
  setExpanded,
}: {
  i: number;
  expanded: false | number;
  setExpanded: Dispatch<SetStateAction<false | number>>;
}) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className='flex justify-between items-center w-full'
      >
        <h1 className='text-2xl md:text-4xl w-fit dark-text flex flex-wrap items-center justify-center px-10 gap-3 cursor-pointer'>
          {questions[i]}
        </h1>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <KeyboardArrowDownIcon />
        </motion.div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2 }}
          >
            <ContentPlaceholder i={i} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
export const Faq = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <section className='mt-40 flex justify-center'>
      <div className='container card-glasspane-container w-[90%] max-w-[1800px] p-14'>
        <div className='w-[100%] flex flex-col'>
          <h2 className='flex text-2xl md:text-4xl py-1 font-bold text-with-dark-bg very-rounded w-fit'>
            Frequently Asked Questions
          </h2>
          <div className='flex flex-col gap-8 w-full mt-12'>
            <Accordion i={0} expanded={expanded} setExpanded={setExpanded} />
            <Accordion i={1} expanded={expanded} setExpanded={setExpanded} />
            <Accordion i={2} expanded={expanded} setExpanded={setExpanded} />
          </div>
        </div>
      </div>
    </section>
  );
};
