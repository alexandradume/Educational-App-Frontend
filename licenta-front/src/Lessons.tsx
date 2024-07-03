import React, { useEffect, useState } from "react";
import "./Test.css"; // Import your custom CSS file
import { Redirect, useLocation, useHistory } from "react-router-dom";
import "./SubmitPage.css";
import "./Lessons.css";
import NavBar from "./NavBar";

interface LocationState {
  username: string;
}

function Lessons() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const [redirect9, setRedirect9] = useState<boolean>(false);
  const [redirect10, setRedirect10] = useState<boolean>(false);
  const [redirect11, setRedirect11] = useState<boolean>(false);
  const [windowFullyVisible, setWindowFullyVisible] = useState(true);

  const testImage = "./src/assets/test.png";
  const medalImage = "./src/assets/medal.png";
  const algorithmImage = "./src/assets/algorithm.png";
  const binaryImage = "./src/assets/binary.png";
  const neuralImage = "./src/assets/neural.png";
  const binaryCodeImage = "./src/assets/binary-code.png";
  const preferencesImage = "./src/assets/preferences.png";
  const computerImage = "./src/assets/computer-science.png";

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

  const handleButton9 = () => {
    setRedirect9(true);
  };

  if (redirect9) {
    return (
      <Redirect
        to={{
          pathname: `/lectii-clasa-a-noua`,
          state: { username: username },
        }}
      />
    );
  }

  const handleButton10 = () => {
    setRedirect10(true);
  };

  if (redirect10) {
    return (
      <Redirect
        to={{
          pathname: `/subprograme`,
          state: { username: username },
        }}
      />
    );
  }

  const handleButton11 = () => {
    setRedirect11(true);
  };

  if (redirect11) {
    return (
      <Redirect
        to={{
          pathname: `/backtracking`,
          state: { username: username },
        }}
      />
    );
  }

  return (
    <div>
      <NavBar username={username}></NavBar>
      {windowFullyVisible && (
        <img
          className="img-top-left"
          style={{ height: "12vh" }}
          src={neuralImage}
          alt="Algorithm"
        />
      )}
      {windowFullyVisible && (
        <img
          className="img-top-rightt"
          style={{ height: "12vh" }}
          src={binaryImage}
          alt="Binary"
        />
      )}
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginRight: "30px",
          marginLeft: "30px",
          marginBottom: "70px",
        }}
      >
        LECȚII
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "30px",
          marginLeft: "30px",
        }}
      >
        <div
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingBottom: "20px",
          }}
        >
          <h2>Clasa a IX-a</h2>
          <span onClick={handleButton9}>
            <b>
              Elemente de baza
              <br />
              Instructiuni
              <br />
              Algoritmi Elementari
              <br />
              Tablouri unidimenisonale
              <br />
              Tablouri bidimesnionale <br />
              Sortări
            </b>
          </span>
        </div>
        <div
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingBottom: "40px",
          }}
        >
          <h2>Clasa a X-a</h2>
          <span onClick={handleButton10}>
            <b>
              Subprograme
              <br />
              Recursivitate
              <br />
              Divide Et Impera
              <br />
              Șiruri de caractere
              <br />
              Stiva
              <br />
              Coada
              <br />
              Liste alocate dinamic <br />
            </b>
          </span>
        </div>
        <div
          style={{
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingBottom: "20px",
          }}
        >
          <h2>Clasa a XI-a</h2>
          <span onClick={handleButton11}>
            <b>
              Backtracking
              <br />
              Greedy
              <br />
              Programare dinamică
              <br />
              Teoria grafurilor
              <br />
            </b>
          </span>
        </div>
        {windowFullyVisible && (
          <>
            <img
              className="img-top-right"
              style={{ height: "12vh" }}
              src={algorithmImage}
              alt="Binary"
            />
            <img
              className="img-bottom-right"
              style={{ height: "12vh" }}
              src={preferencesImage}
              alt="Binary"
            />
            <img
              className="img-bottom-left"
              style={{ height: "12vh" }}
              src={binaryCodeImage}
              alt="Binary"
            />
            <img
              className="img-bottom-left-left"
              style={{ height: "12vh" }}
              src={computerImage}
              alt="Binary"
            />
          </>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default Lessons;
