import React from "react";
import { Button, Card } from "react-bootstrap";
import "./index.css";
const index = ({
  title,
  description,
  showBtn,
  imgUrl,
  handleClick,
}: CustomCardProps) => {
  return (
    <div>
      <Card className="flex" style={{ width: "100%", marginTop: "20px" }}>
        <Card.Img className="header_img" variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>

          {showBtn && (
            <Button variant="primary" onClick={handleClick}>
              more ...
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default index;
