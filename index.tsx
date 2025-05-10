import ReactDOM from 'react-dom/client';
import CardsIndex from './src/cardsIndex.tsx';
import Popup from './src/Popup/popup.tsx';
import './src/Mobile.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <Popup />
    <CardsIndex />
  </>
);
