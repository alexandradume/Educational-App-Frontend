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
function SiruriDeCaractere() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";

  const siruriCaractereImage = "./src/assets/siruriCaractere.png";
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
          pathname: `/stiva`,
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

  const text = `char s[11];`;
  const text1 = `
char s[11] = "scoala"; // se folosesc doar 7 caractere
char t[]="scoala"; // se aloca automat 7 octeti pentru sirul t: cele 6 litere si caracterul nul \0
char x[6]={'s','c','o','a','l','a','\0'}; // initializarea este similara cu cea a unui tablou oarecare - sirurile de caractere sunt tablouri
char z[]={'s','c','o','a','l','a','\0'}; // se aloca automat 7 octeti pentru sir
  `;
  const text2 = `cout << s << endl;`;
  const text3 = `cin >> s;`;
  const text4 = `istream& getline (char* s, streamsize n );`;
  const text5 = `cin.getline(s , 11);`;
  const text6 = `
char s[]="abac"; // sirul consta din 5 caractere: cele 4 litere si caracterul nul '\0'
cout << s[3]; // c
s[1] = 'r';
cout << s; // arac
cout << s[10]; // ??? comportament impredictibil: nu exista in sir caracter cu indice 1
  `;

  const instrctiuniImage = "./src/assets/instructiuni.png";

  return (
    <div className="lectie-container">
      <header>
        <h1>Șiruri de caractere</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"10"}
          ></RedirectionareLectii>
        </section>

        <section>
          În C++ există mai multe modalități de a reprezenta șirurile de
          caractere. În acest articol vom discuta despre șirurile de caractere
          reprezentate ca tablouri unidimensionale cu elemente de tip char,
          reprezentare care provine din limbajul C.
          <br></br>
          Aceste șiruri se mai numesc <b>null-terminated byte string (NTBS)</b>.
          În reprezentarea internă, după ultimul caracter (byte, octet) valid
          din șir se află caracterul '\0' – caracterul cu codul ASCII 0, numit
          și <b>caracter nul</b>.<br></br>
          <br></br>
          <img
            style={{
              height: "230px",
              width: "700px",
              marginLeft: "100px",
              marginBottom: "10px",
            }}
            src={siruriCaractereImage}
            alt="Binary"
          />
        </section>

        <section>
          <h2>Declararea unui șir de caractere</h2>
          Un șir de caractere se declară în C++ astfel:
          <br></br>
          <br></br>
          S-a declarat un șir care poate memora maxim 11 caractere, cu indici 0
          1 ... 10. Șirul s poate memora cel mult 10 caractere utile, după
          ultimul caracter util fiind memorat caracterul '\0'.
          <br></br>
          De asemenea, la declararea unui șir acesta poate fi inițializat.
          Următoarele exemple declară șiruri de caractere și le inițializează cu
          șirul "copil":
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
          <br></br>
          De asemenea, la declararea unui șir acesta poate fi inițializat.
          Următoarele exemple declară șiruri de caractere și le inițializează cu
          șirul "scoala":
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
            <pre style={{ fontFamily: "inherit" }}>{text1}</pre>
          </div>
        </section>

        <section>
          <h2>Afișarea unui șir de caractere</h2>
          Se poate face cu operatorul &lt;&lt; de inserție în stream:
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
            <pre style={{ fontFamily: "inherit" }}>{text2}</pre>
          </div>
          <br></br>
          <h2>Citirea unui șir de caractere</h2>
          Se poate folosi operatorul &gt;&gt; de extracție din stream. În acest
          mod, datorită specificului operatorului &gt;&gt; nu se pot citi șiruri
          care conțin spații – se vor citi caracterele până la primul spațiu,
          fără acesta.
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
            <pre style={{ fontFamily: "inherit" }}>{text3}</pre>
          </div>
          <br></br>
          Pentru a citi șiruri care conțin spații, putem folosi metoda getline a
          obiectului cin sau alt obiect de tip istream:<br></br>
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
          <br></br>
          Se vor citi în șirul s caracterele din stream-ul de intrare (de la
          tastatură) până la apariția caracterului sfârșit de linie '\n', dar nu
          mai mult de n-1 caractere. Caracterul '\n' nu va fi adăugat la șirul
          s, dar va fi extras din stream. De exemplu:
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
            <pre style={{ fontFamily: "inherit" }}>{text5}</pre>
          </div>
        </section>

        <section>
          <h2>
            Referirea unui caracter din șir. Parcurgerea unui șir de caractere
          </h2>
          Deoarece șirurile de caractere sunt de fapt tablouri, pentru referirea
          unui caracter din șir se folosește operatorul [], ca în exemplul
          următor:
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
            <pre style={{ fontFamily: "inherit" }}>{text6}</pre>
          </div>
        </section>

        <section>
          <h2>Funcții pentru caractere</h2>
          <h3>isalnum</h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            int isalnum( int ch );
          </div>
          <br></br>
          Verifică dacă un caracter este alfanumeric (cifră, literă mare, literă
          mică). Returnează o valoare diferită de zero dacă parametrul este
          alfanumeric, 0 în caz contrar.
          <h3>isalpha</h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            int isalpha( int ch );
          </div>
          <br></br>
          Verifică dacă un caracter este alfabetic (literă mare, literă mică).
          Returnează o valoare diferită de zero dacă parametrul este alfabetic,
          0 în caz contrar.
          <h3>islower</h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            int islower( int ch );
          </div>
          <br></br>
          Verifică dacă un caracter este literă mică. Returnează o valoare
          diferită de zero dacă parametrul este literă mică, 0 în caz contrar.
          <h3>isdigit</h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            int isdigit( int ch );
          </div>
          <br></br>
          Verifică dacă un caracter este cifră. Returnează o valoare diferită de
          zero dacă parametrul este cifră, 0 în caz contrar.
          <h3>tolower</h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            int tolower( int ch );
          </div>
          <br></br>
          Convertește parametrul la literă mică. Dacă parametrul este literă
          mare, returnează valoarea convertită, în caz contrar returnează
          valoarea inițială a parametrului.
          <h3>toupper</h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            int toupper( int ch );
          </div>
          <br></br>
          Convertește parametrul la literă mare. Dacă parametrul este literă
          mică, returnează valoarea convertită, în caz contrar returnează
          valoarea inițială a parametrului.
        </section>

        <section>
          <h2>Funcții pentru șiruri de caractere</h2>
          <h3>strlen</h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            std::size_t strlen( const char* str );
          </div>
          <br></br>
          Returnează lungimea șirului str, adică numărul de caractere din șirul
          al cărui prim caracter se află la adresa memorată în str. Caracterul
          nul nu se numără.
          <h3>strcpy</h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            char* strcpy( char* dest, const char* src );
          </div>
          <br></br>
          Copiază caracterele din șirul aflat la adresa src, inclusiv caracterul
          nul, în șirul al cărui prim element se află la adresa din dest.
          <h3>strncpy</h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            char *strncpy( char *dest, const char *src, std::size_t count );
          </div>
          <br></br>
          Copiază cel mult count caractere din șirul aflat la adresa src, în
          șirul al cărui prim element se află la adresa din dest.<br></br>
          În șirul dest nu se va plasa caracterul nul după cele count caractere
          copiate.<br></br>
          Funcția returnează adresa dest.<br></br>
          <h3>strcat</h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            char *strcat( char *dest, const char *src );
          </div>
          <br></br>
          Adaugă (concatenează) caracterele din șirul aflat la adresa src,
          inclusiv caracterul nul, la șirul al cărui prim element se află la
          adresa din dest.
          <br></br>
          Funcția returnează adresa dest.<br></br>
          <h3>strchr</h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            char *strchr( char * str, char ch );
          </div>
          <br></br>
          Caută caracterul ch în șirul al cărui prim caracter se află în memorie
          la adresa din str.
          <br></br>
          Funcția returnează adresa NULL, dacă caracterul ch nu apare în șirul
          str, respectiva adresa primei apariții al lui ch în str, dacă ch apare
          în str.<br></br>
          <h3>strstr</h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            char *strstr( char * s, char * t );
          </div>
          <br></br>
          Caută șirul t în șirul al cărui prim caracter se află în memorie la
          adresa din s.<br></br>
          Funcția returnează adresa NULL, dacă șirul t nu apare în șirul s,
          respectiva adresa primei apariții al lui t în s, dacă t apare în s.
          <br></br>
          <h3>strtok</h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            char *strtok( char *str, const char *sep );
          </div>
          <br></br>
          Funcția strtok extrage dintr-un sir de caractere câte un subșir
          (cuvânt) delimitat de caractere din șirul sep. Funcția se apelează în
          două moduri:
          <ul>
            <li>
              primul apel are ca parametri șirul din care se face extragerea și
              șirul separatorilor
            </li>
            <li>la următoarele apeluri primul parametru este NULL</li>
          </ul>
          Rezultatul funcției strtok este adresa de început a subșirului curent
          extras, sau NULL dacă nu se mai poate extrage niciun subșir din șirul
          dat.
        </section>
        <Carusel category="Șiruri de caractere" username={username}></Carusel>
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

export default SiruriDeCaractere;
