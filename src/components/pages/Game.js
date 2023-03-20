import React from 'react'
//Importing Components
import Hand from '../Hand'
import NavigationBar from '../NavigationBar'

import OpponentInfo from '../info_components/OpponentInfo'
import PlayerInfo from '../info_components/PlayerInfo'
import GameInfo from '../info_components/GameInfo'

import "../../CSS/playingfield.css"

export default function Game() {
  return (
    <div>    
        <NavigationBar />
        <div className='background'>
          <div className='opp'>
            <OpponentInfo />
          </div>
          <div className='gameinfo'>
            <GameInfo />
          </div>
          <div className='player'>
            <PlayerInfo />
            <Hand />
          </div>
        </div>
    </div>
  )
}
