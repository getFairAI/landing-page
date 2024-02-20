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

import { styled } from '@mui/material';
import { useCallback, useState } from 'react';

const CustomIframe = styled('iframe')(() => ({
  height: '100%',
  width: '100%',
  border: 'none',
}));

const Privacy = () => {
  const [isReady, setIsReady] = useState(false);

  const styles = `.c26 {
    background-color: #f4f4f6 !important;
    padding-bottom: 0px !important;
  }
  html {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f4f6 !important;
  }`;

  const onIframeLoaded = useCallback(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const iframeDoc = iframe.contentDocument;
      if (iframeDoc) {
        const style = iframeDoc.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML = styles;
        iframeDoc.head.appendChild(style);
        setIsReady(true);
      }
    }
  }, [setIsReady]);

  return (
    <CustomIframe
      src='./PrivacyPolicy.html'
      hidden={!isReady}
      onLoad={onIframeLoaded}
      className='w-full min-h-screen bg-[#f4f4f6]   relative'
    />
  );
};

export default Privacy;
