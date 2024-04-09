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
import Badge from "./Badge";
import Chat from "./Chat";
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
  money: number;
  scores: {
    [date: string]: number; // Cheia este data, iar valoarea este scorul asociat cu acea dată
  };
}

const Profile: React.FC = () => {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const [userData, setUserData] = useState<UserData | null>(null);
  const [testData, setTestData] = useState<
    { category: string; score: number }[]
  >([]);
  const [descr, setDescr] = useState("");

  const [level, setLevel] = useState("");
  const [score, setScore] = useState(0);
  const [money, setMoney] = useState(0);
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
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [username]);

  useEffect(() => {
    if (userData) {
      setDescr(userData.description);
      setMoney(userData.money);
    }
    if (userData && userData.tests) {
      setScore(userData.score);
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

  console.log(score);

  useEffect(() => {
    switch (true) {
      case score < 20:
        setLevel("White");
        break;
      case score < 60:
        setLevel("Yellow");
        break;
      case score < 100:
        setLevel("Orange");
        break;
      case score < 140:
        setLevel("Green");
        break;
      case score < 180:
        setLevel("Blue");
        break;
      case score < 220:
        setLevel("Brown");
        break;
      case score < 280:
        setLevel("Red");
        break;
      case score >= 280:
        setLevel("Black");
        break;
      default:
        // handle any other case
        break;
    }
  }, [score]);

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
    <div style={{ overflowX: "hidden" }}>
      <NavBar username={username}></NavBar>

      <div className="profile-container">
        <div className="profile-content">
          <div className="badge-container" style={{ height: "10px" }}>
            <Badge username={username} level={level}></Badge>
          </div>
          <div className="profile-picture-container">
            <img className="profile-picture" src={imageUrl} alt={altText} />
          </div>
          <div
            style={{
              padding: "10px",
              fontSize: "16px",
              marginTop: "0px",
            }}
          >
            <br></br>
            <div className="textStyle">
              <b>Username: {username}</b>
            </div>
            <div className="textStyle" style={{ width: "280px" }}>
              <i>Despre tine: "{descr}"</i>
            </div>
          </div>
          <Form onSubmit={handleSubmit}>
            {testData.length > 0 && <Table data={testData} />}
          </Form>
        </div>
        <div className="chat-container">
          {/* Chat UI */}
          <div className="chat-messages">{/* Render chat messages here */}</div>
          <Chat username={username}></Chat>
        </div>
      </div>
    </div>
  );
};

export default Profile;
