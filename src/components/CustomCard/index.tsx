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
  const imgOrVideo = () => {
    const list_len = imgUrl ? imgUrl.split("/") : [];
    const item = list_len[list_len.length - 1];
    if (item) {
      if (item.includes("jpg")) return false;
      else return true;
    } else return false;
  };
  return (
    <div>
      <Card className="flex" style={{ width: "100%", marginTop: "20px" }}>
        {imgOrVideo() ? (
          <video className="header_img"  width="320" height="240" controls>
            <source src={imgUrl} type="video/mp4" />
          </video>
        ) : (
          <Card.Img className="header_img" variant="top" src={imgUrl} />
        )}
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
