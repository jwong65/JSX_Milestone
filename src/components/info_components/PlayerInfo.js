import React from 'react'
import Health from '../Health'

import '../../CSS/styles.css'
import Deck from '../Deck'

export default function PlayerInfo() {
  return (
    <div className='playerinfo'>PlayerInfo
        <Health />
        <Deck />
    </div>
  )
}
