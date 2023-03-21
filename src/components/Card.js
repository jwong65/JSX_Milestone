import React from 'react'

function cardCreation(type, value, text, cardID){
    this.type = type
    this.value =value
    this.text = text
    this.cardID = cardID
}
const card1 = new cardCreation('heal', 5, 'This card will heal you for 5 health', '1')
const card2 = new cardCreation('damage', 3, "This card does 3 damage to your opponent", '2')
const card3 = new cardCreation('damage', 3, "This card will do damage equal to the number of cards played this turn, (including this one) times 3", '3')
const card4 = new cardCreation('recycle', null, "All cards in the discard pile will be added back to the deck.", '4')
const card5 = new cardCreation('draw', 1 , "You can draw two cards.", '5')
const card6 = new cardCreation('damage', null, "This card does damage equal to the number of cards you're holding.", '6')

const entries = Object.entries(card1)
var deckArray =[]

function objectToArray(object, array){
  var entries = Object.entries(object)
  array.push(entries)
}
objectToArray(card1, deckArray)
objectToArray(card2, deckArray)
objectToArray(card3, deckArray)
objectToArray(card4, deckArray)
objectToArray(card5, deckArray)
objectToArray(card6, deckArray)

console.log(deckArray)
console.log("This is the deck size", deckArray.length)

export default function Card() {
   
  return (
    <div>
        <h2>{card1.type}, {card1.value}, {card1.text}.</h2>
        <h2>{card2.text}</h2>
    </div>
  )
}
export {deckArray}