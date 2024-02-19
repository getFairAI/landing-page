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

import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

interface ListItemProps {
  href: string;
  title: string;
  extraClasses?: string;
}

export default function ListItem({ href, title, extraClasses }: ListItemProps) {
  return (
    <li className='mb-4 last:mb-0'>
      <a
        href={href}
        target='_blank'
        className={extraClasses ? `text-[#646464] ${extraClasses}` : 'text-[#646464]'}
      >
        <FiArrowUpRight className='inline-block mr-1 mb-1' />
        {title}
      </a>
    </li>
  );
}
