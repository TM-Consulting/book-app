import React from 'react'
import { Button, Form } from 'react-bootstrap'

const index = () => {
    return (
        <div>
           <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="title" placeholder="title" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="description" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> 
        </div>
    )
}

export default index
