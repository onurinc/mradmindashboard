import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Nav } from "reactstrap";
import NavMenu from "../NavMenu";
import "./Styling/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = { email: email, password: password };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("https://localhost:4443/api/Accounts/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem("token", data.result.token);
        localStorage.setItem("loggedIn", "true");
        window.location = "/commentsdashboard";
      })
      //Then with the error genereted...
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="Login">
      <NavMenu></NavMenu>
      <h2>Sign In</h2>
      <Form className="form">
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button onClick={submitHandler}>Submit</Button>
      </Form>
    </div>
  );
}

export default Login;
