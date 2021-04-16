import React, { useState } from "react";
import CustomForm from "../../components/CustomForm";
import { Container } from "react-bootstrap";
import CustomCard from "../../components/CustomCard";
import "./index.css";
const Home = () => {
  const books = [
    {
      title: "ANtikhristos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officia, totam laboriosam tempore corporis asperiores perspiciatis iure, possimus corrupti rem cumque repellat eius. Inventore saepe minima expedita, facere nobis et.",
    },
    {
      title: "BZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officia, totam laboriosam tempore corporis asperiores perspiciatis iure, possimus corrupti rem cumque repellat eius. Inventore saepe minima expedita, facere nobis et.",
    },
    {
      title: "AHMED_MOVICH",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officia, totam laboriosam tempore corporis asperiores perspiciatis iure, possimus corrupti rem cumque repellat eius. Inventore saepe minima expedita, facere nobis et.",
    },
  ];
  return (
    <Container>
      <div className="App">
        <CustomForm />
        <div className="border_Box">
          {books.map((item) => (
            <CustomCard
              title={item.title}
              description={item.description}
              handleClick={() => {}}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
