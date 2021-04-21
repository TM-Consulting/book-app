import React, { useState, useEffect, MouseEventHandler } from "react";
import CustomForm from "../../components/CustomForm";
import { Container } from "react-bootstrap";
import CustomCard from "../../components/CustomCard";
import "./index.css";
import { createStructuredSelector } from "reselect";
import { makeSelectBooks } from "../../selectors/bookSelector";
import { useSelector } from "react-redux";
import { bookData } from "../../types";
import { useHistory } from "react-router-dom";
import { addBook } from "../../services/bookService";
const booksState = createStructuredSelector({
  books: makeSelectBooks(),
});
const Home = ({ handleRerunder }: HomeProps) => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const handleChange = (e: any) => {
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleClick = async (e: any) => {
    e.preventDefault();
    if (title && description) {
      await addBook({ title: title, description: description });
      setDescription("");
      setTitle("");
      handleRerunder();
    }
  };
  const history = useHistory();
  const { books } = useSelector(booksState);
  const myClick = (e: number) => {
    history.push(`details/${e}`);
  };
  return (
    <Container>
      <div className="App">
        <CustomForm
          title={title}
          description={description}
          handleChange={handleChange}
          handleClick={handleClick}
        />
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
