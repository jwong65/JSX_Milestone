import React from 'react'
import '../CSS/card.css'

import { useState } from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'

import Card, {card1} from './Card'
export default function Deck() {
    const [deck] = useState([])
    deck.push(card1)
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