import React from 'react'
import Card from 'react-bootstrap/Card'

import '../CSS/card.css'
// Import for FontAwesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="blockquote-footer">
    <a href='https://www.linkedin.com/in/jason-wong-954193144'><FontAwesomeIcon icon={faLinkedin} size='6x' /> </a>
    Link to my LinkedIn
    </footer>
  )
}
