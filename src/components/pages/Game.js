import React from 'react'
//Importing Components
import Hand from '../Hand'
import PlayerInfo from '../PlayerInfo'
import NavigationBar from '../NavigationBar'


export default function Game() {
  return (
    <div>    
        <NavigationBar />
        <PlayerInfo />
        <Hand />
    </div>
  )
}
