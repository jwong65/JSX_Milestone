import React from 'react'
import '../CSS/styles.css'

import { useState } from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import { Popover } from 'react-bootstrap'
import { deckArray } from './Card'

const cardsImg =  <img src={ require('../assets/WoodBack.png')} height={'75px'} alt='Card Back' />

export default function Hand() {
// let newImage = document.createElement('img')
// newImage.src ='assets/cardBorder.jpg'

// Cards need to be randomized but for now let's test.
// for (let i=0; i<deckArray.length;i++){
//   console.log(deckArray[i])
// }

const [cardsInHand, setCards] = useState([1,2,3])
function addCards(){
  setCards([...cardsInHand, cardsImg])
  let newDeckSize = deckArray.length()-1
}
// this.type = type
// this.value =value
// this.text = text
// this.cardID = cardID
const popoverUp = (
  <Popover id="popover-positioned-top" title="Popover Up">
    Placeholder text for cards
  </Popover>
);


  return (
    <div className='hand' id='hands'>
      <div></div>
        {cardsInHand.map((index)=>(
          <div key={index}>
            {/* Considering onMouseOver={} or OverlayTrigger */}
            <OverlayTrigger trigger={['hover','hover']} placement='top' overlay={popoverUp}>
            <img src={require('../assets/WoodBack.png')} height={'75px'} alt='Cards in hand' />
            </OverlayTrigger>
          </div>
        ))}
        <button onClick={addCards}>Draw</button>
    </div>
  )
}