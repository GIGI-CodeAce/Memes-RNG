<h1 align="center" id="title">MEMES RNG </h1>

<p align="center">
  <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/RNGlogo.png" alt="project-image">
</p>

<p id="description" align="center">
  A meme-filled game where random events and internet humor collide for unpredictable fun! Have a gameplay experience and test out your luck with all of the big rarities.
</p>

<h2 align="center">Visit here</h2>

<div align="center">
  <a href="https://gigi-codeace.github.io/Memes-RNG/">github.io/Memes-RNG</a>
</div>

<h2 align="center">🧐 Features</h2>

<h4>Here're some of the project's best features</h4>

*   Famous memes from all around the world
*   Cards collection index
*   Exclusive roll animations depending on rolled rarity
*   An RNG engine for card randomization in function card of rarity

<h2 align="center">Languages and tools used</h2>
<p align="center">
  </a>
  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5" width="40" height="40" />
  </a>
    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/Languages/Colored/css3-original.png" 
            alt="tailwind" width="40" height="40" />
  </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
            alt="javascript" width="40" height="40" />
  </a>
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" 
            alt="typescript" width="40" height="40"/>
  </a>
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" 
            alt="react" width="40" height="40" />
  </a></a>
</p>

<h2 align="center">Snippets of code</h2>

```javascript
// ...
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
// ...
```
<h2 align="center">Project Screenshots</h2>
<div align="center">
<div>
<h3>Rolling</h3>
  <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/READMEmedia/roll.png" alt="project-screenshot" width="400" height="500">
</div>
<h3>Rare undiscovered cards</h3>
 <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/READMEmedia/supremes.png" alt="project-screenshot"  style="width: 100%; height: 350px">
 <hr>
  <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/READMEmedia/uniques.png" alt="project-screenshot" style="width: 100%; height: 250px">
<h2>Few samples</h3>
  <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/READMEmedia/cards.png" alt="project-screenshot" style="width: 100%; height: 400px">
</div>

      ## 🪪 License
This project is licensed under the [MIT License](LICENSE).

<br></br>

[![Portfolio](https://img.shields.io/badge/Portfolio-62b1ff?style=for-the-badge&logo=web&logoColor=white)](https://www.gigicodeace.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-3e3eff?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dobre-robert-03653b331/)
[![GitHub](https://img.shields.io/badge/GitHub-2f2f2f?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GIGI-CodeAce)
[![CSS Battles](https://img.shields.io/badge/CSS%20Battles-ff6e96?style=for-the-badge&logo=css3&logoColor=white)](https://cssbattle.dev/player/gigi)

  <b></b>
   <h4>~GIGI <code>Dore Robert</code></h4>
</footer>