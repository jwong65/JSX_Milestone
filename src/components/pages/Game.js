import React from 'react'
//Importing Components
import Hand from '../Hand'
import NavigationBar from '../NavigationBar'

import OpponentInfo from '../info_components/OpponentInfo'
import PlayerInfo from '../info_components/PlayerInfo'
import GameInfo from '../info_components/GameInfo'

import "../../CSS/playingfield.css"
import { useState, useEffect } from 'react'
import OppHand from '../OppHand'


export default function Game() {
  const [checkVictory, setState] = useState(false)
  
  useEffect(()=>{
    console.log(checkVictory)
  }, [checkVictory])
  return (
    <div>    
        <NavigationBar />
        <div className='background'>
          <div className='opp'>
            <OppHand />
            <OpponentInfo />
          </div>
          <div className='gameinfo'>
            <GameInfo />
          </div>
          <div className='player'>
            <PlayerInfo />
            <Hand />
            <button onClick={()=>setState(true)}>Set State to True</button>
            <button onClick={()=>setState(false)}>Set State to False </button>
          </div>
        </div>
    </div>
  )
}
