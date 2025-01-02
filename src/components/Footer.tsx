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

import HeaderLogo from '../svg/HeaderLogo';
import Socials from './Socials';
import ListItem from './ListItem';
import {
  WHITEPAPER,
  FAIR_SDK,
  FAIR_ARWEAVE_MARKETPLACE,
  FAIR_MARKETPLACE,
  FAIR_STUDIO,
  FAIR_ARWEAVE_STUDIO,
  ARWEAVE_LANDING_PAGE,
} from '../constants';
import { useContext, useEffect, useState } from 'react';
import { LinksContext } from '../context/links';
import { useSearchParams } from 'react-router-dom';

// Aux Section

interface SectionProps {
  title: string;
  content: { href: string; title: string; relative?: boolean }[];
}

function Section({ title, content }: SectionProps) {
  return (
    <div className='basis-1/4 pt-4'>
      <div className='lg:py-6 py-4'>
        <h2 className='font-bold ml-1'>{title}</h2>
        <ul className='mt-4'>
          {content.map((item) => (
            <ListItem
              key={item.title}
              href={item.href}
              title={item.title}
              relative={item.relative}
              extraClasses={` py-1 px-2 rounded-3xl hover:bg-gray-600 hover:text-white duration-200 plausible-event-name=Footer+Link+Click plausible-event-link=${item.title.replaceAll(
                ' ',
                '+',
              )}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  const [urlParams] = useSearchParams();
  const currentUserType = urlParams.get('userType') ?? 'business';
  const { appLink } = useContext(LinksContext);
  const [productSection, setProductSection] = useState({
    title: 'Product',
    content: [
      { href: ARWEAVE_LANDING_PAGE, title: 'Visit Fair on Arweave' },
      { href: FAIR_MARKETPLACE, title: 'Fair Marketplace' },
      { href: FAIR_STUDIO, title: 'Fair Studio' },
      { href: FAIR_ARWEAVE_MARKETPLACE, title: 'Fair Marketplace (On Arweave)' },
      { href: FAIR_ARWEAVE_STUDIO, title: 'Fair Studio (On Arweave)' },
    ],
  });
  useEffect(() => {
    if (appLink.includes('getfair.ai')) {
      setProductSection({
        title: 'Product',
        content: [
          { href: ARWEAVE_LANDING_PAGE, title: 'Visit Fair on Arweave' },
          { href: FAIR_MARKETPLACE, title: 'Fair Marketplace' },
          { href: FAIR_STUDIO, title: 'Fair Studio' },
          { href: FAIR_ARWEAVE_MARKETPLACE, title: 'Fair Marketplace (On Arweave)' },
          { href: FAIR_ARWEAVE_STUDIO, title: 'Fair Studio (On Arweave)' },
        ],
      });
    } else {
      setProductSection({
        title: 'Product',
        content: [
          { href: FAIR_MARKETPLACE, title: 'Fair Marketplace' },
          { href: FAIR_STUDIO, title: 'Fair Studio' },
          { href: FAIR_ARWEAVE_MARKETPLACE, title: 'Fair Marketplace (On Arweave)' },
          { href: FAIR_ARWEAVE_STUDIO, title: 'Fair Studio (On Arweave)' },
        ],
      });
    }
  }, [appLink]);

  const integrationsSection = {
    title: 'Integrations',
    content: [{ href: FAIR_SDK, title: 'Fair SDK' }],
  };

  const aboutSection = {
    title: 'About',
    content: [
      { href: '.#/privacy-policy', title: 'Privacy Policy', relative: true },
      { href: WHITEPAPER, title: 'Whitepaper' },
    ],
  };

  return (
    <footer className='px-10 md:px-20 mt-10'>
      <div className='flex flex-wrap justify-center gap-5'>
        <div className='flex basis-1 pt-4 flex-auto max-w-[1100px] min-w-[250px]'>
          <div className='flex flex-col'>
            <div
              className={
                'lg:py-6 py-4 ' + (currentUserType === 'business' ? ' invert brightness-0' : '')
              }
            >
              <HeaderLogo />
            </div>
            <p
              className={
                'text-sm md:text-md font-medium px-0 sm:px-12 ' +
                (currentUserType === 'business' ? ' text-gray-200' : 'text-gray-600')
              }
            >
              Fair is the first decentralised marketplace, powered by Arweave, where creators of
              open-source AI models can monetise their work while users retain ownership and
              intellectual property rights of AI-generated content.
            </p>
            <div
              className={
                'slg:px-14 pt-4 lg:pt-6 pl-0 sm:pl-9 ' +
                (currentUserType === 'business' ? ' invert' : '')
              }
            >
              <Socials />
            </div>
          </div>
        </div>
        <div className={'min-w-[150px] ' + (currentUserType === 'business' ? ' invert' : '')}>
          <Section {...productSection} />
        </div>
        <div className={'min-w-[150px] ' + (currentUserType === 'business' ? ' invert' : '')}>
          <Section {...integrationsSection} />
        </div>
        <div className={'min-w-[150px] ' + (currentUserType === 'business' ? ' invert' : '')}>
          <Section {...aboutSection} />
        </div>
      </div>
      <div
        className={
          'py-4 font-semibold ' +
          (currentUserType === 'business' ? ' text-neutral-200' : ' text-neutral-600')
        }
      >
        <div className='border-b border-gray-400 my-4 mx-auto'></div>
        <div className='text-center'>&copy; 2024 FairAI, Inc.</div>
      </div>
    </footer>
  );
}
