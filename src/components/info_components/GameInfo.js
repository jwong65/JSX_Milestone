import React, { useState } from 'react'

import '../../CSS/styles.css'

export default function GameInfo() {
  const [turn, setTurn] = useState(0)
  return (
    <div className='infoplay'>
      <div>
        <b>This is turn {turn}.</b>
      </div>
      <button onClick={()=>setTurn(turn+1)}>EndTurn</button>
    </div>
  )
}
