import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import employee from './Employee';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom'



function Add() {

  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState('')
  const [desig, setDesig] = useState('')
  const [salary, setSalary] = useState('')

  let history=useNavigate()

  const handleAdd=(e)=>{
    e.preventDefault()
    let ids=uuid()
    let uniqueid = ids.slice(0,8)

    employee.push(
      {
        id:uniqueid,
        name:uname,
        age:age,
        desig:desig,
        salary:salary
      }
    )

    history('/Mainpage')

  }

  return (
    <>
      <h1 className='text-center mt-5'>Add Antique item</h1>
      <p className='mt-4 text-center'>Enter correct details</p>

      <Row>

        <Col md={3}>
          <img
            src=''
          />
        </Col>

        <Col md={6}>

          <Form className='mt-5 p-4 border border'>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Certificate number</Form.Label>
              <Form.Control value={uname} type="text" placeholder='Employee Name' required
              onChange={(e) => setUname(e.target.value)}
              />

              <Form.Label>Year</Form.Label>
              <Form.Control value={age} type="number" required
              onChange={(e) => setAge(e.target.value)}
              />

              <Form.Label>Description</Form.Label>
              <Form.Control value={desig} type="text" required
               onChange={(e) => setDesig(e.target.value)}
              />

              <Form.Label>Price</Form.Label>
              <Form.Control value={salary} type="number" required
               onChange={(e) => setSalary(e.target.value)}
              />

            </Form.Group>

            <Button onClick={(e)=>handleAdd(e)} variant="primary" type="submit">
              Submit
            </Button>

          </Form>
        </Col>

      </Row>

    </>
  )
}

export default Add