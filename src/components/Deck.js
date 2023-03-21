import React from 'react'
import '../CSS/card.css'

import { useState } from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'

export default function Deck() {
    const [deck, setDeck] = useState([])
    const popoverLeft = (
        <Popover id="popover-positioned-left" title="Popover left">
          <strong>Holy guacamole!</strong> Check this info.
        </Popover>
      );
  return (
    <div>
    
        <OverlayTrigger trigger={['hover','hover']} placement='left' overlay={popoverLeft}>
            <img src={require('../assets/WoodBack.png')} className='deck' />
        </OverlayTrigger>
        <div className='centered'>{deck.length}</div>
    </div>
  )
}
// Considering using https://pixnio.com/ for free use images