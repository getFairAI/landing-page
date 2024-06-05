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
import ReactDOM from 'react-dom/client';
import Home from './home.tsx';
import './index.css';
import { Outlet, RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './components/layout.tsx';
import Privacy from './privacy.tsx';
import { Helmet } from 'react-helmet';
import { LinksProvider } from './context/links.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <LinksProvider>
        <Layout>
          <Outlet />
        </Layout>
      </LinksProvider>
    ),
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'privacy-policy',
        element: <Privacy />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Helmet>
      <title>FairAI | Simple and Powerful AI Marketplace</title>
      <meta
        name='description'
        content='Unlock the full potential of democratized and open-source AI with FairAI.'
      />
      <meta property='og:url' content='getfair.ai' />
      <meta property='og:site_name' content='FairAI | Simple and Powerful AI Marketplace' />
      <meta property='og:locale' content='en_US' />
      <meta property='og:image' content='./fairai_banner_whitebg.png' />
      <meta name='twitter:title' content='FairAI | Simple and Powerful AI Marketplace' />
      <meta
        name='twitter:description'
        content='Unlock the full potential of democratized and open-source AI with FairAI.'
      />
      <meta name='twitter:image' content='./fairai_banner_whitebg.png' />
      <meta name='twitter:card' content='./fairai_banner_whitebg.png' />
    </Helmet>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
