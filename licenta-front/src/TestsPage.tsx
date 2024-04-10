import React from "react";
import "./TestsPage.css";
import { Button } from "react-bootstrap";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";

interface LocationState {
  username: string;
}

function TestsPage() {
  const history = useHistory();

  const handleClick = (category: string) => {
    history.push(`/test`, { username: username, category: category });
  };

  const location = useLocation<LocationState>();
  const { username } = location.state;
  const [redirect9, setRedirect9] = useState<boolean>(false);
  const [redirect10, setRedirect10] = useState<boolean>(false);
  const [redirect11, setRedirect11] = useState<boolean>(false);
  const testImage = "./src/assets/test.png";
  const medalImage = "./src/assets/medal.png";
  const algorithmImage = "./src/assets/algorithm.png";
  const binaryImage = "./src/assets/binary.png";
  const neuralImage = "./src/assets/neural.png";
  const binaryCodeImage = "./src/assets/binary-code.png";
  const preferencesImage = "./src/assets/preferences.png";
  const computerImage = "./src/assets/computer-science.png";

  return (
    <div>
      <NavBar username={username}></NavBar>
      <img
        className="img-top-left"
        style={{ height: "80px" }}
        src={neuralImage}
        alt="Algorithm"
      />
      <img
        className="img-top-rightt"
        style={{ height: "80px" }}
        src={binaryImage}
        alt="Binary"
      />
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

              <span onClick={() => handleClick("Elemente de baza")}>
                Divide Et Impera
              </span>
              <br />
              <span onClick={() => handleClick("Șiruri de caractere")}>
                Șiruri de caractere
              </span>
              <br />
              <span onClick={() => handleClick("Coada")}>Stiva/Coada</span>
              <br />

              <span onClick={() => handleClick("Elemente de baza")}>
                Liste alocate dinamic
              </span>
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
              <span onClick={() => handleClick("Elemente de baza")}>
                Greedy
              </span>
              <br />
              <span onClick={() => handleClick("Elemente de baza")}>
                Programare dinamica
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
      </div>
      <div></div>
    </div>
  );
}

export default TestsPage;
