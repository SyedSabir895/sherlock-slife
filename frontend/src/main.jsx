import React from 'react';
import { createRoot } from 'react-dom/client';
import FanFestPage from './pages/FanFestPage.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FanFestPage />
  </React.StrictMode>
);
