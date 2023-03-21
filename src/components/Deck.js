import React from 'react'
import '../CSS/card.css'

import { useState } from 'react'

export default function Deck() {
    const [deck, setDeck] = useState([])
  return (
    <div>
        <img src={require('../assets/cardBorder.jpg')} className='deck' />
        <div className='centered'>{deck.length}</div>
    </div>
  )
}
// Considering using https://pixnio.com/ for free use images