import React from 'react';
import ReactDOM from 'react-dom/client';
import CardsIndex from './cardsIndex.tsx';
import Popup from './Popup/popup.tsx';
import './Mobile.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <Popup />
    <CardsIndex />
  </>
);
