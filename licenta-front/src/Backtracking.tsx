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
function Backtracking() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";

  const bookImage = "./src/assets/book.png";

  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/greedy`,
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
          pathname: `/divide-et-impera`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `
  void GĂSEȘTE_SOLUȚII(parametri):

  dacă (soluție validă):

    stochează soluția

    Returnează

  pentru (toate alegerile):

    dacă (alegere validă):

      APLICĂ (alegerea)

      GĂSEȘTE_SOLUȚII(parametri)

      BACKTRACK (elimină alegerea)

    Returnează

  `;

  const text1 = `{1, 2, ..., n}`;
  const text2 = `{x[1], x[2], ..., x[k-1]}`;
  const text3 = `{2, 3, ..., n}`;

  const text4 = `
  void FIND_SOLUTIONS(vector<int>& permutation, vector<bool>& chosen, int n) {
    // Verificăm dacă permutarea este completă
    if (permutation.size() == n) {
        // Afișăm permutarea
        for (int num : permutation) {
            cout << num << " ";
        }
        cout << endl;
        return;
    }

    // Pentru fiecare element posibil
    for (int i = 1; i <= n; ++i) {
        // Dacă elementul nu a fost încă ales
        if (!chosen[i]) {
            // Adăugăm elementul la permutare
            permutation.push_back(i);
            chosen[i] = true;

            // Continuăm explorarea
            FIND_SOLUTIONS(permutation, chosen, n);

            // Facem backtracking eliminând ultimul element adăugat
            permutation.pop_back();
            chosen[i] = false;
        }
    }
}
  `;

  const text5 = `
  void FIND_SOLUTIONS(vector<int>& arrangement, vector<bool>& chosen, int k, int n) {
    // Verificăm dacă aranjamentul este complet
    if (arrangement.size() == k) {
        // Afișăm aranjamentul
        for (int num : arrangement) {
            cout << num << " ";
        }
        cout << endl;
        return;
    }

    // Pentru fiecare element posibil
    for (int i = 1; i <= n; ++i) {
        // Dacă elementul nu a fost încă ales
        if (!chosen[i]) {
            // Adăugăm elementul la aranjament
            arrangement.push_back(i);
            chosen[i] = true;

            // Continuăm să construim aranjamentul
            FIND_SOLUTIONS(arrangement, chosen, k, n);

            // Facem backtracking eliminând ultimul element adăugat
            arrangement.pop_back();
            chosen[i] = false;
        }
    }
}
  `;
  const text6 = `{x[k−1]+1,…,n}`;
  const text7 = `{x[k−1]+1,x[k−1]+2,…,n}`;
  const text8 = `
  void FIND_SOLUTIONS(vector<int>& combination, vector<bool>& chosen, int offset, int k, int n) {
    // Verificăm dacă combinația este completă
    if (k == 0) {
        // Afișăm combinația
        for (int num : combination) {
            cout << num << " ";
        }
        cout << endl;
        return;
    }

    // Generăm combinațiile începând de la offset până la n
    for (int i = offset; i <= n; ++i) {
        // Dacă elementul nu a fost încă ales
        if (!chosen[i]) {
            // Adăugăm elementul la combinație
            combination.push_back(i);
            chosen[i] = true;

            // Generăm combinațiile pentru k - 1 elemente folosind restul elementelor
            FIND_SOLUTIONS(combination, chosen, i + 1, k - 1, n);

            // Facem backtracking eliminând ultimul element adăugat
            combination.pop_back();
            chosen[i] = false;
        }
    }
}
  `;

  const text9 = `
  void FIND_SOLUTIONS(vector<int>& subset, int index, int k, int n) {
    / Verificăm dacă subsetul este complet
    if (subset.size() == k) {
        // Afișăm submulțimea
        for (int num : subset) {
            cout << num << " ";
        }
        cout << endl;
        return;
    }

    // Generăm submulțimile începând de la index până la n
    for (int i = index; i <= n; ++i) {
        // Adăugăm elementul la submulțime
        subset.push_back(i);

        // Generăm submulțimile pentru k - 1 elemente folosind restul elementelor
        generateSubsets(subset, i + 1, k, n);

        // Facem backtracking eliminând ultimul element adăugat
        subset.pop_back();
    }
}
`;
  return (
    <div className="lectie-container">
      <header>
        <h1>Backtracking</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"11"}
          ></RedirectionareLectii>
        </section>

        <section>
          <br></br>
          <b>Backtracking</b> este o tehnică algoritmică de rezolvare a
          problemelor care implică găsirea unei soluții incremental, încercând
          diferite opțiuni și anulându-le dacă acestea duc la un punct mort.
          Este folosită în mod obișnuit în situații în care trebuie să explorați
          multiple posibilități pentru a rezolva o problemă, cum ar fi căutarea
          unui traseu într-un labirint sau rezolvarea puzzle-urilor precum
          Sudoku. Atunci când se ajunge într-un punct mort, algoritmul se
          întoarce la punctul de decizie anterior și explorează o altă cale până
          când se găsește o soluție sau toate posibilitățile au fost epuizate.
          <br></br>
          <h2>Determinarea problemelor de backtracking</h2>
          Metoda backtracking poate fi aplicată în rezolvarea problemelor care
          respectă următoarele condiții:
          <ul>
            <li>
              soluția poate fi reprezentată printr-un tablou x[]=(x[1], x[2],
              ..., x[n]), fiecare element x[i] aparținând unei mulțimi cunoscute
              Ai
            </li>
            <li>
              fiecare mulțime Ai este finită, iar elementele ei se află într-o
              relație de ordine precizată – de multe ori cele n mulțimi sunt
              identice
            </li>
            <li>
              se cer toate soluțiile problemei sau se cere o anumită soluție
              care nu poate fi determinată într-un alt mod (de regulă mai rapid)
            </li>
          </ul>
        </section>

        <section>
          <h3>Exemplu</h3>
          Pentru a înțelege dacă o problemă se bazează pe backtracking sau nu,
          să luăm în considerare o problemă simplă:<br></br>
          Problemă: Imaginați-vă că aveți 3 cutii închise, dintre care 2 sunt
          goale și 1 conține o monedă de aur. Sarcina dvs. este să obțineți
          moneda de aur.<br></br>
          <b>De ce nu funcționează programarea dinamică problemă:</b>{" "}
          Deschiderea sau închiderea unei cutii are vreun efect asupra
          celorlalte cutii? Se pare că NU, fiecare cutie este independentă de
          celelalte și starea de deschidere/inchidere a unei cutii nu poate
          determina tranziția pentru celelalte cutii. Prin urmare, programarea
          dinamică nu funcționează.
          <br></br>
          <b>De ce nu funcționează algoritmul greedy: </b> Algoritmul greedy
          alege un maxim local pentru a obține un maxim global, dar în această
          problemă fiecare cutie are aceeași probabilitate de a conține o monedă
          de aur, adică 1/3, deci nu există un criteriu pentru a face o alegere
          greedy.
          <br></br>
          <b>De ce funcționează backtracking-ul:</b> După cum s-a discutat deja,
          algoritmul de backtracking este pur și simplu forțarea brute a
          fiecărei alegeri, astfel încât să putem alege pe rând fiecare cutie
          pentru a găsi moneda de aur. Dacă o cutie este găsită goală, o putem
          închide înapoi, ceea ce acționează ca un pas de backtracking.
          <br></br>
          <br></br> Tehnic, pentru problemele de backtracking: <br></br>
          <ul>
            <li>
              Algoritmul construiește o soluție explorând toate căile posibile
              create de alegerile din problemă, această soluție începe cu un set
              gol S={}
            </li>
            <li>
              Fiecare alegere creează un nou subarbore 's' pe care îl adăugăm în
              setul nostru.
            </li>
            <li>
              {" "}
              Acum există două cazuri:
              <ol>
                <li> S+s este un set valid</li>
                <li> S+s nu este un set valid</li>
              </ol>
            </li>
            <li>
              În cazul în care setul este valid, continuăm să facem alegeri și
              să repetăm procesul până când găsim o soluție, în caz contrar ne
              retragem decizia de a include 's' și explorăm alte căi până când
              găsim o soluție sau toate căile posibile sunt epuizate.
            </li>
          </ul>
        </section>

        <section>
          <h2>Pseudocod pentru Backtracking</h2>
          Cel mai bun mod de a implementa backtracking-ul este prin
          recursivitate, iar toate codurile de backtracking pot fi rezumate
          conform pseudocodului următor:
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
            <b>
              <pre style={{ fontFamily: "inherit" }}>{text}</pre>
            </b>
          </div>
        </section>
        <section>
          De cele mai multe ori, rezolvarea unei probleme folosind metoda
          backtracking constă în următoarele:
          <ul>
            <li>stabilirea semnificației vectorului soluție</li>
            <li>stabilirea condițiilor externe</li>
            <li>stabilirea condițiilor interne</li>
            <li>stabilirea condițiilor de existența a soluției finale</li>
            <li>completarea adecvată a șablonului de mai sus</li>
          </ul>
        </section>

        <section>
          <h2>Generări</h2>
          <h3>Generarea permutărilor</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "50px",
            }}
          >
            <div style={{ flex: "1" }}>
              <p>
                Problema constă în afișarea în ordine lexicografică a
                permutărilor mulțimii {text1} pentru un număr natural n dat.
                <br></br>
                Soluția poate fi obținută utilizând metoda backtracking.
                Vectorul soluție, notat cu x[], va reprezenta o permutare
                candidat.
              </p>
            </div>
            <div
              style={{
                flexShrink: "0",
                marginRight: "-110px",
                marginLeft: "10px",
              }}
            >
              <img
                style={{
                  height: "230px",
                  width: "200px",
                  marginBottom: "10px",
                }}
                src={bookImage}
                alt="Binary"
              />
            </div>
          </div>
          Proprietățile unei permutări sunt:<br></br>
          <ul>
            <li>Elementele sunt numere naturale cuprinse între 1 și n.</li>
            <li>Elementele nu se repetă</li>
            <li>
              Vectorul x[] se construiește pas cu pas, element cu element. Va
              conține o permutare validă atunci când va avea n elemente, toate
              corecte
            </li>
          </ul>
          Pe baza observațiilor de mai sus, putem formula condițiile specifice
          ale algoritmului backtracking într-un mod mai formal:
          <ul>
            <li>Condiții externe: x[k] ∈ {text1}</li>
            <li>
              Condiții interne: x[k] ∉ {text2}, pentru k ∈ {text3}
            </li>
            <li>Condiții de existență a soluției: k = n</li>
          </ul>
          Aceste condiții asigură că se explorează toate posibilitățile pentru a
          genera toate permutările posibile ale mulțimii {text1}
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
            <pre style={{ fontFamily: "inherit" }}>{text4}</pre>
          </div>
        </section>

        <section>
          <h3>Generarea aranjamanetelor</h3>
          Avem o mulțime cu n elemente. Prin aranjamente de k elemente din acea
          mulțime înțelegem șirurile de k elemente din ea. Aceste șiruri se
          diferențiază fie prin valorile elementelor, fie prin ordinea acestora.
          <br></br>
          Numărul acestor șiruri este calculat folosind formula pentru
          aranjamente de n luate câte k, adică Akn = n⋅(n−1)⋅…⋅(n–k+1).<br></br>
          În rezolvarea problemei, intervine vectorul soluție, x[]. Acesta
          reprezintă un aranjament candidat, care va deveni la un moment dat un
          aranjament complet format din p elemente. Proprietățile vectorului
          soluție sunt cele specifice aranjamentelor:
          <ul>
            <li>
              Elementele sunt din mulțimea dată, adică numere între 1 și n
            </li>
            <li>Elementele nu se repetă</li>
            <li>
              Vectorul se completează element cu element. Când are p elemente,
              reprezintă un aranjament complet, care urmează să fie afișat
            </li>
          </ul>
          Formal, exprimăm proprietățile de mai sus astfel:
          <ul>
            <li>condiții externe: x[k]∈{text1}</li>
            <li>
              condiții interne: x[k]∉{text2}, pentru k∈{text3}
            </li>
            <li>condiții de existență a soluției: k=p</li>
          </ul>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text5}</pre>
          </div>
        </section>

        <section>
          <h3>Generarea combinărilor</h3>
          Consideram o mulțime cu A cu n elemente. Prin combinări de k elemente
          din A înțelegem submulțimile cu k elemente ale multimii A. Numărul
          acestor combinări este Ckn=AknPk .<br></br>
          Condiții:
          <ul>
            <li>
              cele două condiții interne pot fi reduse la una singură. Dacă
              pentru fiecare k are loc relația x[k]&gt;x[k−1] atunci are loc și
              condiția [k]∉{text2}
              <br></br>
              Condițiile devin:
              <ol>
                <li>condiții externe: x[k]∈{text1}</li>
                <li>condiții interne: x[k]&gt;x[k−1], pentru k&lt;1</li>
                <li>condiții de existență a soluției: k=p</li>
              </ol>
            </li>
            <li>
              condiția internă poate fi transformată în condiție externă. Dacă
              x[k]&gt;x[k−1] atunci valorile pe care le poate lua x[k] (condiții
              externe) sunt {text6}. Condițiile devin:
              <br></br>
              <ul>
                <li>condiții externe: x[k]∈{text7}</li>
                <li>condiții interne: nu există</li>
                <li>condiții de existență a soluției: k=p</li>
              </ul>
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text8}</pre>
          </div>
        </section>

        <section>
          <h3>Generarea submulțimilor</h3>
          Se dă un număr natural n. Să se genereze toate submulțimile mulțimii{" "}
          {text1}. În vectorul soluție x[] vom memora pe rând câte o submulțime.
          Deoarece submulțimile au număr variabil de elemente, și vectorul
          soluție va avea un număr variabil de elemente.
          <ul>
            <li>
              semnificaţia vectorului soluție: x[] reprezintă la un moment dat o
              submulțime
            </li>
            <li>condiții externe: x[k] în {text1}, k între 1 și n</li>
            <li>
              condiții interne: x[k]&gt;x[i], i între 1 și k-1. Deoarece
              condițiile interne se aplică pentru toate elementele vectorului
              soluție, este suficient ca x[k]&gt;x[k-1], pentru k&gt;1
            </li>
            <li>
              condiții de existența a soluției: fiecare variantă a vectorului
              soluție corespunde cu o submulțime. Orice valoare validă plasată
              în vectorul soluție conduce la o soluție
            </li>
          </ul>
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

export default Backtracking;
