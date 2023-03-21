import React from 'react'
import { useState } from 'react'

export default function OppHealth() {
  const [opphealth, setHealth] = useState(20)
  return (
    <div className='health'>Health: {opphealth}</div>
  )
}
