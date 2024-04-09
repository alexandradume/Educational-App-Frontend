import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./ClasaANoua.css";
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";
import Carusel from "./Carusel";

interface LocationState {
  username: string;
}
function TablouriBidimensionale() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";
  const mainImage = "./src/assets/main.png";
  const mathImage = "./src/assets/math.png";
  const developImage = "./src/assets/develop.png";
  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/sortare`,
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
          pathname: `/tablouri-unidimenisonale`,
          state: { username: username },
        }}
      />
    );
  }

  const text0 = `
#include <iostream>

using namespace std;

int n, m, a[101][101]; //n = nr linii, m = nr coloane, a = matricea

int main()
{
    cin >> n >> m; //Citim numărul de linii și de coloane

    //Parcurgem matricea exact cum am explicat anterior
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) {
            a[i][j] = 1;
        }
    }
    return 0;
}\n
`;

  const text1 = `
  cin >> n >> m; //Citim dimensiunile matricei

  //Citim matricea, parcurgem cum am învățat anterior
  for(int i = 1; i <= n; i++)
      for(int j = 1; j <= m; j++)
          cin >> a[i][j];\n
`;

  const text2 = `
  //Afișăm matricea, parcurgem cum am învățat anterior
for(int i = 1; i <= n; i++) {
    for(int j = 1; j <= m; j++)
        cout << a[i][j] << " ";
    cout << endl;
}\n
`;

  const matriceImage = "./src/assets/matrice.png";
  const squareImage = "./src/assets/square.png";
  const matrixImage = "./src/assets/matrix.png";

  return (
    <div className="lectie-container">
      <header>
        <h1>Tablouri Bidimensionale</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"9"}
          ></RedirectionareLectii>
        </section>

        <section>
          În C++, matricele extind vectorii în 2D — de unde vine și numele de
          tablou bidimensional. Mai exact, într-o matrice, elementele sunt
          organizate pe linii și pe coloane.
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <b>Exemplu matrice 3 × 4:</b>
            <img
              style={{ height: "200px", display: "block", margin: "auto" }}
              src={matriceImage}
              alt="Binary"
            />
          </div>
          <h3>Declararea matricelor </h3>
          Declararea unei matrice constă în specificarea celor două dimensiuni:
          numărul maxim de linii și numărul maxim de coloane.
          <br></br>
          <b>tip nume[numarLinii][numarColoane];</b>
          <br></br>
          Spre exemlu, o matrice de numere cu 3 linii și 4 coloane se declară
          astfel: int a[3][4];
          <br></br>Și poate fi reprezentată așa (elementele sunt alese
          aleatoriu):
          <img
            style={{ height: "300px", display: "block", margin: "auto" }}
            src={matrixImage}
            alt="Binary"
          />
          Observăm următoarele lucruri:<br></br>
          <ul>
            <li>
              Matricea de mai sus are 3 * 4 = 12 elemente; o matrice cu n linii
              și m coloane are n * m elemente
            </li>
            <li>Practic, o matrice este un vector de vectori</li>
            <li>
              Liniile sunt indexate (numerotate) de la 0 la 2. Coloanele sunt
              indexate de la 0 la 3; cu toate acestea, ca la vectori, putem să
              numerotăm indicii de la 1 în loc de 0, nelucrând cu elementele de
              pe linia/coloana 0
            </li>
            <li>
              Liniile sunt de sus în jos, iar coloanele sunt de la stânga la
              dreapta
            </li>
            <li>
              Memoria unei matrici crește exponențial: o matrice 1000 * 1000
              este de 100 de ori mai mare decât una de 100 * 100
            </li>
          </ul>
        </section>

        <section>
          <h3>Accesarea elementelor din matrice</h3>
          Cum probabil ați intuit, pentru accesarea elementului de pe linia i și
          coloana j a unei matrici a, apelăm a[i][j]. Spre exemplu, în matricea
          de mai sus, a[0][2] = 6<br></br>
          <h3>Parcurgerea unei matrice în C++</h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text0}</pre>
          </div>
        </section>

        <section>
          <h3>Citirea unui tablou bidimensional</h3>
          Citirea matricei folosește parcurgerea de mai devreme pentru a lua
          elementele pe rând și a le citi de la tastatură. Iată un exemplu:
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text2}</pre>
          </div>
        </section>

        <section>
          <h3>Afișarea unui tablou bidimensional</h3>
          Afișarea unui tablou este similară, însă după ce afișăm fiecare linie
          în parte, trebuie să afișăm un endl pentru a trece la următoarea
          linie.
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text1}</pre>
          </div>
        </section>

        <section>
          <h2>Matrice pătratică</h2>O matrice pătratică este o matrice
          particulară, cu același număr de linii și de coloane — adică cu n ==
          m. Pentru simplitate, vom menționa doar n-ul, deoarece m-ul are
          aceeași valoare.<br></br>
          <h3>Diagonala principală și diagonala secundară</h3>
          Diagonala principală a unei matrice este diagonala care începe din
          colțul stânga-sus și se termină în colțul dreapta-jos. Mai exact, un
          element a[i][j] aparține diagonalei principale dacă i == j. <br></br>
          Similar, diagonala secundară este cealaltă diagonală, care începe din
          colțul dreapta-sus și se termină în cel stânga-jos. Un element a[i][j]
          aparține diagonalei secundare dacă i + j == n + 1, sau cu alte
          cuvinte, j == n - i + 1 (unde matricea este indexată de la 1).
          <br></br>
          În imaginea de mai jos, diagonala principală este cea roșie, diagonala
          secundară este cea albastră, elementul 4 (din mijloc) aparținând
          ambelor diagonale.<br></br>
          <br></br>
          <img
            style={{ height: "200px", display: "block", margin: "auto" }}
            src={squareImage}
            alt="Binary"
          />
        </section>

        <Carusel
          category="Tablouri Bidimensionale"
          username={username}
        ></Carusel>
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

export default TablouriBidimensionale;
