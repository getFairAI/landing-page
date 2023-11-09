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

// Aux Section

interface SectionProps {
  title: string;
  content: { href: string; title: string }[];
}

function Section({ title, content }: SectionProps) {
  return (
    <div className='basis-1/4 pt-4'>
      <div className='lg:py-6 py-4'>
        <h2 className='font-bold'>{title}</h2>
        <ul className='mt-4'>
          {content.map((item) => (
            <ListItem key={item.title} href={item.href} title={item.title} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  const productSection = {
    title: 'Product',
    content: [
      { href: 'https://fair.ar-io.dev', title: 'Fair Marketplace' },
      { href: 'https://fairstudio.ar-io.dev/', title: 'Fair Studio' },
    ],
  };

  const integrationsSection = {
    title: 'Integrations',
    content: [{ href: 'https://github.com/FAIR-Protocol/fair-protocol-sdk', title: 'Fair SDK' }],
  };

  const aboutSection = {
    title: 'About',
    content: [{ href: 'https://fairwhitepaper.ar-io.dev/', title: 'Whitepaper' }],
  };

  return (
    <footer className='bg-gray-200 text-black px-20'>
      <div className='sm:flex flex-row'>
        <div className='basis-1/2 pt-4'>
          <div className='flex flex-col w-2/3 md:p-0'>
            <div className='lg:py-6 py-4'>
              <HeaderLogo />
            </div>
            <p className='text-[16px] font-medium text-[#646464]'>
              Fair is the first decentralised marketplace, powered by Arweave, where creators of
              open-source AI models can monetise their work while users retain ownership and
              intellectual property rights of AI-generated content.
            </p>
            <div className='slg:px-14 pt-4 lg:pt-6'>
              <Socials />
            </div>
          </div>
        </div>
        <Section {...productSection} />
        <Section {...integrationsSection} />
        <Section {...aboutSection} />
      </div>
      <div className='py-4'>
        <div className='border-b border-gray-300 my-4 mx-auto'></div>
        <div className='text-center'>&copy; 2023 FairAI, Inc.</div>
      </div>
    </footer>
  );
}
