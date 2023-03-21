import React from 'react'
import { useState } from 'react'

export default function Health() {
  const [health, setHealth] = useState(20)
  return (
    <div className='health'>Health: {health}</div>
  )
}
