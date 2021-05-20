import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { addBooks } from "./actions/bookActions";
import { useDispatch } from "react-redux";
import Details from "./pages/Details";
import { getAllBooks } from "./services/bookService";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreatAccount";
import Dashbord from "./pages/Dashbord";
import { getUser } from "./services/userService";
import { adduser } from "./actions/userAction";
const App = () => {
  const dispatch = useDispatch();

  const getCurrentUser = async () => {
    const recieved = await getUser();

    const authUser = {
      email: recieved.email,
      name: recieved.name,
      isAuth: true,
      id: recieved.id,
    };
    console.log("test user", authUser);
    dispatch(adduser(authUser));
  };
  async function fetchMyAPI() {
    const data = await getAllBooks();
    data.reverse();
    dispatch(addBooks(data));
  }
  useEffect(() => {
    getCurrentUser();
    fetchMyAPI();
  }, []);
  const handleRerunder = () => {
    fetchMyAPI();
  };
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home handleRerunder={handleRerunder} />
          </Route>
          <Route path="/details/:id" exact>
            <Details handleRerunder={handleRerunder} />
          </Route>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <CreateAccount />
          </Route>
          <Route path="/dashboard" exact>
            <Dashbord />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
