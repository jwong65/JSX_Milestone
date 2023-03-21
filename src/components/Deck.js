import React from 'react'
import '../CSS/card.css'


export default function Deck() {
  return (
    <div>
        <img src={require('../assets/cardBorder.jpg')} className='deck' />
        <div className='centered'>Centered</div>
    </div>
  )
}
