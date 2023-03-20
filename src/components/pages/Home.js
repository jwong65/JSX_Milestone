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
          <Card.Title>Previous Project</Card.Title>
          <Card.Text>More Placeholder text</Card.Text>
          <div>
            <Button style ={{width:'50%'}} href='' variant='info'>New Buttons</Button>
            <Button style={{width:'50%'}}href='' variant='danger'>Second Button</Button>
          </div> 
        </Card>
      </div>
      <div>Home</div>
    </>
  )
}
