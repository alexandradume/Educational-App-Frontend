import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./ClasaANoua.css";
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

interface LocationState {
  username: string;
}
function GrafuriAlgoritmi() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";

  const structuraDivImage = "./src/assets/structuraDiv.png";
  const sumaImage = "./src/assets/divideEtImperaSuma.png";
  const divideImage = "./src/assets/divide.png";

  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/siruri-de-caractere`,
          state: { username: username },
        }}
      />
    );
  }

  const handleButtonPrev = () => {
    setRedirectPrev(true);
  };

  if (redirectPrev) {
    return (
      <Redirect
        to={{
          pathname: `/grafuri-neorientate`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `
{\n
  i#include <iostream>

  using namespace std;
  
  int sumaDivImp(int a[], int st, int dr) {
      //Explicații: infoas.ro
      if(st == dr) { //Problemă elementară
          return a[st];
      }
      int mij = (st + dr) / 2;
  
      int suma1 = sumaDivImp(a, st, mij); //Subproblema 1
      int suma2 = sumaDivImp(a, mij + 1, dr); //Subproblema 2
      return suma1 + suma2; //Rezolvarea problemei
  }
  
  int main()
  {
      //Declarăm și citim șirul în ordinea: lungimea șirului, elementele șirului
      int a[100], n;
      cin >> n;
      for(int i = 1; i <= n; i++) {
          cin >> a[i];
      }
  
      cout << "Suma numerelor sirului este " << sumaDivImp(a, 1, n);
      return 0;
  }\n`;

  const instrctiuniImage = "./src/assets/instructiuni.png";

  return (
    <div className="lectie-container">
      <header>
        <h1>Grafuri Algoritmi</h1>
      </header>
      <main>
        <section>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "15%",
              height: "100%",
              backgroundColor: "#b4c3fe9b",
              boxShadow: "5px 0px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                marginTop: "30px",
                marginLeft: "10px",
              }}
            >
              Lectie 1<br></br>
              Lectie 2<br></br>
              Lectie 3<br></br>
              Lectie 4<br></br>
            </div>
          </div>
        </section>

        <img
          className="img-top-right"
          style={{ height: "70px" }}
          src={codingImage}
          alt="Binary"
        />
        <img
          className="img-top-right-right"
          style={{ height: "70px" }}
          src={learningImage}
          alt="Binary"
        />
      </main>
      <footer>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100px", // Setează înălțimea butonului
            backgroundColor: "#333dd7b8", // Setează culoarea de fundal verde
            marginRight: "0px",
          }}
          onClick={handleButtonPrev}
        >
          Înapoi
        </Button>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "100px",
            backgroundColor: "#333dd7b8",
            marginRight: "0px",
            display: "flex",
            alignItems: "center", // Aliniaza textul în mijlocul butonului
            justifyContent: "center", // Aliniaza textul și în orizontală
          }}
          onClick={handleButtonFollow}
        >
          Următorul
        </Button>
      </footer>
    </div>
  );
}

export default GrafuriAlgoritmi;
