import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import "./Test.css";

interface Question {
  _id: string;
  category: string;
  text: string;
  answers: string[];
  correctAnswer: string;
  photo: string;
}

interface LocationState {
  username: string;
  category: string;
}

function Test() {
  const location = useLocation<LocationState>();
  const { username, category } = location.state;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [redirect, setRedirect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [calificativ, setCalificativ] = useState<string>("");
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const history = useHistory();

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeElapsed(timeElapsed + 1);
    }, 600);

    return () => clearTimeout(timer);
  }, [timeElapsed]);

  const fetchQuestions = () => {
    const url = `http://localhost:8080/api/questions?category=${category}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        setSelectedAnswers(Array(data.length).fill(""));
      })
      .catch((error) => console.error("Error fetching questions:", error));
  };

  const handleAnswerClick = (index: number, answer: string) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[index] = answer;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleButtonClick = () => {
    calculateScore();
  };

  const calculateScore = () => {
    let newScore = 0;

    for (let i = 0; i < questions.length; i++) {
      if (questions[i].correctAnswer === selectedAnswers[i]) {
        newScore++;
      }
     
    }

    const halfLength = questions.length / 2;
    const newCalificativ = newScore > halfLength ? "good" : "bad";

    setScore(newScore);
    setCalificativ(newCalificativ);
    setRedirect(true);
  };

  useEffect(() => {
    if (timeElapsed >= 300) {
      handleButtonClick();
    }
  }, [timeElapsed]);

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/submit",
          state: {
            username: username,
            score: score,
            calificativ: calificativ,
            category: category,
            questions: questions,
          },
        }}
      />
    );
  }

  return (
    <div>
      <div className="cute-container">
        <h2 style={{ fontSize: "30px" }} className="cute-heading">
          {category.toUpperCase()}
        </h2>
        <h3 style={{ fontSize: "20px" }} className="cute-heading">
          Test 1
        </h3>

        <div className="cute-questions-container">
          {questions.map((question, index) => (
            <div key={index} className="cute-question">
              <p className="cute-question-text">{question.text}</p>
              {question.photo && (
                <img
                  style={{ height: "80px" }}
                  src={question.photo}
                  alt="Question"
                />
              )}
              <ul className="cute-answer-list">
                {question.answers.map((answer, answerIndex) => (
                  <li
                    key={answerIndex}
                    className={`cute-answer ${
                      selectedAnswers[index] === answer ? "selected-answer" : ""
                    }`}
                    onClick={() => handleAnswerClick(index, answer)}
                    style={{ listStyleType: "none", paddingLeft: "20px" }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "10px",
                        height: "10px",
                        backgroundColor:
                          selectedAnswers[index] === answer
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
          ))}
        </div>
      </div>
      <Button
        variant="primary"
        type="submit"
        style={{
          width: "100px",
          backgroundColor: "#333dd7",
          marginLeft: "40px",
          marginBottom: "20px",
        }}
        onClick={handleButtonClick}
      >
        Submit
      </Button>
    </div>
  );
}

export default Test;
