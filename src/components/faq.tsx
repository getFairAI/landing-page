import { Dispatch, SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const texts = [
  'With FairAI, you have access to a range of open-source AI solutions created by the open-source community. These solutions can generic or tailored to your specific needs and you have control over who handles the computation, ensuring efficiency and resilience.',
  'Anyone can register to provide computation for AI solutions in our marketplace. When registering, the operator chooses the price he charges for each transaction. Of this amount, 70% goes to the operator, 20% to the creator of the AI solution and 10% to our marketplace.',
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,comes from a line in section 1.10.32.',
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
];

const questions = [
  'What is the difference between FairAI and centralized alternatives?',
  'How are Fees distributed in our marketplace?',
  'wher can i get some',
  'how did it originate',
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
    <section className='mt-10 md:mt-40 flex justify-center'>
      <div className='container card-glasspane-container w-[90%] max-w-[1800px] p-14'>
        <div className='w-[100%] flex flex-col'>
          <h2 className='flex text-2xl md:text-4xl py-1 font-bold text-with-dark-bg very-rounded w-fit'>
            Frequently Asked Questions
          </h2>
          <div className='flex flex-col gap-8 w-full mt-12'>
            <Accordion i={0} expanded={expanded} setExpanded={setExpanded} />
            <Accordion i={1} expanded={expanded} setExpanded={setExpanded} />
            <Accordion i={2} expanded={expanded} setExpanded={setExpanded} />
            <Accordion i={3} expanded={expanded} setExpanded={setExpanded} />
          </div>
        </div>
      </div>
    </section>
  );
};
