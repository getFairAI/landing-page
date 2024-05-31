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

export default function TeamMember(memberProps: Readonly<TeamMemberProps>) {
  return (
    <div className='flex flex-col'>
      <img
        className='w-80 h-80 object-cover rounded-full hover:scale-110 active:scale-100 transition-all duration-200 border-4 border-neutral-700'
        src={memberProps.imgPath}
      />
      <div className='flex flex-col justify-center items-center text-center mt-6'>
        <h1 className='text-xl font-bold mb-1 text-with-dark-bg very-rounded w-fit'>
          {memberProps.name}
        </h1>
        <div className='text-gray-600 font-medium mb-s w-fit'>{memberProps.title}</div>
        <div className='flex justify-center w-fit'>
          <a
            href={memberProps.linkedinLink}
            target='_blank'
            className={`flex rounded-full opacity-75 hover:opacity-100 hover:bg-white transition-all duration-400 h-8 w-8 plausible-event-name=Team+LinkedIn+Click plausible-event-member=${memberProps.name.replaceAll(
              ' ',
              '+',
            )}`}
          >
            <FaLinkedin className='text-blue-700 mx-auto mt-2' />
          </a>
          <a
            href={memberProps.twitterLink}
            target='_blank'
            className={`flex rounded-full opacity-75 hover:opacity-100 hover:bg-white transition-all duration-400 h-8 w-8 plausible-event-name=Team+Twitter+Click plausible-event-member=${memberProps.name.replaceAll(
              ' ',
              '+',
            )}`}
          >
            <FaXTwitter className='mx-auto mt-2' />
          </a>
        </div>
      </div>
    </div>
  );
}
