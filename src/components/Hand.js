import React from 'react'
import '../CSS/styles.css'

import { useState } from 'react'
// import { render } from 'react-dom'

const cardsImg =  <img src={ require('../assets/WoodBack.png')} height={'75px'} alt='Card Back' />

export default function Hand() {
// let newImage = document.createElement('img')
// newImage.src ='assets/cardBorder.jpg'

const [cardsInHand, setCards] = useState([1,2,3])
function addCards(){
  setCards([...cardsInHand, cardsImg])
}

  return (
    <div className='hand' id='hands'>
        {cardsInHand.map((cardsImg, index)=>(
          <div key={index}>
            <img src={require('../assets/WoodBack.png')} height={'75px'} />
          </div>
        ))}
        <button onClick={addCards}>Draw</button>
    </div>
  )
}
