import React, { useState, useEffect } from "react";
import CustomForm from "../../components/CustomForm";
import { Container } from "react-bootstrap";
import CustomCard from "../../components/CustomCard";
import "./index.css";
import { createStructuredSelector } from "reselect";
import { makeSelectBooks } from "../../selectors/bookSelector";
import { useSelector } from "react-redux";
import { bookData } from "../../types";
import { useHistory } from "react-router-dom";
const booksState = createStructuredSelector({
  books: makeSelectBooks(),
});
const Home = () => {
  const history = useHistory();
  const { books } = useSelector(booksState);
  const myClick = (e: number) => {
    history.push(`details/${e}`);
  };
  return (
    <Container>
      <div className="App">
        {console.log("testttt", books)}
        <CustomForm />
        <div className="border_Box">
          {books.map((item: bookData) => (
            <CustomCard
              title={item.title}
              description={item.description}
              handleClick={(e) => {
                myClick(item.id);
              }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
