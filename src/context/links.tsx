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

import { ReactNode, createContext, useEffect, useState } from 'react';
import {
  FAIR_ARWEAVE_MARKETPLACE,
  FAIR_ARWEAVE_STUDIO,
  FAIR_MARKETPLACE,
  FAIR_STUDIO,
} from '../constants';
import { useLocation } from 'react-router-dom';

export const LinksContext = createContext<{
  appLink: string;
  studioLink: string;
}>({
  appLink: FAIR_MARKETPLACE,
  studioLink: FAIR_STUDIO,
});

export const LinksProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const [links, setLinks] = useState({
    appLink: FAIR_MARKETPLACE,
    studioLink: FAIR_STUDIO,
  });

  useEffect(() => {
    if (pathname.includes('getfair.ai')) {
      setLinks({
        appLink: FAIR_MARKETPLACE,
        studioLink: FAIR_STUDIO,
      });
    } else {
      setLinks({
        appLink: FAIR_ARWEAVE_MARKETPLACE,
        studioLink: FAIR_ARWEAVE_STUDIO,
      });
    }
  }, [pathname]);

  return <LinksContext.Provider value={links}>{children}</LinksContext.Provider>;
};
