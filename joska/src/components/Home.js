import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import axios from 'axios';
import cat from '../assets/cat.svg';
import dog from '../assets/dog.svg';
import food from '../assets/food.svg';
import wh from '../assets/wh.svg';
import logo from '../assets/logo.jpg'

export const Home = () => {
  return (
    <>
      <img src={logo} alt='logo' className='logo' style={{ paddingTop: '10px' }} />
      <Container className='contA'>
        <div className='homePage-container'>
          <h1 style={{ textAlign: 'center' }} className='titleOne'>What pet you want to feed ?</h1>
          <h1 style={{ textAlign: 'center' }} className='titleTwo'>What would you want to do ?</h1>
          <div className='cat'>
            <h2 style={{ textAlign: 'center' }}>Feed your Cat</h2>
            <Link to={'/dosageCats'}>
              <Card className='cardA'>
                <Card.Img src={cat} className='homePage' />
              </Card>
            </Link>
          </div>
          <div className='dog'>
            <h2 style={{ textAlign: 'center' }}>Feed your Dog</h2>
            <Link to={'/dosageDogs'}>
              <Card className='cardA'>
                <Card.Img src={dog} className='homePage' />
              </Card>
            </Link>
          </div>
          <div className='food'>
            <h2 style={{ textAlign: 'center' }}>Manual Feeding</h2>
            <Link to={'/manualControls'}>
              <Card className='cardA'>
                <Card.Img src={food} className='homePage' />
              </Card>
            </Link>
          </div>
          <div className='scale'>
            <h2 style={{ textAlign: 'center' }}>Calibrate bowl</h2>
            <Card className='cardA' onClick={() => {
              axios.post('http://localhost:3001/animal/add/command', {
                command: 'calibrate'
              })
            }}>
              <Card.Img src={wh} className='homePage' />
            </Card>
          </div>
        </div>
      </Container>
    </>
  )
}
