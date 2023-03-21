import React from 'react'

function cardCreation(type, value, text, cardID){
    this.type = type
    this.value =value
    this.text = text
    this.cardID = cardID
}
const card1 = new cardCreation('heal', 5, 'This card will heal you for 5 health', '1')
const card2 = new cardCreation('damage', 3, "This card does 3 damage to your opponent", '2')


export default function Card() {
   
    const entries = Object.entries(card1)
    console.log(entries)
  return (
    <div>
        <h2>{card1.type}, {card1.value}, {card1.text}.</h2>
        <h2>{card2.text}</h2>
        {entries.map(entries => <div>{entries.value}</div>)}
    </div>
  )
}
export {card1}