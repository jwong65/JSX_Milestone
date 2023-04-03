import React from 'react'
import '../CSS/card.css'

import { useState } from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'

import { deckArray } from './Card'

export default function Deck() {
  const [deck] = useState([])
  // For loop to push in the inital deck
    for (let i=0; i<deckArray.length; i++){
      deck.push(deckArray[i])
    }
    const popoverLeft = (
        <Popover id="popover-positioned-left" title="Popover left">
          <strong>This is your deck!</strong> <br/> There are {deck.length} cards in the deck.
        </Popover>
      );
    
  return (
    <div>
        <OverlayTrigger trigger={['hover','hover']} placement='left' overlay={popoverLeft}>
            <img src={require('../assets/WoodBack.png')} alt='Back of Deck'className='deck' />
        </OverlayTrigger>
        <div className='centered'>{deck.length}</div>
       
    </div>
  )
}
// Considering using https://pixnio.com/ for free use images