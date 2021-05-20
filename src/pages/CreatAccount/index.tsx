import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { addUser } from "../../services/userService";

import "./index.css";

const CreateAccount = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const backEndUrl = process.env.REACT_APP_BACKEND_URL;

  const handleChange = (e: any) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirm":
        setConfirm(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleClick = async (e: any) => {
    e.preventDefault();
    if (name && email && password && confirm) {
      let fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("password", password);
      fd.append("password_confirmation", confirm);
      await addUser(fd)
        .then((res) => {
          history.push("/signin");
        })
        .catch((e) => {
          alert("error");
        });
    }
  };

  return (
    <Container>
      <div className="createAccount_container">
        <h5>Create your Account</h5>
        <Form className="createAccount_form">
          <Form.Group controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="name"
              id="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>
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
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="confirm"
              value={confirm}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="button">
            <Link to="/signin" className="sign_in">
              Sign-In
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

export default CreateAccount;
