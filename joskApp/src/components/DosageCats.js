import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Row } from "react-bootstrap"
import axios from 'axios'
import logo from '../assets/logo.jpg'
import { BsHouse } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { RiSendPlaneLine } from 'react-icons/ri'

export const DosageCats = () => {

  const [foodOptions, setFoodOptions] = useState([]);
  const [waterOptions, setWaterOptions] = useState([]);
  const [doses, setDoses] = useState();
  const [chosenFood, setChosenFood] = useState();


  useEffect(() => {
    if (foodOptions.length === 0) {
      axios.get('http://localhost:3001/animal/cat/options/food').then((data) => {

        setFoodOptions([...data.data])

      })

      axios.get('http://localhost:3001/animal/cat/options/water').then((data) => {
        setWaterOptions([...data.data])
      })

      console.log(foodOptions)

    }
    console.log(doses)
  })




  return (
    <>
      <img src={logo} alt='logo' className='logo' style={{ paddingTop: '10px' }} />
      <Container className='contB'>
        <Form className="rounded p-4 p-sm-3">
          <div style={{ gap: '50px', display: 'flex', flexDirection: 'column' }}>
            <Row className="rowS">
              <Form.Select className='formSelectA' aria-label="Default select example" onChange={e => { setChosenFood(e.target.value) }}>
                <option>How much food you need based on your cats weight ?</option>
                {
                  foodOptions.map((val, key) => {
                    return (
                      <option value={val} key={key} >{val.Weight}kg = {val.Food}g</option>
                    )
                  })
                }
              </Form.Select>
            </Row>
            <Row className="rowS">
              <Form.Select className='formSelectA' aria-label="Default select example" >
                <option>How much water you need based on your cats weight ?</option>
                {
                  waterOptions.map((val, key) => {
                    return (
                      <option value={val} key={key} >{val.Weight}kg = {val.Water}ml</option>
                    )
                  })
                }
              </Form.Select>
            </Row>
            <Row className="rowS">
              <Form.Select className='formSelectA' aria-label="Default select example" onChange={e => { setDoses(e.target.value) }}>
                <option>On how much portions you want to split your dosage ? </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Form.Select>
            </Row>
            <Row style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <RiSendPlaneLine size={'75px'} color='dodgerblue' onClick={() => {
                axios.post('http://localhost:3001/animal/add', {
                  doses: parseInt(doses),
                  weight: chosenFood.Weight,
                  animal: 'cat'
                })
              }} />
            </Row>
          </div>
        </Form>
        <Link to={'/'}>
          <BsHouse size={'75px'} color='black' />
        </Link>
      </Container>
    </>
  )
}
