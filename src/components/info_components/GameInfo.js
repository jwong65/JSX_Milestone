import React, { useState } from 'react'

import '../../CSS/styles.css'
import { deckArray } from '../Card'


export default function GameInfo() {
  const [turn, setTurn] = useState(0)
  return (
    <div className='infoplay'>
      <div>
        <b>This is turn {turn}.</b>
      </div>
      <button onClick={()=>setTurn(turn+1)}>EndTurn</button>
      <div>
        <b>This is the button to console.log deck </b>
        <button onClick={()=>console.log(deckArray)}>Deck Array</button>
      </div>
    </div>
  )
}
