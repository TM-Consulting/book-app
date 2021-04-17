import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/Home";
import { addBooks } from "./actions/bookActions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addBooks());
  }, []);
  return <Home />;
};

export default App;
