import React, { useState, useEffect } from "react";
import ProfilePicture from "./ProfilePicture";
import Table from "./Table";
import { Form, FormControl, Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import "./Profile.css";
import "./ProfilePicture.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
interface LocationState {
  username: string;
}

interface UserData {
  id: {
    timestamp: number;
    date: string;
  };
  username: string;
  password: string;
  description: string;
  birthdate: string;
  tests: string[];
  score: number;
}

const Profile: React.FC = () => {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const [userData, setUserData] = useState<UserData | null>(null);
  const [testData, setTestData] = useState<
    { category: string; score: number }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/users/${username}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [username]);

  useEffect(() => {
    if (userData && userData.tests) {
      const testData = userData.tests.map((testName, index) => {
        const [category, scoreStr] = testName
          .split(",")
          .map((str) => str.trim());
        const score = parseInt(scoreStr, 10); // Parse score as an integer
        return { category, score };
      });
      setTestData(testData);
    }
  }, [userData]);

  const [redirect, setRedirect] = useState(false);
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Simulate a successful login (replace with your actual login logic)
    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      // Set the redirect state to true after successful login
      setRedirect(true);
    } else {
      // Handle unsuccessful login
      alert("Login failed. Please check your credentials.");
    }
  };

  // Redirect to "/profile" when redirect state is true
  if (redirect) {
    return (
      <Redirect to={{ pathname: `/tests`, state: { username: username } }} />
    );
  }
  const imageUrl = "./src/assets/" + username + ".png";
  const altText = "Description of the image";

  return (
    <div>
      <NavBar username={username}></NavBar>
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-container">
            <img className="profile-picture" src={imageUrl} alt={altText} />
          </div>
          <div className="textStyle">
            <b>Username: {username}</b>
          </div>
          <Form onSubmit={handleSubmit}>
            {testData.length > 0 && <Table data={testData} />}
            <br />
            <br />
            <Button
              variant="primary"
              type="submit"
              style={{
                backgroundColor: "#333dd7b8",
                marginRight: "0px",
                display: "flex",
                alignItems: "center", // Aliniaza textul în mijlocul butonului
                justifyContent: "center", // Aliniaza textul și în orizontală
              }}
            >
              See more tests
            </Button>
          </Form>
        </div>
        <div className="chat-container">
          {/* Chat UI */}
          <div className="chat-messages">{/* Render chat messages here */}</div>
          <Form className="chat-input">
            <FormControl type="text" placeholder="Type a message" />
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
