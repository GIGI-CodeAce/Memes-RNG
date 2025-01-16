<h1 align="center" id="title">MEMES RNG</h1>

<p align="center">
  <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/RNGlogo.png" alt="project-image">
</p>

<p id="description">
  A meme-filled game where random events and internet humor collide for unpredictable fun! Have a gameplay experience and test out your luck with all of the big rarities.
</p>

<h2 align="center">Play here</h2>

<div align="center">
  <a href="https://gigi-codeace.github.io/Memes-RNG/">github.io/Memes-RNG</a>
</div>

<h2 align="center">🧐 Features</h2>

<h4>Here're some of the project's best features</h4>

*   An RNG engine for card randomization in function card of rarity:

```javascript
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
```
<h2 align="center">Project Screenshots:</h2>

<div align="center">
  <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/READMEmedia/roll.png" alt="project-screenshot" width="250" height="400">
  <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/READMEmedia/supremes.png" alt="project-screenshot" width="450" height="400">
</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/READMEmedia/uniques.png" alt="project-screenshot" width="630" height="400">
</div>
