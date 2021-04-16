import React from "react";
import { Button, Card } from "react-bootstrap";

const index = () => {
  return (
    <div>
     <Card className="flex" style={{ width: '100%', marginTop: '20px' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  );
};

export default index;
