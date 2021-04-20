import React, {
  useState,
  useEffect,
  MouseEventHandler,
  ChangeEventHandler,
} from "react";
import CustomForm from "../../components/CustomForm";
import { Container } from "react-bootstrap";
import CustomCard from "../../components/CustomCard";
import "./index.css";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { makeSelectBooks } from "../../selectors/bookSelector";
import { useSelector } from "react-redux";
import { bookData } from "../../types";
import { Button, Card } from "react-bootstrap";
import "./index.css";
import { getBook } from "../../services/bookService";
const Details = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e: string) => {
    console.log("event tt", e);
  };
  const handleClick = () => {};
  const { id } = useParams<{ id: string }>();
  const currentID = id;
  const [show, setShow] = useState(false);
  const [currentBook, setCurrentBook] = useState<bookData>({
    title: "",
    description: "",
    id: 0,
    created_at: "",
    updated_at: "",
  });
  useEffect(() => {
    async function fetchMyAPI() {
      const data: bookData = await getBook(currentID);
      setCurrentBook(data);
    }

    fetchMyAPI();
  }, []);
  return (
    <Container>
      <div className="App">
        {/* {show && (
          <CustomForm
            title={title}
            description={description}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        )} */}
        <CustomCard
          title={currentBook.title}
          description={currentBook.description}
          handleClick={() => {}}
        />
        <div className="footer_btn">
          <Button
            variant="success"
            onClick={() => {
              setShow(true);
            }}
          >
            update
          </Button>
          <Button variant="danger">Delete</Button>
        </div>
      </div>
    </Container>
  );
};

export default Details;
