import React, { useState } from "react";
import { Form, FormControl, Button, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [dob, setDob] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
          birthdate: dob, // Assuming you have birthdate stored in a variable
          description: description, // Assuming you have description stored in a variable
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        // Registration successful
        setRedirect(true); // Redirect to profile page or login page
      } else {
        // Registration failed
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (redirect) {
    return (
      <Redirect to={{ pathname: `/profile`, state: { username: email } }} />
    );
  }

  return (
    <div className="myFormContainerr">
      {showSuccess && <Alert variant="success">Sign in successful!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <FormControl
            type="input"
            placeholder="Username"
            value={email}
            style={{ height: "25px" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId="formBasicPassword">
          <FormControl
            type="password"
            placeholder="Password"
            value={password}
            style={{ height: "25px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId="formBasicDescription">
          <FormControl
            style={{ height: "40px" }}
            type="input"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId="formBasicDOB">
          <FormControl
            style={{ marginLeft: "22px", width: "120px", height: "25px" }}
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit" style={{ marginLeft: "35px" }}>
          Sign In
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;
