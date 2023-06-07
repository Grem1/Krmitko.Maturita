import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap"
import axios from 'axios'


export const ManControl = () => {
    return (
        <Container className='contA'>
            <Row>
                <Col style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button variant="outline-success" type='submit' size='lg' onClick={() => {
                        axios.post('http://localhost:3001/animal/add/command', {
                            command : 'food'
                        })
                    }}>
                        Pour Food / 200ml
                    </Button>
                </Col>
                <Col style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button variant="outline-success" type='submit' size='lg'onClick={() => {
                        axios.post('http://localhost:3001/animal/add/command', {
                            command : 'water'
                        })
                    }}>
                        Pour Water / 200ml
                    </Button>

                </Col>
            </Row>

            <Row>
                <Col style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <Button href="/" variant="secondary" size='lg'>
                        Home
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
