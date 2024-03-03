import React, { useEffect, useState } from "react";
import "./Test.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import "./SubmitPage.css";
import { Redirect, useHistory } from "react-router-dom";

interface LocationState {
  username: string;
  score: number;
  calificativ: string;
}

function SubmitPage() {
  const location = useLocation<LocationState>();
  const image = "./src/assets/exam.png";
  const { username, score, calificativ } = location.state;
  const [redirectTests, setRedirectTests] = useState<boolean>(false);
  const [redirectLessons, setRedirectLessons] = useState<boolean>(false);
  const likeImage = "./src/assets/like.png";
  const dislikeImage = "./src/assets/dislike.png";

  console.log(calificativ);
  const handleButtonTests = () => {
    setRedirectTests(true);
  };

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
        <h1>Scorul tău: {score}</h1>
      </div>

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
      </div>
    </div>
  );
}

export default SubmitPage;
