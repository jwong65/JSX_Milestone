import React from 'react'
import NavigationBar from '../NavigationBar'

import { Card, Button } from 'react-bootstrap'
import '../../CSS/card.css'


export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className='card text-center' style={{width:'1000px'}}>
        <Card style={{width:'30em'}} className='card-block'>
          <Card.Img variant='top' />
          <Card.Title>Repository</Card.Title>
          <Card.Text>Placeholder text</Card.Text>
          <Button href='https://github.com/jwong65/JSX_Milestone' variant='primary'>Repository</Button>
        </Card>
        <Card style={{width: '30em'}} className='card'>
          <Card.Img />
          <Card.Title>Precursor Project</Card.Title>
          <Card.Text>This card project was developed using basic JavaScript, HTML and CSS. This project is the precursor to the current project. Currently trying to port the basics over into this react-app </Card.Text>
          <Card.Text>Deployment was done with GitHub Pages</Card.Text>
          <div>
            <Button style ={{width:'50%'}} href='https://github.com/jwong65/Milestone-Project-1' variant='primary'>Repository</Button>
            <Button style={{width:'50%'}}href='https://jwong65.github.io/Milestone-Project-1/' variant='info'>Deployment</Button>
          </div> 
        </Card>
      </div>
      <div>Home</div>
    </>
  )
}
