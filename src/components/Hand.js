import React from 'react'
import '../CSS/styles.css'

import { useState } from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import { Popover } from 'react-bootstrap'
import { deckArray } from './Card'

const cardsImg =  <img src={ require('../assets/WoodBack.png')} height={'75px'} alt='Card Back' />

export default function Hand() {
// let newImage = document.createElement('img')
// newImage.src ='assets/cardBorder.jpg'

const [cardsInHand, setCards] = useState([1,2,3])
function addCards(){
  setCards([...cardsInHand, cardsImg])
  let newDeckSize = deckArray.length()-1
}
const popoverUp = (
  <Popover id="popover-positioned-top" title="Popover Up">
    Placeholder Text for each card.
  </Popover>
);

  return (
    <div className='hand' id='hands'>
        {cardsInHand.map((index)=>(
          <div key={index}>
            {/* Considering onMouseOver={} or OverlayTrigger */}
            <OverlayTrigger trigger={['hover','hover']} placement='top' overlay={popoverUp}>
            <img src={require('../assets/WoodBack.png')} height={'75px'} alt='Cards in hand' />
            </OverlayTrigger>
          </div>
        ))}
        <button onClick={addCards}>Draw</button>
    </div>
  )
}