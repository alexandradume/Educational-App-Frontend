import React, { useEffect, useState } from "react";
import "./TestsPage.css";
import { useHistory, useLocation } from "react-router-dom";
import NavBar from "./NavBar";

interface LocationState {
  username: string;
}

function TestsPage() {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const { username } = location.state;

  const handleClick = (category: string) => {
    history.push(`/test`, { username: username, category: category });
  };

  const [windowFullyVisible, setWindowFullyVisible] = useState(true);

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

  const neuralImage = "./src/assets/neural.png";
  const binaryImage = "./src/assets/binary.png";
  const algorithmImage = "./src/assets/algorithm.png";
  const binaryCodeImage = "./src/assets/binary-code.png";
  const preferencesImage = "./src/assets/preferences.png";
  const computerImage = "./src/assets/computer-science.png";

  return (
    <div>
      <NavBar username={username}></NavBar>
      {windowFullyVisible && (
        <img
          className="img-top-left"
          style={{ height: "80px" }}
          src={neuralImage}
          alt="Algorithm"
        />
      )}
      {windowFullyVisible && (
        <img
          className="img-top-rightt"
          style={{ height: "80px" }}
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
        TESTE
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
          <span>
            <b>
              <span onClick={() => handleClick("Elemente de bază")}>
                Elemente de bază
              </span>
              <br />
              <span onClick={() => handleClick("Instrucțiuni")}>
                Instrucțiuni
              </span>
              <br />
              <span onClick={() => handleClick("Algoritmi Elementari")}>
                Algoritmi Elementari
              </span>
              <br />
              <span onClick={() => handleClick("Tablouri unidimensionale")}>
                Tablouri unidimensionale
              </span>
              <br />
              <span onClick={() => handleClick("Tablouri bidimensionale")}>
                Tablouri bidimesnionale <br />
              </span>
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
          <span>
            <b>
              <span onClick={() => handleClick("Recursivitate")}>
                Subprograme/Recursivitate
              </span>
              <br />

              <span onClick={() => handleClick("Divide Et Impera")}>
                Divide Et Impera
              </span>
              <br />
              <span onClick={() => handleClick("Șiruri de caractere")}>
                Șiruri de caractere
              </span>
              <br />
              <span onClick={() => handleClick("Coada")}>Stiva/Coada</span>
              <br />

              <br />
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
          <span>
            <b>
              <span onClick={() => handleClick("Backtracking")}>
                {" "}
                Backtracking
              </span>
              <br />
              <span onClick={() => handleClick("Greedy")}>Greedy</span>
              <br />
              <span onClick={() => handleClick("Programare dinamica")}>
                Programare dinamică
              </span>

              <br />
              <span onClick={() => handleClick("Teoria Grafurilor")}>
                {" "}
                Teoria grafurilor
              </span>

              <br />
            </b>
          </span>
        </div>
        {windowFullyVisible && (
          <>
            <img
              className="img-top-right"
              style={{ height: "80px" }}
              src={algorithmImage}
              alt="Binary"
            />
            <img
              className="img-bottom-right"
              style={{ height: "80px" }}
              src={preferencesImage}
              alt="Binary"
            />
            <img
              className="img-bottom-left"
              style={{ height: "80px" }}
              src={binaryCodeImage}
              alt="Binary"
            />
            <img
              className="img-bottom-left-left"
              style={{ height: "80px" }}
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

export default TestsPage;
