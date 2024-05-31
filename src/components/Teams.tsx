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

// icons
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

export default function Teams() {
  const marcio = {
    name: 'Márcio Guia',
    title: 'Co-Founder & COO',
    twitterLink: 'https://twitter.com/Marcio__Guia',
    linkedinLink: 'https://www.linkedin.com/in/marcio-guia/',
    imgPath: './team/Marcio_Guia.jpg',
  };

  const tiago = {
    name: 'Tiago Ferreira',
    title: 'Co-Founder & CEO',
    twitterLink: 'https://twitter.com/FairTferreira',
    linkedinLink: 'https://www.linkedin.com/in/carlostiagoferreira/',
    imgPath: './team/Tiago_Ferreira.png',
  };

  const luis = {
    name: 'Luís Silvestre',
    title: 'Co-Founder & CTO',
    twitterLink: 'https://twitter.com/lsilvestre_fair',
    linkedinLink: 'https://www.linkedin.com/in/lu%C3%ADs-silvestre98/',
    imgPath: './team/luis.jpg',
  };

  return (
    <section className='flex justify-center my-40'>
      <div className='card-glasspane-container w-[90%] max-w-[1800px]'>
        <div className='flex flex-col justify-center gap-4'>
          <h3 className='text-3xl font-bold text-with-dark-bg very-rounded w-fit'>
            <AutoAwesomeRoundedIcon
              style={{
                width: '40px',
                height: '40px',
                verticalAlign: 'text-bottom',
              }}
            />
            <span className='ml-3'>Meet The Team</span>
          </h3>
          <div className='text-gray-600 px-10 text-xl font-medium flex mt-3'>
            <FavoriteRoundedIcon style={{ height: '20px', marginTop: '4px' }} />
            <span className='ml-2'>
              We are a team of three software engineers with a passion for AI and technology. After
              working as consultants for three years, we pursued a master's degree in AI, which
              solidified our expertise in the field. We then decided to create FairAI, an
              open-source AI project, and quit our jobs to make it a reality. Our diverse skills and
              characteristics make us the perfect team for this project and contribute to the
              progress of open-source AI.
            </span>
          </div>
          <div className='flex flex-wrap justify-center items-center gap-10 my-10'>
            <TeamMember {...tiago} />
            <TeamMember {...marcio} />
            <TeamMember {...luis} />
          </div>
        </div>
      </div>
    </section>
  );
}
