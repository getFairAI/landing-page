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

import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface TeamMemberProps {
  name: string;
  title: string;
  twitterLink: string;
  linkedinLink: string;
  imgPath: string;
}

export default function TeamMember(memberProps: TeamMemberProps) {
  return (
    <div className='flex flex-col'>
      <img
        className='w-80 rounded-xl hover:scale-105 transition-all duration-500'
        src={memberProps.imgPath}
      />
      <div className='text-center mt-4'>
        <h1 className='text-gray-900 text-xl font-bold mb-1'>{memberProps.name}</h1>
        <div className='text-gray-700 font-light mb-s'>{memberProps.title}</div>
        <div className='flex items-center justify-center opacity-75 hover:opacity-100'>
          <a
            href={memberProps.linkedinLink}
            target='_blank'
            className='flex rounded-full hover:bg-indigo-100 h-8 w-8'
          >
            <FaLinkedin className='text-indigo-500 mx-auto mt-2' />
          </a>
          <a
            href={memberProps.twitterLink}
            target='_blank'
            className='flex rounded-full hover:bg-white h-8 w-8'
          >
            <FaXTwitter className='mx-auto mt-2' />
          </a>
        </div>
      </div>
    </div>
  );
}
