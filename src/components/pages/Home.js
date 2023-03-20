import React from 'react'
import NavigationBar from '../NavigationBar'

import { Card, Button } from 'react-bootstrap'
import '../../CSS/card.css'


export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className='card text-center'>
        <Card style={{width:'15em'}} className='card-block'>
          <Card.Img variant='top' />
          <Card.Title>Repository</Card.Title>
          <Card.Text>Placeholder text</Card.Text>
          <Button href='https://github.com/jwong65/JSX_Milestone' variant='primary'>Repository</Button>
        </Card>
        <Card style={{width: '15em'}} className='card'>
          <Card.Img />
          <Card.Title>Previous Project</Card.Title>
          <Card.Text>More Placeholder text</Card.Text>
          <Button href='' variant='info'>New Buttons</Button>
          <Button href='' variant='danger'>Second Button</Button>
        </Card>
      </div>
      <div>Home</div>
    </>
  )
}
