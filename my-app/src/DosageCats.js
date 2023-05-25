import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap"
import axios from 'axios'



export const DosageCats = () => {

  const [foodOptions,setFoodOptions] = useState([]);
  const [waterOptions,setWaterOptions] = useState([]);
  const [doses,setDoses] = useState();
  const [chosenFood,setChosenFood] = useState();
  

  useEffect (() =>{
    if(foodOptions.length == 0){
      axios.get('http://localhost:3001/animal/cat/options/food').then((data) =>{
      
      setFoodOptions([...data.data])
        
      })
  
      axios.get('http://localhost:3001/animal/cat/options/water').then((data) =>{
        setWaterOptions([...data.data])
      })
  
      console.log(foodOptions)
      
    }
    console.log(doses)
  }) 

  
  
 
  return (
    <>
      <Container className='contA'>
        <Form className="rounded p-4 p-sm-3">

          <Row className="rowD">
            <Col>
              <Form.Select aria-label="Default select example" onChange={e => {setChosenFood(e.target.value)}}>
                <option>How much food you need based on your cats weight ?</option>
                {
                foodOptions.map((val, key) =>{

                  return (
                    <option value={val} key = {key} >{val.Weight}kg = {val.Food}g</option>
                  )
                })
                }
              </Form.Select>
            </Col>
            <Col>
              <Form.Select aria-label="Default select example" >
                <option>How much water you need based on your cats weight ?</option>
                {
                waterOptions.map((val, key) =>{
                  console.log(val)

                  return (
                    <option value={val} key = {key} >{val.Weight}kg = {val.Water}ml</option>
                  )
                })
                }
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Select aria-label="Default select example" onChange={e => {setDoses(e.target.value)}}>
                <option>On how much portions you want to split your dosage ? </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button variant="outline-success" type="submit" size='lg' onClick={() =>{
                axios.post('http://localhost:3001/animal/add', {
                  doses : parseInt(doses),
                  weight: chosenFood.Weight,
                  animal:'cat'
                })
              }}>
                Submit
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
        </Form>


      </Container>


    </>

  )
}
