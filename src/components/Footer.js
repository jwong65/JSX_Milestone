import React from 'react'

import '../CSS/card.css'
// Import for FontAwesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
    <a href='https://www.linkedin.com/in/jason-wong-954193144'target='_blank' ><FontAwesomeIcon icon={faLinkedin} size='6x' /> </a>
    Link to my LinkedIn
    </footer>
  )
}
