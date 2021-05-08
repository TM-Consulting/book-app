import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const index = ({
  name,
  email,
  city,
  handleChange,
  handleClick,
}: ProfileFormProps) => {
  return (
    <div className="mt-5 pt-5">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name" value={name} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Email" placeholder="Email" value={email} onChange={handleChange} />
          </Form.Group>
        </Form.Row>


        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" value={city} onChange={handleChange} />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Edit</Button>
      </Form>
    </div>
  )
}

export default index
