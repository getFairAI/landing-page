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
import App from './App.tsx';
import './index.css';

import Plausible from 'plausible-tracker';
import { SnowProvider } from './context/snow.tsx';

const { enableAutoPageviews } = Plausible({
  hashMode: true,
  domain: 'fair.ar-io.dev',
});

// Hash changes will also trigger page views
enableAutoPageviews();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SnowProvider>
      <App />
    </SnowProvider>
  </React.StrictMode>,
);
