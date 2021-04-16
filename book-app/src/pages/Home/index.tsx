import React from "react";
import CustomForm from "../../components/CustomForm";
import { Container } from "react-bootstrap";
import CustomCard from "../../components/CustomCard";
import "./index.css";
const Home = () => {
  return (
    <Container>
      <div className="App">
        <CustomForm />
        <div className="border_Box">
          <CustomCard />
        </div>
      </div>
    </Container>
  );
};

export default Home;
