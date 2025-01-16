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

*   Cards collection index,
*   Exclusive roll animations depending on rolled rarity,
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
<div>
  <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/READMEmedia/roll.png" alt="project-screenshot" width="400" height="500">
</div>
 <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/READMEmedia/supremes.png" alt="project-screenshot" width="500" height="400">
  <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/READMEmedia/uniques.png" alt="project-screenshot" width="800" height="400">
</div>
   <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/READMEmedia/cards.png" alt="project-screenshot" width="790" height="400">
<footer>
   <a href="https://www.gigicodeace.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
  <a style="color: rgb(62, 62, 255);" href="https://www.linkedin.com/in/dobre-robert-03653b331/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a style="color:rgb(47, 47, 47)" href=" https://github.com/GIGI-CodeAce" target="_blank" rel="noopener noreferrer">Github</a>
  <b></b>
   <h4>~GIGI <code>Dore Robert</code></h4>
</footer>