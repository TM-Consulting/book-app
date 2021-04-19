import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { addBooks } from "./actions/bookActions";
import { useDispatch } from "react-redux";
import Details from "./pages/Details";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addBooks());
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
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
