import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import "./SubmitPage.css";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";

interface LocationState {
  username: string;
  score: number;
  calificativ: string;
  category: string;
  questions: Question[];
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
}
interface Question {
  _id: string;
  category: string;
  text: string;
  answers: string[];
  correctAnswer: string;
}

function SubmitPage() {
  const location = useLocation<LocationState>();
  const image = "./src/assets/exam.png";
  const { username, score, calificativ, category, questions } = location.state;
  const [redirectTests, setRedirectTests] = useState<boolean>(false);
  const [redirectLessons, setRedirectLessons] = useState<boolean>(false);
  const [redirectRaspunsuri, setRedirectRaspunsuri] = useState<boolean>(false);
  const likeImage = "./src/assets/like.png";
  const dislikeImage = "./src/assets/dislike.png";

  const [userData, setUserData] = useState<UserData | null>(null);
  const [testData, setTestData] = useState<
    { category: string; score: number }[]
  >([]);

  console.log(questions);
  console.log(calificativ);
  const handleButtonTests = () => {
    setRedirectTests(true);
  };

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

  useEffect(() => {
    const updateTests = async () => {
      try {
        const response = await axios.put(
          `http://localhost:8080/api/users/updateTests`,
          null,
          {
            params: {
              username: username,
              newTests: category + ", " + score * 2,
            },
          }
        );

        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error updating tests:", error);
      }

      try {
        const response = await axios.put(
          `http://localhost:8080/api/users/updateScore`,
          null,
          {
            params: {
              username: username,
              newScore: score * 4,
            },
          }
        );
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error updating money:", error);
      }
    };

    updateTests();
  }, [userData]);

  console.log(testData);
  if (redirectTests) {
    return (
      <Redirect
        to={{
          pathname: `/tests`,
          state: { username: username },
        }}
      />
    );
  }

  const handleButtonLessons = () => {
    setRedirectLessons(true);
  };

  if (redirectLessons) {
    return (
      <Redirect
        to={{
          pathname: `/lessons`,
          state: { username: username },
        }}
      />
    );
  }

  const handleButtonRaspunsuri = () => {
    setRedirectRaspunsuri(true);
  };

  if (redirectRaspunsuri) {
    return (
      <Redirect
        to={{
          pathname: `/raspunsuri`,
          state: {
            username: username,
            category: category,
            questions: questions,
          },
        }}
      />
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        backgroundImage:
          "linear-gradient(to right, rgba(72, 117, 166, 0.698), #d3c5ff9c)",
      }}
      className="divForSubmit"
    >
      <div style={{ marginBottom: "10px" }}>
        <h1>Scorul tău: {2 * score}</h1>
      </div>
      <Button
        variant="primary"
        type="submit"
        style={{
          width: "300px",
          backgroundColor: "transparent",
          marginRight: "10px",
          color: "#4875a6bd",
          fontSize: "20px",
        }}
        onClick={handleButtonRaspunsuri}
      >
        Vrei să vezi răspunsurile corecte?
      </Button>
      <div>
        <h3
          style={{
            color: "#4875a6b2",
          }}
        >
          Calificativ:
        </h3>
        {calificativ === "good" ? ( // Verifică condiția
          <img
            className=""
            style={{ height: "90px" }}
            src={likeImage}
            alt="Like"
          />
        ) : (
          <img
            className=""
            style={{ height: "90px" }}
            src={dislikeImage}
            alt="Dislike"
          />
        )}
      </div>

      <div>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100px",
            backgroundColor: "#333dd7",
            marginRight: "10px",
            marginTop: "20px",
          }}
          onClick={handleButtonTests}
        >
          Teste
        </Button>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100px",
            backgroundColor: "#333dd7",
            marginLeft: "10px",
          }}
          onClick={handleButtonLessons}
        >
          Lecții
        </Button>
        <img
          className="img-top-good-right"
          style={{ height: "90px" }}
          src={image}
          alt="Binary"
        />

        <img
          className="img-top-good-right"
          style={{ height: "90px" }}
          src={image}
          alt="Binary"
        />
      </div>
    </div>
  );
}

export default SubmitPage;
