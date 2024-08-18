import React, { useEffect, useState } from 'react';
import './surface.css';
import { Card } from './CardsData/Card.jsx'; 
import useSavedCards from './CardsData/cardsLocal.jsx';
import { SurfaceCard } from "./CardsData/Card.jsx";
import Time from './timePlayed';
import { SupremeAnimation, UniqueAnimation, LegendaryAnimation } from './Animations.jsx';
import './index.css';
import './Mobile.css';

const Index = () => {
  const { Cards, rollCard, selectedCard, rolls } = useSavedCards();
  const [indexUi, setIndexUi] = useState(true);
  const [rareRollColor, setRareRollColor] = useState('black');
  const [backColor, setBackColor] = useState('hsl(0, 0%, 11%)');
  const [rareRollStatus, setRareRollStatus] = useState('none');
  const [btnBackCol, setBtnBackCol] = useState('hsl(0, 0%, 96%)');
  const [rolCool, setRolCool] = useState(true);

  useEffect(() => {
    if (selectedCard && ['Unique', 'Supreme'].includes(selectedCard.rarity)) {
      setRolCool(false)
      setBtnBackCol('hsl(0, 0%, 50%)');
      setTimeout(() => {
        setRolCool(true); 
        setBtnBackCol('hsl(0, 0%, 96%)'); 
      }, 2000);
    }  else if (selectedCard) {
      setRolCool(false);
      setBtnBackCol('hsl(0, 0%, 50%)');
      setTimeout(() => {
        setRolCool(true); 
        setBtnBackCol('hsl(0, 0%, 96%)'); 
      }, 669);
      }
  } , [selectedCard])
  

  const rollButton = () => {
    if (!rolCool) return;
    rollCard();
  };

  const indexTurn = () => {
    setIndexUi((prevIndexUi) => !prevIndexUi);
  };

  const [memes, setMemes] = useState(() => {
    const savedMemes = localStorage.getItem('memesCount');
    return savedMemes !== null ? JSON.parse(savedMemes) : 0;
  });
  
  function updateMemes() {
    setMemes((oldCount) => oldCount + 1);
  }

  useEffect(() => {
    if (selectedCard && selectedCard.discovered === false) {
      updateMemes();
    }
  }, [selectedCard]);

  useEffect(() => {
    localStorage.setItem('memesCount', JSON.stringify(memes));
  }, [memes]);

  useEffect(() => {
    let cleanup;

    if (selectedCard) {
      if (selectedCard.rarity === 'Unique') {
        setRareRollStatus('block');
        cleanup = UniqueAnimation(setBackColor, setRareRollColor);
      } else if (selectedCard.rarity === 'Supreme') {
        setRareRollStatus('block');
        cleanup = SupremeAnimation(setRareRollColor, setBackColor);
      } else if (selectedCard.rarity === 'Legendary') {
        LegendaryAnimation(setBackColor);
      } else {
        setRareRollStatus('none');
      }
    }

    return cleanup;
  }, [selectedCard]);

  const styleBtn = {
    backgroundColor: btnBackCol,
  };

  return (
    <>
      {/* Navbar */}
      <Time rolls={rolls} />
      <div className='logoContainer'>
        <img id='RNGlogo' src='https://github.com/GIGIsOtherStuff/MRNGmedia/raw/main/Media/RNGlogo.png' alt="RNG Logo" />
      </div>

      {/* Surface */}
      <div className="mainRoll">
        <div className="card-ui">
          {selectedCard ? (
            <SurfaceCard key={selectedCard.id} className="newRolledCard" {...selectedCard} />
          ) : (
            <img
              src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/mysteryCard.png"
              alt="Mystery Card"
              className="rolledCard"
            />
          )}
        </div>
        <button id="roll" onClick={rollButton} style={{...styleBtn}}>ROLL</button>
      </div>

      {/* Memes counter */}
      <div className='indexCount'>
        <span id='indexCountContent'>{`${memes} / 39`}</span>
      </div>
      <div id="blend"></div>

      {/* Index UI */}
      <div id="index" onClick={indexTurn} style={{ cursor: 'pointer' }}>
        Memes Index {indexUi ? '˅' : '^'}
      </div>
      {indexUi && (
        <div className="card-list">
          {Cards.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              rarity={item.rarity}
              chance={item.chance}
              title={item.title}
              desc={item.desc}
              discovered={item.discovered}
            />
          ))}
        </div>
      )}
      <style>{`
        .rareRoll {
          display: ${rareRollStatus};
          background-color: ${rareRollColor};
          transition: background-color 0.2s ease;
        }
        .mainRoll {
          background-color: ${backColor};
          transition: background-color 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default Index;