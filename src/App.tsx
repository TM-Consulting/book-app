import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { addBooks } from "./actions/bookActions";
import { useDispatch } from "react-redux";
import Details from "./pages/Details";
import { getAllBooks } from "./services/bookService";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/details/:id" exact>
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
