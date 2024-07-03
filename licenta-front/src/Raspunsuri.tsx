import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Redirect, useLocation } from "react-router-dom";
import "./Profile.css";

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
  questions: Question[];
}

function Raspunsuri() {
  const location = useLocation<LocationState>();
  const { username, category, questions } = location.state;
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [redirect, setRedirect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [calificativ, setCalificativ] = useState<string>("");
  const [windowFullyVisible, setWindowFullyVisible] = useState(true);

  const testImage = "./src/assets/test.png";
  const medalImage = "./src/assets/medal.png";

  const categoryUppercase = category.toUpperCase();

  useEffect(() => {
    const handleResize = () => {
      setWindowFullyVisible(window.innerWidth >= 1200); // Adjust this value as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    let newScore = 0;

    for (let i = 0; i < questions.length; i++) {
      if (questions[i].correctAnswer === selectedAnswers[i]) {
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
          pathname: `/tests`,
          state: {
            username: username,
            score: score,
            calificativ: calificativ,
            questions: questions,
          },
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
            {question.photo && (
              <img
                style={{ height: "170px" }}
                src={question.photo}
                alt="Question"
              />
            )}
            <ul className="cute-answer-list">
              {question.answers.map((answer, answerIndex) => {
                const isCorrectAnswer = answer === question.correctAnswer;
                return (
                  <li
                    key={answerIndex}
                    className={`cute-answer ${
                      selectedAnswers[index] === answer ? "selected-answer" : ""
                    } ${isCorrectAnswer ? "correct-answer" : ""}`}
                    style={{
                      listStyleType: "none",
                      paddingLeft: "20px",
                      backgroundColor: isCorrectAnswer ? "#d3c5ff9" : "inherit",
                    }}
                    onClick={() => {
                      const newSelectedAnswers = [...selectedAnswers];
                      newSelectedAnswers[index] = answer;
                      setSelectedAnswers(newSelectedAnswers);
                    }}
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
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {windowFullyVisible && (
        <>
          <img
            className="img-top-right"
            style={{ height: "80px" }}
            src={testImage}
            alt="Test"
          />
          <img
            className="img-top-right-right"
            style={{ height: "80px" }}
            src={medalImage}
            alt="Medal"
          />
        </>
      )}
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
        Teste
      </Button>
    </div>
  );
}

export default Raspunsuri;
