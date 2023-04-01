import { render } from '@testing-library/react'
import React from 'react'
import '../CSS/styles.css'

function addCardtoHand(){
  // document.querySelector('.hand').appendChild()
  render()
}

let newImage = document.createElement('img')
newImage.src ='assets/cardBorder.jpg'

export default function Hand() {
  
  return (
    <div className='hand'></div>
  )
}

export {addCardtoHand}