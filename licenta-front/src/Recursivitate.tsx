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
function Recursivitate() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";

  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/divide-et-impera`,
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
          pathname: `/subprograme`,
          state: { username: username },
        }}
      />
    );
  }

  const text0 = `
  #include <iostream>

using namespace std;

int factorial(int n) {
    int fact = 1;
    for(int i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

int main()
{
    int n;
    cin >> n;
    cout << factorial(n);
    return 0;
}\n
`;

  const text1 = `
#include <iostream>

using namespace std;

int factorial(int n) {
    if(n <= 0) { //Caz particular
        return 1;
    } else { //Formula generală
        return n * factorial(n - 1);
    }
}

int main()
{
    int n;
    cin >> n;
    cout << factorial(n);
    return 0;
}\n
`;

  const copacImage = "./src/assets/copac.png";
  const patratImage = "./src/assets/patrat.png";
  const triunghiImage = "./src/assets/triunghi.png";

  return (
    <div className="lectie-container">
      <header>
        <h1>Recursivitate</h1>
        <br></br>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"10"}
          ></RedirectionareLectii>
        </section>
        <section>
          Să ne gândim la un copac: acesta are ramuri, fiecare ramură având la
          rândul ei mai multe ramuri mai mici, și așa mai departe până la cele
          mai mici ramuri.<br></br>
          <br></br>
          <img
            style={{
              height: "300px",
              width: "400px",
              display: "block",
              margin: "auto",
            }}
            src={copacImage}
            alt="Binary"
          />
          <br></br>
          În matematică și în informatică întâlnim o noțiune similară, numită{" "}
          <b>recursivitate </b>
          (sau recurență), de a defini ceva cu ea însăși.
          <br></br>
          <br></br>
          Vom folosi funcții în această lecție — altfel, nu am putea să folosim
          recursivitatea.<br></br>
          <br></br>
          <h3>Definiție: </h3>
          Recursivitatea este proprietatea unui element de a se defini prin el
          însuși
        </section>

        <section>
          <h2>Exemple</h2>
          <h3>Exemple în matematică</h3>
          <b>Factorialul unui număr</b> n, n!, este egal cu produsul 1 × 2 × 3 ×
          … × (n - 1) × n. Putem să rescriem factorialul astfel: n! = (n - 1)! ×
          n. Astfel, am definit factorialul lui n pe baza factorialului lui n -
          1.<br></br>
          <b>Șirul Fibonacci </b>este un șir cunoscut în matematică, cu primii
          doi termeni 1 și 1, iar termenul F(n) = F(n - 1) + F(n - 2).<br></br>
          <b>Progresiile aritmetice și geometrice</b> se pot scrie recursiv:
          a(n) = a(n - 1) + r, sau g(n) = g(n - 1) * r.<br></br>
          <br></br>
          <h3>Exemple vizuale</h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              Fractalii sunt un exemplu bun de recursivitate, în care nu există
              vreo limită de oprire (spre deosebire de șirul Fibonacci, spre
              exemplu, unde avem limita n = 1 sau n = 2). Iată un fractal în
              formă de pătrat, în care colțul din stânga sus este identic cu tot
              pătratul:
            </div>
            <img
              style={{
                height: "100px",
                width: "100px",
                marginLeft: "10px",
              }}
              src={patratImage}
              alt="Binary"
            />
          </div>
          <br></br>
          <br></br>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{
                height: "100px",
                width: "100px",
                marginRight: "10px",
              }}
              src={triunghiImage}
              alt="Binary"
            />
            <div>
              Un alt fractal — triunghiul Sierpinski. Triunghiul se împarte în 4
              triunghiuri egale, iar în cele 3 din colțuri se repetă fractalul
            </div>
          </div>
        </section>

        <section>
          <h2>Implementarea unei funcții recursive</h2>
          Să zicem că vrem să calculăm factorialul unui număr. Metoda clasică
          este următoarea:
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text0}</pre>
          </div>
          <br></br>
          Dacă am implementa recursiv soluția la această problemă, am crea o
          funcție care se definește pe ea însăși în apel:
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text1}</pre>
          </div>
        </section>

        <section>
          <h2>Avantajele și dezavantajele recursivității</h2>
          <h3>Avantaj: mod nou de gândire</h3>
          Recursivitatea aduce o nouă metodă de a vizualiza problemele. Această
          metodă, de a împărți problema curentă în probleme mai mici, până când
          ajungem la probleme simple și rezolvabile instant, va fi mai târziu
          (în clasa a XI-a) folosită la programarea dinamică.
          <h3>Avantaj: anumite probleme nu se pot implementa decât recursiv</h3>
          Unele probleme sunt foarte greu — sau chiar imposibil — implementabile
          nerecursiv. În clasa a XI-a se vor folosi funcțiile recursive pentru
          backtracking.
          <h3>Dezavantaj: programele sunt foarte încete</h3>
          Soluțiile recursive, fără optimizări, pot lua mai mult timp să ruleze,
          astfel că implementările recursive nu sunt foarte utile în programe în
          care viteza este importantă. Cu toate acestea, de obicei acest lucru
          nu reprezintă un pericol.
          <h3>Dezavantaj: multe funcții se pot implementa nerecursiv</h3>
          După cum s-a observat și anterior, majoritatea noțiunilor pe care le
          putem implementa recursiv (Fibonacci, progresii aritmetice sau
          geometrice, factorialul, etc.) s-au implementat deja nerecursiv.
          Așadar, nu are sens să reinventăm roata.
        </section>

        <Carusel category="Recursivitate" username={username}></Carusel>
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

export default Recursivitate;
