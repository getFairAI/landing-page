import { Dispatch, SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSearchParams } from 'react-router-dom';

const textsBusiness = [
  'FairAI is a decentralized marketplace where businesses, developers, and AI experts collaborate to solve real-world challenges.',
  'Whether you want to optimize workflows, improve efficiency, or leverage AI for smarter decision-making, FairAI helps grow your business.',
  'Companies post AI challenges, developers create solutions, and operators provide the computing power to run them.',
  'No! Simply describe your challenge, and AI experts will take care of the rest.',
  'No! Posting a challenge on FairAI is completely free. You can receive multiple proposals from AI experts and developers before making a decision.',
  'Once you post a challenge, multiple AI experts or teams can submit proposals. You have full control to review, discuss, and choose the best fit for your needs. Only after selecting a proposal do you define milestones in collaboration with the developer and approve the project.\n\nPayments are based on milestones, meaning you only pay as work is completed, ensuring security for both businesses and AI experts.',
];

const questionsBusiness = [
  'What is FairAI?',
  'How can FairAI help my business?',
  'How does it work?',
  'Do I need technical knowledge to use FairAI?',
  'Do I have to pay to post a challenge?',
  'How does the selection and payment process work?',
];

const textsDeveloper = [
  'FairAI is an open marketplace where developers can find paid AI projects, solve real-world challenges, and receive compensation for their expertise.',
  'FairAI connects you with companies seeking AI solutions. You can highlight your skills, engage in exciting projects, and receive payment for your work—all in a decentralized marketplace.',
  'You select AI challenges posted by businesses, submit your proposal, and get matched with a project. After agreeing on milestones with the company, you develop and deploy the solution, receiving payment as the project advances.',
  'No! Joining FairAI and submitting proposals for projects is entirely free. You only need to pay attention to the challenges that interest you.',
  'Yes, FairAI is designed for experienced AI developers. You can use your skills to tackle challenges and build effective AI solutions.',
  "No! You don't need to worry about infrastructure. FairAI handles the computing power and infrastructure needed to run AI solutions. You focus on building AI, and we take care of the rest.",
  'Payments are based on milestones. Once you and the company agree on the project milestones, you will receive secure payment upon completing each stage. This guarantees fairness for both parties.',
  'Can I work alone, or do I need a team? You can work independently or with a group. FairAI offers flexibility, allowing you to decide how you wish to collaborate on a project.',
];

const questionsDeveloper = [
  'What is FairAI?',
  'How can FairAI help me as a developer?',
  'How does it work?',
  'Do I have to pay to join FairAI?',
  'Do I need technical knowledge to use FairAI?',
  'Do I need to provide infrastructure to run the AI solutions?',
  'How do I get paid?',
  'Can I work solo, or do I need a team?',
];

const textsUser = [
  'FairAI is an open marketplace where you can explore, use, and customize AI tools. No coding is required, just simple and accessible AI for everyone.',
  'Explore and use a variety of AI tools for text, images, automation, and more.',
  'Not at all! FairAI is designed for everyone. Its user-friendly interface lets you run AI models without any coding or setup.',
  "All you need is a crypto wallet. It acts as your account, and no sign-ups or passwords are required. If you don't have one yet, no worries. Check our onboarding guide to learn how to set up your wallet in minutes.",
  'Yes! Many models can be customized to meet your needs, and our user-friendly interface makes it easy.',
  'Yes, all your interactions are encrypted, and you maintain complete ownership of anything you create.',
];

const questionsUser = [
  'What is FairAI?',
  'What can I do with FairAI?',
  'Do I need technical knowledge to use AI on FairAI?',
  'What do I need to use FairAI?',
  'Can I customize AI models?',
  'Is my data private?',
];

const ContentPlaceholder = ({ i, currentUserType }: { i: number; currentUserType: string }) => (
  <motion.div
    variants={{ collapsed: { scale: 0.95, opacity: 0 }, open: { scale: 1, opacity: 1 } }}
    transition={{ duration: 0.2 }}
    className={
      'px-3 md:px-14 text-md lg:text-xl py-4 dark-text ' +
      (currentUserType === 'developer' ? ' text-white' : '')
    }
  >
    {currentUserType === 'user' && <div style={{ whiteSpace: 'pre-wrap' }}>{textsUser[i]}</div>}
    {currentUserType === 'business' && (
      <div style={{ whiteSpace: 'pre-wrap' }}>{textsBusiness[i]}</div>
    )}
    {currentUserType === 'developer' && (
      <div style={{ whiteSpace: 'pre-wrap' }}>{textsDeveloper[i]}</div>
    )}
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
        <h1 className='text-xl lg:text-3xl w-fit dark-text mx-3 my-3 px-4 py-1 rounded-3xl cursor-pointer hover:bg-neutral-600 hover:text-white transition-all duration-300'>
          <span className={currentUserType === 'developer' ? ' text-white' : ''}>
            {currentUserType === 'user' && <>{questionsUser[i]}</>}
            {currentUserType === 'business' && <>{questionsBusiness[i]}</>}
            {currentUserType === 'developer' && <>{questionsDeveloper[i]}</>}
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
          (currentUserType === 'developer' ? ' dark-mode text-white' : '')
        }
      >
        <div className='w-full flex flex-col'>
          <h2
            className={
              'flex text-2xl lg:text-3xl font-bold text-with-dark-bg very-rounded w-fit shadow-lg ' +
              (currentUserType === 'developer' ? ' dark-mode' : '')
            }
          >
            <span className='p-2'>Frequently Asked Questions</span>
          </h2>
          <div className='flex flex-col w-full mt-10'>
            {currentUserType === 'user' &&
              questionsUser.map((_, index) => {
                return (
                  <Accordion
                    i={index}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    currentUserType={currentUserType}
                  />
                );
              })}
            {currentUserType === 'business' &&
              questionsBusiness.map((_, index) => {
                return (
                  <Accordion
                    i={index}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    currentUserType={currentUserType}
                  />
                );
              })}
            {currentUserType === 'developer' &&
              questionsDeveloper.map((_, index) => {
                return (
                  <Accordion
                    i={index}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    currentUserType={currentUserType}
                  />
                );
              })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
