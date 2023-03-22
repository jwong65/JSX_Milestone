import React from 'react'
import '../CSS/styles.css'

import { newCard } from './Card'

function addCardtoHand(){
  document.querySelector('.hand').appendChild(newCard)
}

export default function Hand() {
  
  return (
    <div className='hand'></div>
  )
}

export {addCardtoHand}