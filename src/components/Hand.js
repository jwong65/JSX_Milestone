import React from 'react'
import '../CSS/styles.css'

import { useState } from 'react'
import { render } from 'react-dom'


function addCardtoHand(){
  // document.querySelector('.hand').appendChild()
  render(
    <img src={ require('../assets/WoodBack.png')} height={'75px'} />, document.getElementById('hands')
      )
 
}


export default function Hand() {
// let newImage = document.createElement('img')
// newImage.src ='assets/cardBorder.jpg'

const [cardsInHand, setCards] = useState(0)

  return (
    <div className='hand' id='hands'>
        {/* <img src={ require('../assets/WoodBack.png')} height={'75px'} /> */}
    </div>
  )
}

export {addCardtoHand}