import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { adduser } from "../../actions/userAction";
import { userLogin } from "../../services/userService";
import "./index.css";

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const backEndUrl = process.env.REACT_APP_BACKEND_URL;
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    if (email && password) {
      let fd = new FormData();
      fd.append("email", email);
      fd.append("password", password);
      const recieved = await userLogin(fd);
      localStorage.setItem("jwt-token", recieved.access_token);
      const authUser = {
        email: recieved.user.email,
        name: recieved.user.name,
        isAuth: true,
        id: recieved.user.id,
      };
      dispatch(adduser(authUser));
      history.push("./dashboard");
    }
  };

  return (
    <Container>
      <div className="sign_container">
        <h5>Sign in</h5>
        <Form className="sign_form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              id="email"
              value={email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="button">
            <Link to="/signup" className="sign_up">
              Create account
            </Link>
            <Button variant="primary" type="submit" onClick={handleClick}>
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default SignIn;
