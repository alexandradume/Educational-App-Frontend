import React, { useEffect, useState } from "react";
import "./Test.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import "./Profile.css";
import { useLocation, useParams } from "react-router-dom";

interface Question {
  _id: string;
  category: string;
  text: string;
  answers: string[];
  correctAnswer: string;
}

interface LocationState {
  username: string;
  category: string;
}

function Test() {
  const location = useLocation<LocationState>();
  const { username, category } = location.state;
  console.log(category);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [redirect, setRedirect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [calificativ, setCalificativ] = useState<String>("");
  var url = "http://localhost:8080/api/questions?category=" + category;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        // Initialize selectedAnswers with empty strings for each question
        setSelectedAnswers(Array(data.length).fill(""));
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const testImage = "./src/assets/test.png";
  const medalImage = "./src/assets/medal.png";

  const categoryUppercase = category.toUpperCase();

  const handleAnswerClick = (index: number, answer: string) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[index] = answer;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  var i;

  const handleButtonClick = () => {
    var newScore = 0;

    for (i = 0; i < questions.length; i++) {
      if (questions[i].correctAnswer == selectedAnswers[i]) {
        newScore++;
      }
    }
    if (questions.length / 2 > newScore) {
      setCalificativ("bad");
    } else {
      setCalificativ("good");
    }
    setScore(newScore);
    setRedirect(true);
  };

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: `/submit`,
          state: { username: username, score: score, calificativ: calificativ },
        }}
      />
    );
  }

  return (
    <div className="cute-container">
      <h2 style={{ fontSize: "30px" }} className="cute-heading">
        {categoryUppercase}
      </h2>
      <h3 style={{ fontSize: "20px" }} className="cute-heading">
        Test 1
      </h3>

      <div className="cute-questions-container">
        {questions.map((question, index) => (
          <div key={index} className="cute-question">
            <p className="cute-question-text">{question.text}</p>
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
      <img
        className="img-top-right"
        style={{ height: "80px" }}
        src={testImage}
        alt="Binary"
      />
      <img
        className="img-top-right-right"
        style={{ height: "80px" }}
        src={medalImage}
        alt="Binary"
      />
      <Button
        variant="primary"
        type="submit"
        style={{
          width: "100px",
          backgroundColor: "#333dd7",
          marginRight: "0px",
        }}
        onClick={handleButtonClick}
      >
        Submit
      </Button>
    </div>
  );
}

export default Test;
