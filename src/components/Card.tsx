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

interface CardProps {
  title?: string;
  description?: string;
}

export default function SimpleCard({ title, description }: CardProps) {
  return (
    <div className='rounded-2xl border-2 border-[#dbdce0] shadow-lg bg-[#e5e6eb] p-6 my-4 h-[400px] w-full'>
      <h2 className='text-2xl font-semibold text-[#000000b0] text-left mb-2'>{title}</h2>
      <p className='text-gray-500 text-left mt-10'>{description}</p>
    </div>
  );
}
