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

import TeamMember from './TeamMember';

export default function Teams() {
  const marcio = {
    name: 'Márcio Guia',
    title: 'Co-Founder & COO',
    twitterLink: 'https://twitter.com/Marcio__Guia',
    linkedinLink: 'https://www.linkedin.com/in/marcio-guia/',
    imgPath: 'public/images/marcio.jpg',
  };

  const tiago = {
    name: 'Tiago Ferreira',
    title: 'Co-Founder & CEO',
    twitterLink: 'https://twitter.com/FairTferreira',
    linkedinLink: 'https://www.linkedin.com/in/carlostiagoferreira/',
    imgPath: 'public/images/tiago.jpg',
  };

  const luis = {
    name: 'Luís Silvestre',
    title: 'Co-Founder & CTO',
    twitterLink: 'https://twitter.com/lsilvestre_fair',
    linkedinLink: 'https://www.linkedin.com/in/lu%C3%ADs-silvestre98/',
    imgPath: 'public/images/luis.jpg',
  };

  return (
    <section className='min-h-[100vh] overflow-hidden px-4 '>
      <div className='pt-32 flex flex-col justify-center items-center gap-4'>
        <h3 className='md:text-4xl text-3xl font-thin text-black'>Meet The Team</h3>
        <p className='text-gray-500 2xl:px-96 lg:px-48 px-4 text-center'>
          We are a team of three software engineers with a passion for AI and technology. After
          working as consultants for three years, we pursued a master's degree in AI, which
          solidified our expertise in the field. We then decided to create Fair Protocol, an
          open-source AI project, and quit our jobs to make it a reality. Our diverse skills and
          characteristics make us the perfect team for this project and contribute to the progress
          of open-source AI.
        </p>
        <div className='flex lg:flex-row flex-col items-center xl:gap-8 gap-6 mt-6 pb-20 lg:px-0 px-4 '>
          <TeamMember {...tiago} />
          <TeamMember {...marcio} />
          <TeamMember {...luis} />
        </div>
      </div>
    </section>
  );
}
