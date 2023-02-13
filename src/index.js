import React from 'react';
import ReactDom from 'react-dom/client';
import { CountryList } from './components/country-list';
import './cssreset-meyers.css'
import './index.css'

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountryList />
  </React.StrictMode>
);