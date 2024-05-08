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
function DivideEtImpera() {
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
          pathname: `/recursivitate`,
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
        <h1>Divide Et Impera</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"10"}
          ></RedirectionareLectii>
        </section>

        <section>
          <h2>Ce este Divide et Impera?</h2>
          <b>Divide et Impera</b> este o metodă de programare recursivă ce
          constă în principiul următor:
          <ul>
            <li>
              descompunem problema curentă în două sau mai multe subprobleme (de
              același tip ca problema inițială, însă mai mici sau mai ușoare)
            </li>
            <li>
              fiecare subproblemă se rezolvă separat (se pot descompune la
              rândul lor în alte subprobleme și mai ușoare)
            </li>
            <li>
              se combină rezultatele fiecărei subprobleme, pentru a forma
              soluția problemei inițiale
            </li>
          </ul>
          <br></br>
          <img
            style={{
              height: "230px",
              width: "800px",
              marginLeft: "100px",
              marginBottom: "50px",
            }}
            src={divideImage}
            alt="Binary"
          />
          Trebuie menționat faptul că subproblemele:
          <ul>
            <li>trebuie să fie de același tip ca problema inițială</li>
            <li>rebuie să fie mai simple</li>
            <li>
              trebuie să fie independente unele de altele, pentru a nu risca
              suprapunerea rezultatelor
            </li>
          </ul>
          Atunci când ajungem la o (sub)problemă indivizibilă (fie că este
          foarte ușor de găsit răspunsul pe loc, sau că pur și simplu nu mai
          putem să dividem problema mai mult), atunci ne aflăm la o așa-numită{" "}
          <b> problemă elementară</b>, care se rezolvă într-un alt mod, de
          regulă brut.
        </section>

        <section>
          <i>
            Se dă un șir de n numere naturale. Să se calculeze suma numerelor cu
            indicii între 1 și n
          </i>{" "}
          Avem șirul inițial, pe care îl vom descompune în două jumătăți.
          Fiecare jumătate o vom descompune la rândul ei în alte două jumătăți
          și tot așa, până când ajungem să avem secvențe de lungime 1, unde pur
          și simplu returnăm elementul curent, întrucât nu mai putem să împărțim
          în secvențe mai mici.
          <br></br>
          Pentru problema curentă, după calcularea rezultatelor din subprobleme,
          le vom aduna în acest caz pentru a forma rezultatul problemei curente
          (întrucât trebuie să calculăm suma numerelor).<br></br>
          Să vedem un exemplu vizual:<br></br>
          <br></br>
          <img
            style={{
              height: "300px",
              marginLeft: "170px",
              marginBottom: "50px",
            }}
            src={sumaImage}
            alt="Binary"
          />
          <br></br>
          Pentru a calcula suma elementelor din vectorul (22, 2, 15, 44, 41, 7,
          29, 49, 31, 24), îl împărțim în două secvențe (prima și a doua
          jumătate), pe care le despărțim la rândul lor în alte două secvențe și
          așa mai departe, până când ajungem la secvențe de numere individuale,
          pe care le procesăm direct.<br></br>
        </section>

        <section>
          <h2>Structura unui program de tip Divide et Impera</h2>
          <img
            style={{
              height: "230px",
              width: "800px",
              marginLeft: "100px",
              marginBottom: "50px",
            }}
            src={structuraDivImage}
            alt="Binary"
          />
        </section>

        <section>
          <h3>Suma elementelor unui vector folosind Divide et Impera </h3>
          Rezolvăm problema propusă la începutul lecției. Vom folosi doi indici,
          st și dr, care marchează secvența curentă a problemei. Problema în
          sine se rezolvă apelând funcția cu indicii st = 1 și dr = n, iar de
          aici împărțim recursiv problema în jumătăți, luând la final suma
          fiecărei jumătăți.<br></br>
          Problema elementară apare atunci când st = dr, adică atunci când avem
          un singur element. În acest caz, returnăm pur și simplu elementul de
          pe poziția dată.<br></br>
          <br></br>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text}</pre>
          </div>
        </section>
        <Carusel category="Divide Et Impera" username={username}></Carusel>

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

export default DivideEtImpera;
