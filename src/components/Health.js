import React from 'react'
import { useState } from 'react'

import { Spinner } from 'react-bootstrap'

export default function Health() {
  const [health, setHealth] = useState(20)
  return (
    
    <div className='health'>
      <Spinner animation='grow' size='sm' />
      Health: {health}
    </div>
  )
}
// Loading spinner for health animation=grow, can also use border for a loading button perhaps