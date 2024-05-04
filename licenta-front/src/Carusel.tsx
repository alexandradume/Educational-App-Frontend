import React, { useEffect, useState } from "react";
import "./Carusel.css";
import { Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";

interface Recap {
  _id: string;
  firstPart: string;
  secondPart: string;
  correctAnswer: string;
  category: string;
}

interface Props {
  username: string;
  category: string;
}

const Carusel: React.FC<Props> = ({ username, category }) => {
  const [recap, setRecap] = useState<Recap[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState(0);
  const [vizibile, setVizibile] = useState(false);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    const url = `http://localhost:8080/api/recap?category=${category}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const recapData: Recap[] = [
          ...data,
          {
            _id: "",
            firstPart: "",
            secondPart: "",
            correctAnswer: "",
            category: "",
          },
        ];
        setRecap(recapData);
        setInputValues({});
      })
      .catch((error) => console.error("Error fetching recap:", error));
  };

  const handleSubmit = async () => {
    // Marchează funcția ca fiind async
    let newScore = 0;
    for (let i = 0; i < recap.length; i++) {
      console.log(recap[i].correctAnswer);
      console.log(inputValues[i]);
      console.log(recap[i].correctAnswer == inputValues[i]);
      if (recap[i].correctAnswer == inputValues[i]) {
        newScore++;
      }
    }

    setScore(newScore);

    // Actualizează suma de bani pe server
    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/updateMoney`,
        null,
        {
          params: {
            username: username,
            newMoney: newScore * 10,
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error updating money:", error);
    }

    setMoney(newScore * 10);
    setVizibile(true);
    fetchQuestions();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [currentIndex]: value,
    }));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recap.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === recap.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="recap-container">
        {recap[currentIndex]?.firstPart !== "" ? (
          <>
            <span className="recap-text">{recap[currentIndex]?.firstPart}</span>
            <Form.Group controlId="formBasicEmail">
              <FormControl
                type="input"
                className="inputt"
                placeholder="introdu răspunsul"
                value={inputValues[currentIndex] || ""}
                style={{ height: "30px", width: "200px" }}
                onChange={handleChange}
              />
            </Form.Group>
            <span className="recap-text">
              {recap[currentIndex]?.secondPart}
            </span>
          </>
        ) : (
          <p>
            <h3>Ai terminat de răspuns?</h3>
            <br />
            <Button
              variant="primary"
              style={{
                width: "100px",
                backgroundColor: "#333dd7b8",
                marginLeft: "55px",
                display: "flex",
                alignItems: "center", // Aliniaza textul în mijlocul butonului
                justifyContent: "center",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>

            {vizibile && (
              <>
                <h3 style={{ marginLeft: "-15px" }}>
                  Scorul tău este {score}, ai câștigat {money}px
                </h3>
              </>
            )}
          </p>
        )}
      </div>
      <div className="arrow-container">
        <span className="arrow left" onClick={goToPrevious}></span>
        <span className="arrow right" onClick={goToNext}></span>
      </div>
    </div>
  );
};

export default Carusel;
