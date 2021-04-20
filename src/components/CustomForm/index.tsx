import React from "react";
import { Button, Form } from "react-bootstrap";

const index = ({
  title,
  description,
  handleClick,
  handleChange,
}: CustomFormProps) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder="title"
            id="title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="description"
            id="description"
            value={description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleClick}>
          Add
        </Button>
      </Form>
    </div>
  );
};

export default index;
