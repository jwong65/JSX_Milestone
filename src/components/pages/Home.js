import React from 'react'
import NavigationBar from '../NavigationBar'

import { Card, Button } from 'react-bootstrap'
import '../../CSS/card.css'

import Footer from '../Footer'


export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className='card text-center' style={{width:'1000px'}}>
        <Card style={{width:'30em'}} className='card-block'>
          <Card.Img variant='top' />
          <Card.Title>GitHub Repository</Card.Title>
          <Card.Text>Currently a work in progress. <br/> 
          <b>Any</b> suggestions would be greatly appreciated. <br /> Try to contact me through GitHub concerning the project. This is a personal project that is still ongoing. </Card.Text>
          <Card.Text> Deployment was done with Vercel. </Card.Text>
          <Button href='https://github.com/jwong65/JSX_Milestone' variant='primary'>Repository</Button>
        </Card>
        <Card style={{width: '30em'}} className='card'>
          <Card.Img />
          <Card.Title>Precursor Project</Card.Title>
          <Card.Text>This card project was developed using basic JavaScript, HTML and CSS. This project is the precursor to the current project. Currently trying to port the basics over into this react-app. This was first an assignment but was later added onto as a personal project</Card.Text>
          <Card.Text>Deployment was done with GitHub Pages</Card.Text>
          <div>
            <Button style ={{width:'50%'}} href='https://github.com/jwong65/Milestone-Project-1' variant='primary'>Repository</Button>
            <Button style={{width:'50%'}}href='https://jwong65.github.io/Milestone-Project-1/' variant='info'>Deployment</Button>
            
          </div> 
        </Card>
        <Card style={{width:'30em'}} className='card-block'>
          <Card.Img />
          <Card.Title>Web Sprite Canvas Game</Card.Title>
          <Card.Text>This JavaScript project was used to help learn the Canvas element. </Card.Text>
          <Card.Text>Deployment was done with GitHub Pages</Card.Text>
          <div>
            <Button style={{width:'50%'}} href='https://github.com/jwong65/WebGame' variant='primary'>Repository and Resources</Button>
            <Button style={{width:'50%'}} href='https://jwong65.github.io/WebGame/' variant='info'>Deployment</Button>
          </div>
        </Card>
      </div>
      <Footer />
    </>
  )
}




