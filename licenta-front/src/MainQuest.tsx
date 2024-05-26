import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./MainQuest.css";

interface LocationState {
  username: string;
  number: number;
  doneQuest: number;
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

interface Question {
  _id: string;
  category: string;
  text: string;
  answers: string[];
  correctAnswer: string;
  photo: string;
}

const MainQuest: React.FC = () => {
  const location = useLocation<LocationState>();
  const { username, number, doneQuest } = location.state;
  const [visible, setVisible] = useState(false);
  const [visibleAnswer, setVisibleAnswer] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [redirectSubmitQuest, setRedirectSubmitQuest] =
    useState<boolean>(false);
  const [dnq, setDnq] = useState<number>(0);
  const mysteryImage = "./src/assets/mystery.png";
  const treasureImage = "./src/assets/treasure.png";
  const treasureMapImage = "./src/assets/treasure-map.png";
  const eyeImage = "./src/assets/search.png";
  const [score, setScore] = useState<number>(0);
  const [sold, setSold] = useState<number>(0);

  const [doneQuesst, setDoneQuest] = useState(0);

  const [change, setChange] = useState(false);

  console.log("aaaaaaaaaaa" + number);
  const category = "Quest" + number;

  useEffect(() => {
    fetchQuestions();
  }, []);

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
        setSold(data.money);
        setDnq(data.numberOfDoneQuest);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [username]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeElapsed(timeElapsed + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeElapsed]);

  const fetchQuestions = () => {
    const url = `http://localhost:8080/api/questions/quest?category=${category}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        setSelectedAnswer("");
      })
      .catch((error) => console.error("Error fetching questions:", error));
  };

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = (state: string) => {
    console.log(selectedAnswer); // Make sure selectedAnswer is correct here
    setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    if (state === "N") {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(""); // Reset selectedAnswer for the next question
    } else {
      scoreUpdate();
    }
  };

  const handleClickOnImage = () => {
    setVisible(true);
  };

  const handleFindAnswer = () => {
    setVisible(false);
    setVisibleAnswer(false);
  };

  const handleFirstClick = async () => {
    setVisibleAnswer(true);
    try {
      setSold(sold - 10);
      const response = await axios.put(
        `http://localhost:8080/api/users/updateMoney`,
        null,
        {
          params: {
            username: username,
            newMoney: -10,
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error updating money:", error);
    }
  };

  // Adding a useEffect to ensure selectedAnswer is updated before calling setAnswers
  useEffect(() => {
    // Make sure selectedAnswer is correct here

    if (selectedAnswer != "" && selectedAnswer != answers[answers.length])
      setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }, [selectedAnswer]);

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
        setDoneQuest(data.numberOfDoneQuest);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [username]);

  const scoreUpdate = async () => {
    let newScore = 0;
    console.log(answers);

    for (let i = 0; i < answers.length; i += 2) {
      const j = i / 2;
      if (answers[i] == questions[j].correctAnswer) {
        console.log(1);
        newScore = newScore + 1;
      }
    }
    console.log("Score" + newScore);

    console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", dnq, newScore);

    if (
      (number - 1 == doneQuesst && newScore >= 3 && doneQuesst < 5) ||
      (doneQuest == 5 && newScore == 5) ||
      (dnq == 5 && newScore == 5)
    ) {
      setChange(true);
      try {
        const response = await axios.put(
          `http://localhost:8080/api/users/updateNumberOfDoneQuest`,
          null,
          {
            params: {
              username: username,
              newNumberOfDoneQuest: number,
            },
          }
        );
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error updating score:", error);
      }
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/updateScore`,
        null,
        {
          params: {
            username: username,
            newScore: newScore,
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error updating score:", error);
    }
    setScore(newScore);
    setRedirectSubmitQuest(true);
  };

  if (currentQuestionIndex >= questions.length) {
    // If all questions have been answered, display result or redirect
    return <div>{/* Display result or redirect logic */}</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (redirectSubmitQuest) {
    return (
      <Redirect
        to={{
          pathname: `/submit-quest`,
          state: {
            username: username,
            score: score,
            number: number,
            doneQuest: doneQuest,
          },
        }}
      />
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to right, #4875a6b2, #d3c5ff9c)",
      }}
    >
      <div
        style={{
          width: "1000px",
        }}
        className="cute-container"
      >
        <br></br>
        <h1
          style={{ fontSize: "35px", color: "white" }}
          className="cute-heading"
        >
          QUEST
        </h1>
        <br></br>

        <div className="cute-questions-containeer">
          <div key={currentQuestion._id} className="cute-questionn">
            <p className="cute-question-text">{currentQuestion.text}</p>
            {currentQuestion.photo && (
              <img
                style={{ height: "80px" }}
                src={currentQuestion.photo}
                alt="Question"
              />
            )}
            <ul className="cute-answer-list">
              {currentQuestion.answers.map((answer, answerIndex) => (
                <li
                  key={answerIndex}
                  className={`cute-answerr ${
                    selectedAnswer === answer ? "selected-answer" : ""
                  }`}
                  onClick={() => handleAnswerClick(answer)}
                  style={{ listStyleType: "none", paddingLeft: "20px" }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "10px",
                      height: "10px",
                      backgroundColor:
                        selectedAnswer === answer
                          ? "transparent"
                          : "transparent",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></span>
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {visible ? (
        <div style={{ fontSize: "17px", color: "white" }} className="divAnswer">
          {!visibleAnswer ? (
            <div>
              <b>
                Dorești să tragi cu ochiul la răspuns?<br></br> Nu uita.. vei
                pierde niște monede
              </b>{" "}
              <br></br>
              <br></br>
              <Button
                variant="primary"
                type="submit"
                style={{
                  width: "150px",
                  backgroundColor: "#333dd7",

                  marginRight: "20px",
                }}
                onClick={() => handleFirstClick()}
              >
                Am înțeles
              </Button>
              <Button
                variant="primary"
                type="submit"
                style={{
                  width: "150px",
                  backgroundColor: "#333dd7",
                }}
                onClick={() => setVisible(false)}
              >
                Încerc singur
              </Button>
            </div>
          ) : (
            <div>
              <b>Răspunsul corect:</b>
              <br></br>
              <b>{questions[currentQuestionIndex].correctAnswer}</b>
              <br></br>
              <br></br>
              <Button
                variant="primary"
                type="submit"
                style={{
                  width: "100px",
                  backgroundColor: "#333dd7",
                }}
                onClick={() => handleFindAnswer()}
              >
                Gata
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}

      {currentQuestionIndex === questions.length - 1 ? (
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100px",
            backgroundColor: "#333dd7",
            marginLeft: "40px",
            marginBottom: "20px",
          }}
          onClick={() => handleNextQuestion("F")}
        >
          Finish
        </Button>
      ) : (
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100px",
            backgroundColor: "#333dd7",

            marginBottom: "20px",
          }}
          onClick={() => handleNextQuestion("N")}
        >
          Next
        </Button>
      )}
      <div
        className="div-sold"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2vh",
        }}
      >
        <b>Sold: {sold} px</b>
      </div>
      <img
        className="img-top-right"
        style={{ height: "90px", marginTop: "-20px" }}
        src={mysteryImage}
        alt="Binary"
      />
      <img
        className="img-top-rightt"
        style={{ height: "90px", marginRight: "40px", marginTop: "10px" }}
        src={treasureImage}
        alt="Binary"
      />

      <img
        className="img-bottom-right"
        style={{ height: "70px", marginBottom: "25px", marginTop: "20px" }}
        src={eyeImage}
        alt="Binary"
        onClick={handleClickOnImage}
      />
    </div>
  );
};

export default MainQuest;
