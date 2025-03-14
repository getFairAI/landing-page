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

import { FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TWITTER_LINK, DISCORD_LINK } from '../constants';

const iconDimension = 'h-6 w-6';
export default function SocialsHeader() {
  return (
    <div className='flex space-x-4'>
      <a
        href={TWITTER_LINK}
        target='_blank'
        className={
          'text-black p-2 rounded-full hover:bg-gray-200 duration-200 plausible-event-name=Twitter+Click'
        }
        rel='noreferrer'
      >
        <FaXTwitter className={iconDimension} />
      </a>
      <a
        href={DISCORD_LINK}
        target='_blank'
        className='text-black p-2 rounded-full hover:bg-gray-200 hover:text-indigo-500 duration-200 plausible-event-name=Discord+Click'
        rel='noreferrer'
      >
        <FaDiscord className={iconDimension} />
      </a>
    </div>
  );
}
