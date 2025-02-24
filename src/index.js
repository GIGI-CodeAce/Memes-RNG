import React from 'react';
import ReactDOM from 'react-dom/client';
import CardsIndex from "./cardsIndex.tsx"
import Popup from './Popup/popup';


const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <>
            <Popup/>
            <CardsIndex/>
        </>

    );
