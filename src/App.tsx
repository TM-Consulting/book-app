import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/Home";
import { addBooks } from "./actions/bookActions";
import { useDispatch } from "react-redux";
import { getAllBooks } from "./services/bookService";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMyAPI() {
      const data =  await getAllBooks();
       dispatch(addBooks(data));
    }

    fetchMyAPI();
  }, []);

  return <Home />;
};

export default App;
