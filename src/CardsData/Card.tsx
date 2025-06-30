import React from 'react';

interface SurfaceCardProps{
  rarity: string
  chance: string
  title: string
  desc: string
  img: string
  discovered: boolean
}

  function SurfaceCard(props: SurfaceCardProps) {
  return (
    <div className={`${props.rarity} ${props.discovered ? '' : 'card-container'}`}>
      <span id='newCard'>{props.discovered ? '' : 'New!'}</span>
      <p id="title">{props.title}</p>
      <img className="images" src={props.img} alt={props.title} />
      <p
        className="chance"
        id={
          props.rarity === 'Supreme' ? 'supremeGlow' :
          props.rarity === 'Unique' ? 'uniqueGlow' : undefined
        }
      >
        {props.chance}
      </p>
      <p className="descriptions">{props.desc}</p>
      <p className="moreInfo">
      <span
          className={
            props.rarity === 'Unique' ? 'BonaNova' :
            props.rarity === 'Legendary' ? 'BebasNeue' :
            props.rarity === 'Supreme' ? 'Bodoni' : ''
          }
        >
          {props.rarity}
        </span>{' '}
        • {props.discovered ? 'Discovered' : 'Undiscovered'}
      </p>
    </div>
  );
}

  function Card(props: SurfaceCardProps) {
  return (
    <div className={props.rarity} id={props.discovered ? '' : 'opacity'}>
      <p id='title'>{props.title}</p>
      <img
        className='images' loading='lazy'
      src={props.discovered ? props.img : (props.rarity === 'Supreme' ? 
        'https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/CardImages/questionMark2.png' : 
        'https://raw.githubusercontent.com/GIGIsOtherStuff/MRNGmedia/main/Media/CardImages/questionMark.png')}
    alt={props.title}
      />
        <p
        className="chance"
        id={
          props.rarity === 'Supreme' ? 'supremeGlow' :
          props.rarity === 'Unique' ? 'uniqueGlow' : undefined
        }
      >
        {props.chance}
      </p>
      <p className='descriptions'>{props.discovered ? props.desc : '???'}</p>
      <p className='moreInfo'>
        <span
          className={
            props.rarity === 'Unique' ? 'BonaNova' :
            props.rarity === 'Legendary' ? 'BebasNeue' :
            props.rarity === 'Supreme' ? 'Bodoni' : ''
          }
        >
          {props.rarity}
        </span>
        {' • '}
        {props.discovered ? 'Discovered' : 'Undiscovered'}
      </p>
    </div>
  );
}

export const MemoSurfaceCard = React.memo(SurfaceCard);
export const MemoCard = React.memo(Card);