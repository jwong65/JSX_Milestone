import React from 'react'
import NavigationBar from '../NavigationBar'

import '../../CSS/attribution.css'
import Footer from '../Footer'

export default function Attribution() {
  return (
    <>
        <NavigationBar />
        <div>    
            <h1>Attribution</h1>
            <h4>Images were created by Typhen Doryk</h4>
            <p>Link to the card backs are found <a href="https://www.deviantart.com/toomanypenguins/art/Free-Card-Pack-by-Typhen-609353079">here</a></p>
            <h4>LinkedIn Icon provided by FontAwesome</h4>
            <p>Link to icon: <a href='https://fontawesome.com/icons/linkedin?f=brands&s=solid'>Link</a></p>
        </div>
        <div>
          <h4>Sprites were found on <a href='https://craftpix.net/'></a>Craftpix.net</h4>
          <h4>Background image was also found on<a href='https://free-game-assets.itch.io/free-summer-pixel-art-backgrounds'>free-game-assets.itch.io</a></h4>
        </div>
        <Footer />
    </>
  )
}
