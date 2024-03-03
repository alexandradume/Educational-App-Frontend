import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./ClasaANoua.css";
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";

interface LocationState {
  username: string;
}
function ProgramareDinamica() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";

  const knapImage = "./src/assets/knap.png";
  const calendarImage = "./src/assets/calendar.png";

  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/teoria-grafurilor`,
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
          pathname: `/greedy`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `
  #include <iostream>
  #include <vector>
  
  using namespace std;
  
  // Structura pentru a reprezenta un obiect
  struct Object {
      int weight;
      int value;
  };
  
  // Funcția pentru rezolvarea Problemei Rucsacului folosind programare dinamică
  int knapsack(int capacity, const vector<Object>& objects) {
      int n = objects.size();
      vector<vector<int>> dp(n + 1, vector<int>(capacity + 1, 0));
  
      // Calculăm valorile maxime pentru fiecare combinație de obiecte și capacități
      for (int i = 1; i <= n; ++i) {
          for (int w = 1; w <= capacity; ++w) {
              if (objects[i - 1].weight <= w) {
                  dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - objects[i - 1].weight] + objects[i - 1].value);
              } else {
                  dp[i][w] = dp[i - 1][w];
              }
          }
      }
  
      return dp[n][capacity];
  }
  
  int main() {
      // Exemplu de utilizare
      int capacity = 10; // Capacitatea maximă a rucsacului
      vector<Object> objects = {{2, 6}, {3, 8}, {4, 12}, {5, 14}}; // Lista de obiecte (greutate, valoare)
      cout << "Valoarea maxima a obiectelor din rucsac: " << knapsack(capacity, objects) << endl;
  
      return 0;
  }
  
  `;

  return (
    <div className="lectie-container">
      <header>
        <h1>Programare dinamica</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"11"}
          ></RedirectionareLectii>
        </section>

        <section>
          <b>Programarea Dinamică</b> este o metodă folosită în matematică și
          informatică pentru a rezolva probleme complexe prin descompunerea
          acestora în subprobleme mai simple. Prin rezolvarea fiecărui
          subproblemă doar o singură dată și stocarea rezultatelor, se evită
          calculările redundante, ceea ce duce la soluții mai eficiente pentru o
          gamă largă de probleme.<br></br>
          Similar cu metoda Divide et Impera, problema se împarte în
          subprobleme:
          <ul>
            <li>de aceeași natură cu problema inițială</li>
            <li>de dimensiuni mai mici</li>
            <li>
              spre deosebire de Divide et Impera, problemele nu mai sunt
              independente, ci se suprapun – probleme superpozabile
            </li>
            <li>
              Observație: Subproblemele se mai numesc și stări ale problemei
            </li>
          </ul>
        </section>

        <section>
          <h2>Knapsack Problem</h2>
          În această problemă, avem un set de obiecte, fiecare având o anumită
          greutate și valoare, și un rucsac cu o anumită capacitate maximă de
          greutate. Scopul este de a alege obiectele care să fie puse în rucsac
          astfel încât suma valorilor lor să fie maximă, dar să nu depășească
          capacitatea maximă a rucsacului.<br></br>
          <br></br>
          <img
            style={{
              height: "400px",
              width: "800px",
              marginLeft: "100px",
              marginBottom: "50px",
            }}
            src={knapImage}
            alt="Binary"
          />
          Algoritmul de programare dinamică pentru această problemă presupune
          construirea unei matrice în care fiecare celulă reprezintă cea mai
          mare valoare pe care o putem obține cu primele i obiecte și un rucsac
          cu o capacitate maximă de j. Apoi, se completează matricea în mod
          recursiv, calculând valorile maxime posibile pentru toate combinațiile
          de obiecte și capacități.<br></br>
          Această abordare este eficientă deoarece calculează valorile pentru
          fiecare subproblemă doar o singură dată și le stochează pentru
          utilizare ulterioară, evitând astfel recalculările inutile.<br></br>
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

export default ProgramareDinamica;
