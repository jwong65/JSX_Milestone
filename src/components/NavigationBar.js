import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'


export default function NavigationBar() {

const [theme, setTheme]= useState(localStorage.getItem('theme'))
const toggleTheme =()=>{
  if (theme==='light'){
  setTheme('dark')
}
else{
  setTheme('light')
}}

  return (
    <Navbar>
        <Container>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Nav className='justify-content flex-grow-1'>
                <Nav.Link href='https://github.com/jwong65/JSX_Milestone'>Repository</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}
