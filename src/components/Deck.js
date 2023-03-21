import React from 'react'
import '../CSS/card.css'

import { useState } from 'react'

export default function Deck() {
    const [deck, setDeckSize] = useState([])
  return (
    <div>
        <img src={require('../assets/cardBorder.jpg')} className='deck' />
        <div className='centered'>{deck.length}</div>
    </div>
  )
}
