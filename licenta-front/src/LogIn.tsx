import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import "./LogIn.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [redirect1, setRedirect1] = useState(false);
  const history = useHistory();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password: password }),
      });

      if (response.ok) {
        // Login successful
        setRedirect(true); // Redirect to profile page
      } else {
        // Login failed
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Nu se poate face conexiunea cu serverul");
    }
  };

  // Redirect to "/profile" after successful login
  // Redirect to "/profile" after successful login
  if (redirect) {
    return (
      <Redirect to={{ pathname: `/profile`, state: { username: email } }} />
    );
  }

  const handleSingIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setRedirect(true);
    history.push("/signin");
  };

  if (redirect1) {
    return <Redirect to={{ pathname: `/signin` }} />;
  }
  const gameImage = "./src/assets/game.png";
  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="myFormContainer"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 style={{ marginRight: "10px" }}>Bine ai venit în TechTrove!</h3>
          <img
            className="img-top"
            style={{ height: "50px" }}
            src={gameImage}
            alt="Binary"
          />
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <FormControl
              type="input"
              placeholder="Username"
              value={email}
              style={{ height: "30px", width: "200px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            controlId="formBasicPassword"
            style={{ marginTop: "20px" }}
          >
            <FormControl
              type="password"
              placeholder="Parola"
              value={password}
              style={{ height: "30px", width: "200px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
        <h4 style={{ marginTop: "20px", color: "black" }}>Nu ai cont?</h4>{" "}
        {/* Moved outside the form */}
        <Button variant="primary" onClick={handleSingIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default LogIn;
