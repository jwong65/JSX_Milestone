import React from 'react'
import NavigationBar from '../NavigationBar'

import { Card, Button } from 'react-bootstrap'
import '../../CSS/card.css'


export default function Home() {
  return (
    <>
      <NavigationBar />
      <Card style={{width:'15em'}} className='card'>
        <Card.Img variant='top' />
        <Card.Title>Repository</Card.Title>
        <Card.Text>Placeholder text</Card.Text>
        <Button variant='primary'>Repository</Button>
      </Card>
      <div>Home</div>
    </>
  )
}
