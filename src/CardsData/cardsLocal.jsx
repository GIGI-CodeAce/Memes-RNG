import { useState, useEffect } from 'react';
import GetCards from './CardsInfo.js';

const useSavedCards = () => {
  const initialCards = () => {
    const savedCards = localStorage.getItem('cards');
    return savedCards ? JSON.parse(savedCards) : GetCards();
  };

  const [Cards, setCards] = useState(initialCards());
  const [selectedCard, setSelectedCard] = useState(null);
  const [rolCool, setRolCool] = useState(true);
  const [coolDown, setCoolDown] = useState(669); 

  const [rolls, setRolls] = useState(() => {
    const savedRolls = localStorage.getItem('roll');
    return savedRolls !== null ? JSON.parse(savedRolls) : 0;
  });

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(Cards));
  }, [Cards]);

  const parseChance = (chance) => {
    const parts = chance.split(' in ');
    return parts.length === 2 ? (1 / parseInt(parts[1], 10)) : 0;
  };

  const totalWeight = Cards.reduce((sum, card) => sum + parseChance(card.chance), 0);

  const getRandomCard = () => {
    const rand = Math.random() * totalWeight;
    let cumulativeWeight = 0;
    for (let card of Cards) {
      cumulativeWeight += parseChance(card.chance);
      if (rand < cumulativeWeight) {
        return card;
      }
    }
    return null;
  };

  const rollsIncrease = () => {
    setRolls((oldCount) => {
      const newCount = oldCount + 1;
      localStorage.setItem('roll', JSON.stringify(newCount));
      return newCount;
    });
  };


  const rollCard = () => {
      const rolledCard = getRandomCard();
      if (rolledCard) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === rolledCard.id ? { ...card, discovered: true } : card
          )
        );


        rollsIncrease();

        setSelectedCard(rolledCard);
      }
  };

  return {
    Cards,
    selectedCard,
    rollCard,
    rolls,
    coolDown,
    setCoolDown,
    setRolCool
  };
};

export default useSavedCards;