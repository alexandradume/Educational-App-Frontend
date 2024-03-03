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
function Greedy() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearningA.png";

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
          pathname: `/programare-dinamica`,
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
          pathname: `backtracking`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Structura pentru a reprezenta un obiect
struct Object {
    int weight;
    int value;
};

// Funcția pentru rezolvarea problemei sacului cu capacitate maximă folosind metoda greedy
int knapsackGreedy(vector<Object>& objects, int capacity) {
    // Sortăm obiectele în ordinea descrescătoare a raportului valoare/greutate
    sort(objects.begin(), objects.end(), [](const Object& a, const Object& b) {
        return (double)a.value / a.weight > (double)b.value / b.weight;
    });

    int totalValue = 0;
    int currentWeight = 0;

    // Parcurgem obiectele și le punem în sac cât mai mult posibil
    for (const auto& obj : objects) {
        if (currentWeight + obj.weight <= capacity) {
            // Adăugăm obiectul în sac
            totalValue += obj.value;
            currentWeight += obj.weight;
        }
    }

    return totalValue;
}

int main() {
    // Exemplu de utilizare
    vector<Object> objects = {{10, 60}, {20, 100}, {30, 120}}; // Obiectele cu greutatea și valoarea lor
    int capacity = 50; // Capacitatea maximă a sacului

    // Afișăm valoarea maximă care poate fi obținută
    cout << "Valoarea maxima care poate fi obtinuta: " << knapsackGreedy(objects, capacity) << endl;

    return 0;
}
  `;

  const text1 = `
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Structura pentru a reprezenta o activitate
struct Activity {
    int start;
    int end;
};

// Funcția pentru rezolvarea problemei de selectare a activităților folosind metoda greedy
int maxActivities(vector<Activity>& activities) {
    // Sortăm activitățile în ordinea crescătoare a timpilor de încheiere
    sort(activities.begin(), activities.end(), [](const Activity& a, const Activity& b) {
        return a.end < b.end;
    });

    int count = 1; // Numărul minim de activități
    int lastEnd = activities[0].end;

    // Parcurgem activitățile și alegem cele care nu se suprapun cu ultima activitate selectată
    for (int i = 1; i < activities.size(); ++i) {
        if (activities[i].start >= lastEnd) {
            // Activitatea nu se suprapune, o putem adăuga
            count++;
            lastEnd = activities[i].end;
        }
    }

    return count;
}

int main() {
    // Exemplu de utilizare
    vector<Activity> activities = {{1, 4}, {3, 5}, {0, 6}, {5, 7}, {3, 8}, {5, 9}, {6, 10}, {8, 11}, {8, 12}, {2, 13}, {12, 14}};
     // Lista de activități
    cout << "Numarul maxim de activitati: " << maxActivities(activities) << endl;

    return 0;
}

    `;

  return (
    <div className="lectie-container">
      <header>
        <h1>Metoda Greedy</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"11"}
          ></RedirectionareLectii>
        </section>

        <section>
          <b>Metoda Greedy</b> este o metoda folosita in algoritmica care
          presupune ca la fiecare posibilitate de a alege o continuare, sa se
          aleaga metoda cea mai favorabil la acel moment<br></br>
          <br></br>
          Greedy = (in traducere din engleza) lacom<br></br>
          <br></br>
          Metoda Greedy este o metoda foarte generala care nu duce mereu la un
          rezultat final corect, dar exista si multe probleme care se rezolva
          corect prin aceasta metoda. Decizia de a putea folosii acest concept
          sta in mainile programatorului.
          <br></br>
          <br></br>
          Metoda Greedy este un concept si nu un algoritm, acest lucru este
          foarte important de inteles pentru a nu incerca folosirea unui sablon
          la acest capitol. Daca la Backtracking si la alte capitole existau
          niste algoritmi care se putea modifica sa mearga pe toate problemele,
          aici lucrurile stau usor diferit, intrucat modul de abordare al
          problemelor ar trebui sa fie unul natural.  Cea mai usoara metoda de
          a concepe un algoritm de acest gen este simularea metodei naturale de
          a rezolva problema aceasta pe hartie.
        </section>

        <section>
          <h2>Knapsack Problem</h2>
          În acestă problemă, avem un sac cu o capacitate maximă și o listă de
          obiecte, fiecare având o valoare și o greutate. Scopul este de a alege
          obiecte pentru a le pune în sac, astfel încât să maximizăm valoarea
          totală a obiectelor puse în sac, fără a depăși capacitatea maximă a
          acestuia.<br></br>
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
          Algoritmul greedy pentru acestă problemă poate fi:
          <ul>
            <li>
              Sortăm obiectele în ordinea descrescătoare a raportului
              valoare/greutate
            </li>
            <li>
              Alegem obiectele în ordinea sortată și le punem în sac cât mai
              mult posibil, până când nu mai avem spațiu disponibil în sac
            </li>
          </ul>
          Acest algoritm este greedy deoarece la fiecare pas alege obiectul cu
          cel mai mare raport valoare/greutate disponibil la acel moment, fără a
          lua în considerare consecințele alegerii pe termen lung.
          <br></br>
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

        <section>
          <h2>Activity Selection Problem</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "0px",
            }}
          >
            <div style={{ flex: "1" }}>
              <p>
                În această problemă, avem o listă de activități, fiecare având
                un timp de început și un timp de încheiere. Scopul este de a
                alege un subset de activități care să nu se suprapună între ele
                (adică să nu se desfășoare în același timp), și care să fie cât
                mai mare din punct de vedere al numărului de activități.
              </p>
            </div>
            <div
              style={{
                flexShrink: "0",
                marginRight: "-110px",
                marginLeft: "0px",
              }}
            >
              <img
                style={{
                  height: "230px",
                  width: "300px",
                  marginBottom: "10px",
                }}
                src={calendarImage}
                alt="Binary"
              />
            </div>
          </div>
          <br></br>
          Algoritmul Greedy pentru această problemă poate fi:
          <ul>
            <li>
              Sortăm activitățile în ordinea crescătoare a timpilor de încheiere
            </li>
            <li>
              Alegem activitatea cu cel mai devreme timp de încheiere, apoi
              continuăm să alegem activitățile care nu se suprapun cu
              activitatea curentă
            </li>
          </ul>
          Acest algoritm este greedy deoarece la fiecare pas alege activitatea
          care își termină execuția cel mai devreme, fără a lua în considerare
          consecințele alegerii pe termen lung.
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
            <pre style={{ fontFamily: "inherit" }}>{text1}</pre>
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
          src="./src/assets/elearning.png"
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

export default Greedy;
