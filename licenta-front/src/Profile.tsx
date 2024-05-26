import React, { useState, useEffect } from "react";
import ProfilePicture from "./ProfilePicture";
import Table from "./Table";
import { Form, FormControl, Button } from "react-bootstrap";
import {
  Redirect,
  useHistory,
  useLocation,
  useParams,
  Link,
} from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import Badge from "./Badge";
import Chat from "./Chat";
import "./Profile.css";
import "./ProfilePicture.css";

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
  numberOfDoneQuest: number;
  scores: {
    [date: string]: number;
  };
}

const Profile: React.FC = () => {
  const location = useLocation<LocationState>();
  const { username } = location.state || { username: "" }; // Default value to prevent errors
  const [userData, setUserData] = useState<UserData | null>(null);
  const [testData, setTestData] = useState<
    { category: string; score: number }[]
  >([]);
  const [descr, setDescr] = useState("");
  const [nastere, setNastere] = useState("");
  const [visible, setVisible] = useState(false);
  const [level, setLevel] = useState("");
  const [score, setScore] = useState(0);
  const [money, setMoney] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const [quest, setQuest] = useState(0);
  const history = useHistory();
  const risingImage = "./src/assets/happy-birthday.png";
  const sparckImage = "./src/assets/confetti.png";

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
        setNastere(data.birthdate);
        setQuest(data.numberOfDoneQuest);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  useEffect(() => {
    if (userData) {
      setDescr(userData.description);
      setMoney(userData.money);
      setScore(userData.score);

      if (userData.tests) {
        const testData = userData.tests.map((testName) => {
          const [category, scoreStr] = testName
            .split(",")
            .map((str) => str.trim());
          const score = parseInt(scoreStr, 10);
          return { category, score };
        });
        setTestData(testData);
      }
    }
  }, [userData]);

  useEffect(() => {
    const checkBirthdayAndUpdateQuest = async () => {
      const today = new Date();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      let monthFormatted = month < 10 ? "0" + month : month.toString();
      let dayFormatted = day < 10 ? "0" + day : day.toString();

      if (nastere) {
        console.log("okkk");
        const birthDay = nastere[0] + nastere[1];
        const birthMonth = nastere[3] + nastere[4];

        if (dayFormatted === birthDay && monthFormatted === birthMonth) {
          setVisible(true);
          const response = await axios.put(
            `http://localhost:8080/api/users/updateNumberOfDoneQuest`,
            null,
            {
              params: {
                username: username,
                newNumberOfDoneQuest: quest + 1,
              },
            }
          );
        }
      }
    };
    checkBirthdayAndUpdateQuest();
  }, [nastere]);

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
        break;
    }
  }, [score]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isLoginSuccessful = true;
    if (isLoginSuccessful) {
      setRedirect(true);
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  if (redirect) {
    return <Redirect to={{ pathname: `/tests`, state: { username } }} />;
  }

  const imageUrl = `./src/assets/${username}.png`;
  const altText = "Description of the image";

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = event.target as HTMLImageElement;
    target.onerror = null;
    target.src = "./src/assets/user.png";
    target.alt = altText;
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <NavBar username={username} />
      <div className="profile-container">
        <div className="profile-content">
          <div className="badge-container" style={{ height: "10px" }}>
            <Badge username={username} level={level} />
          </div>
          <div className="profile-picture-container">
            <img
              className="profile-picture"
              src={imageUrl}
              alt={altText}
              onError={handleImageError}
            />
          </div>
          <div style={{ padding: "10px", fontSize: "16px", marginTop: "0px" }}>
            <br />
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
          <div className="chat-messages">{/* Render chat messages here */}</div>
          <Chat username={username} />
        </div>
      </div>
      {visible && (
        <div className="prediction-div">
          <b>
            <img
              src={sparckImage}
              style={{
                position: "absolute",
                top: "2.5vh",
                left: 0,
                marginLeft: "1vw",
                height: "7vh",
              }}
              alt="Binary"
            />
            La mulți ani, {username}! Ne bucurăm că sărbătorești ziua ta lucrând
            la educația ta. Pentru a te sărbători îți deschidem următorul quest.
          </b>
          <img
            style={{
              position: "absolute",
              bottom: "4vh",
              right: 0,
              marginRight: "2vw",
              height: "13vh",
            }}
            src={risingImage}
            alt="Binary"
          />
          <br></br>
          <br></br>
          <Button
            variant="primary"
            type="submit"
            onClick={() => setVisible(false)}
          >
            Mulțumesc
          </Button>
        </div>
      )}
    </div>
  );
};

export default Profile;
