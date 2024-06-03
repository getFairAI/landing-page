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

import { FaGithub, FaDiscord, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
  TWITTER_LINK,
  DISCORD_LINK,
  LINKEDIN_LINK,
  YOUTUBE_LINK,
  GIT_LINK,
  GHOST_LINK,
} from '../constants';
import { Icon } from '@mui/material';

const iconDimension = 'h-8 w-8';
const blackIcons = 'text-black';
const hoverAnimation = 'hover:text-white hover:bg-gray-600 p-2 duration-200 rounded-full';

export default function Socials() {
  return (
    <div className='flex gap-4 flex-wrap text-black'>
      <a
        href={TWITTER_LINK}
        target='_blank'
        className={`${hoverAnimation} ${blackIcons} plausible-event-name=Footer+Link+Click plausible-event-link=Twitter`}
      >
        <FaXTwitter className={iconDimension} />
      </a>
      <a
        href={GHOST_LINK}
        target='_blank'
        className={`${blackIcons} ${hoverAnimation} plausible-event-name=Footer+Link+Click plausible-event-link=Ghost`}
      >
        <Icon style={{ overflow: 'auto', width: '2rem', height: '2rem', display: 'flex' }}>
          <img
            src='./images/ghost-logo-orb.png'
            className={`${iconDimension} hover:invert hover:brightness-200`}
          />
        </Icon>
      </a>
      <a
        href={DISCORD_LINK}
        target='_blank'
        className={`${hoverAnimation} plausible-event-name=Footer+Link+Click plausible-event-link=Discord`}
      >
        <FaDiscord className={iconDimension} />
      </a>
      <a
        href={LINKEDIN_LINK}
        target='_blank'
        className={`${hoverAnimation} plausible-event-name=Footer+Link+Click plausible-event-link=LinkedIn`}
      >
        <FaLinkedin className={iconDimension} />
      </a>
      <a
        href={YOUTUBE_LINK}
        target='_blank'
        className={`${hoverAnimation} plausible-event-name=Footer+Link+Click plausible-event-link=Youtube`}
      >
        <FaYoutube className={iconDimension} />
      </a>
      <a
        href={GIT_LINK}
        target='_blank'
        className={`${hoverAnimation} ${blackIcons} plausible-event-name=Footer+Link+Click plausible-event-link=Git`}
      >
        <FaGithub className={iconDimension} />
      </a>
    </div>
  );
}
