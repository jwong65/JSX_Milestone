import { render } from '@testing-library/react'
import React from 'react'
import '../CSS/styles.css'

function addCardtoHand(){
  // document.querySelector('.hand').appendChild()
  render()
}


export default function Hand() {
// let newImage = document.createElement('img')
// newImage.src ='assets/cardBorder.jpg'
  
  return (
    <div className='hand'>
        <img src={ require('../assets/WoodBack.png')} height={'75px'} />
    </div>
  )
}

export {addCardtoHand}