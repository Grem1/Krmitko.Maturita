import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap"

export const ManControl = () => {
    return (
        <Container className='contA'>
            <Row>
                <Col style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button variant="outline-success" type='submit' size='lg'>
                        Pour Food / 200ml
                    </Button>
                </Col>
                <Col style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button variant="outline-success" type='submit' size='lg'>
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
