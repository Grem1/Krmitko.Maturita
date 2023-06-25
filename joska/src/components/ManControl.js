import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container, Row } from "react-bootstrap"
import axios from 'axios'
import logo from '../assets/logo.jpg'
import { BsHouse } from 'react-icons/bs'
import { Link } from 'react-router-dom';

export const ManControl = () => {
    return (
        <>
            <img src={logo} alt='logo' className='logo' style={{ paddingTop: '10px' }} />
            <Container className='contB'>
                <div  style={{gap: '50px', display: 'flex', flexDirection: 'column', marginTop: '50px'}}>
                    <Row style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Button variant="outline-primary" type='submit' size='lg' onClick={() => {
                            axios.post('http://localhost:3001/animal/add/command', {
                                command: 'food'
                            })
                        }}>
                            Pour Food / 200ml
                        </Button>
                    </Row>
                    <Row style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Button variant="outline-primary" type='submit' size='lg' onClick={() => {
                            axios.post('http://localhost:3001/animal/add/command', {
                                command: 'water'
                            })
                        }}>
                            Pour Water / 200ml
                        </Button>

                    </Row>
                </div>
                <Link to={'/'}>
                    <BsHouse size={'75px'} color='black'/>
                </Link>
            </Container>
        </>
    );
}
