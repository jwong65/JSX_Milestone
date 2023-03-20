import React from 'react'
//Importing Components
import Hand from '../Hand'
import PlayerInfo from '../PlayerInfo'
import NavigationBar from '../NavigationBar'
import OpponentInfo from '../OpponentInfo'

import "../../CSS/playingfield.css"

export default function Game() {
  return (
    <div>    
        <NavigationBar />
        <div className='opp'>
          <OpponentInfo />
        </div>
        <div className='player'>
          <PlayerInfo />
          <Hand />
        </div>
    </div>
  )
}
