import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
// import { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'


export default function NavigationBar() {

  return (
    <Navbar>
        <Container>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Nav>
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/game'>
                <Nav.Link>Game</Nav.Link>
              </LinkContainer>
            </Nav>
        </Container>
    </Navbar>
  )
}




// const [theme, setTheme]= useState(localStorage.getItem('theme'))
// const toggleTheme =()=>{
//   if (theme==='light'){
//   setTheme('dark')
// }
// else{
//   setTheme('light')
// }}
