import React, { useState, useEffect } from "react";
import ProfilePicture from "./ProfilePicture";
import Table from "./Table";
import { Form, FormControl, Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import "./NavBar.css";
import "./ProfilePicture.css";

interface NavBarProps {
  username: string;
}

const NavBar: React.FC<NavBarProps> = ({ username }) => {
  const history = useHistory();
  const profileImage = "./src/assets/profile.png";
  const lessonImage = "./src/assets/lesson.png";
  const testImage = "./src/assets/testn.png";
  const logOutImage = "./src/assets/log-out.png";

  // Function to handle redirection with state
  const handleRedirect = (pathname: string, state: any) => {
    history.push({ pathname, state });
  };

  const handleRedirect1 = (pathname: string) => {
    history.push({ pathname });
  };

  return (
    <div className="navbar variant2">
      {/* Use onClick event handler to trigger redirection with state */}
      <a onClick={() => handleRedirect("/profile", { username: username })}>
        <img
          style={{
            height: "50px",
            width: "50px",
            marginBottom: "0px",
          }}
          src={profileImage}
          alt="Binary"
        />
      </a>
      <a onClick={() => handleRedirect("/tests", { username: username })}>
        <img
          style={{
            height: "50px",
            width: "50px",
            marginBottom: "0px",
          }}
          src={testImage}
          alt="Binary"
        />
      </a>
      <a onClick={() => handleRedirect("/lessons", { username: username })}>
        <img
          style={{
            height: "50px",
            width: "50px",
            marginBottom: "0px",
          }}
          src={lessonImage}
          alt="Binary"
        />
      </a>

      <a
        style={{ marginLeft: "900px" }}
        onClick={() => handleRedirect1("/logIn")}
      >
        <img
          style={{
            height: "50px",
            width: "50px",
            marginBottom: "0px",
          }}
          src={logOutImage}
          alt="Binary"
        />
      </a>
    </div>
  );
};

export default NavBar;
