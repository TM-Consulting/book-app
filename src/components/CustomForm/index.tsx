import React from "react";
import { Button, Form, ProgressBar } from "react-bootstrap";

const index = ({
  title,
  description,
  image,
  btnLabel,
  search,
  showSearch,
  progress,
  handleClick,
  handleChange,
  handleSearch,
}: CustomFormProps) => {
  return (
    <div>
      <Form>
        {showSearch && (
          <Form.Control
            style={{ marginTop: "40px" }}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={search}
            onChange={handleSearch}
          />
        )}
        <div className="border_Box">
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
              as="textarea"
              rows={4}
              type="text"
              placeholder="description"
              id="description"
              value={description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.File
              id="upload"
              label="Example file input"
              onChange={handleChange}
              value={image}
              style={{ marginBottom: "40px" }}
            />
            {progress && progress > 0 && (
              <ProgressBar now={progress} label={`${progress}%`} />
            )}
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleClick}>
            {btnLabel}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default index;
