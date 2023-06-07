import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios';


export const Home = () => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>What pet do you have ?</h1>
      </div>
      <Container className='contA'>



        <Row style={{ alignItems: 'center' }}>

          <Col style={{ textAlign: 'center', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>

            <Card style={{ width: '20rem' }}>
              <Link to="/dosageDogs">
                <Button variant='dark'>
                  <Card.Img variant="top" src="./dog.jpg" />
                  <Card.Body>
                    <Card.Title>Choose dosage for your dog</Card.Title>
                  </Card.Body>
                </Button>
              </Link>
            </Card>
          </Col>

          <Col style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <Card style={{ width: '20rem' }}>
              <Link to="/dosageCats">
                <Button variant='dark'>
                  <Card.Img variant="top" src="./cat.jpg" />
                  <Card.Body>
                    <Card.Title>Choose dosage for your cat</Card.Title>
                  </Card.Body>
                </Button>
              </Link>
            </Card>

          </Col>

        </Row>
        <Row style={{ alignItems: 'center' }}>

          <Col style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <Card style={{ width: '20rem' }}>
              <Link to="/manualControls">
                <Button variant='dark'>
                  <Card.Img variant="top" src="./control.jpg" />
                  <Card.Body>
                    <Card.Title>Manual feeding</Card.Title>
                  </Card.Body>
                </Button>
              </Link>
            </Card>

          </Col>

          <Col style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <Card style={{ width: '20rem' }}>
              <Button variant='dark' onClick={() => {
                        axios.post('http://localhost:3001/animal/add/command', {
                            command : 'calibrate'
                        })
                    }}>
                <Card.Img variant="top" src="./bowl.jpg" />
                <Card.Body>
                  <Card.Title>Calibrate Bowl</Card.Title>
                </Card.Body>
              </Button>
            </Card>

          </Col>

        </Row>

      </Container>

    </>
  )
}
