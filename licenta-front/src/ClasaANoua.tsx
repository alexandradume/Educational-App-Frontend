import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./ClasaANoua.css";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import RedirectionareLectii from "./RedirectionareLectii";
interface LocationState {
  username: string;
}
function ClasaANoua() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  console.log("heiii" + username);
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";
  const mainImage = "./src/assets/main.png";
  const mathImage = "./src/assets/math.png";
  const developImage = "./src/assets/develop.png";
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/instructiuni`,
          state: { username: username },
        }}
      />
    );
  }

  return (
    <div>
      {" "}
      <div className="lectie-container">
        <header>
          <h1>Elemente de bază</h1>
        </header>
        <main>
          <section>
            <RedirectionareLectii
              username={username}
              clasa={"9"}
            ></RedirectionareLectii>
          </section>
          <section>
            <h2>Ce este programarea?</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img style={{ height: "80px" }} src={developImage} alt="Binary" />
              <p style={{ marginLeft: "70px" }}>
                Programarea este procesul de creare a seturilor de instrucțiuni
                care dictează comportamentul computerelor și altor dispozitive
                electronice.
              </p>
            </div>
          </section>
          <section>
            <h2>Structura generală a unui program C++</h2>
            <div style={{ fontSize: 0 }}>
              <ul
                style={{
                  display: "inline-block",
                  verticalAlign: "top",
                  marginLeft: "20px",
                  fontSize: "initial",
                }}
              >
                <li>
                  un program C++ este constituit dintr-o succesiune de module,
                  denumite funcţii
                </li>
                <li>
                  una dintre aceste funcţii este funcţia principală, denumită
                  main()
                </li>
                <li>
                  main() este o funcţie specială, care trebuie să apară
                  obligatoriu o singură dată în orice program C++
                </li>
                <li> execuţia oricărui program începe cu funcţia main() </li>
                <li>o funcţii este constituită din antet şi corp</li>
                <li>
                  o funcţii este constituită din antet şi corp • antetul
                  funcţiei conţine numele funcţiei, tipul rezultatului pe care
                  îl calculează funcţia şi o listă de parametri prin care
                  funcţia comunică cu exteriorul ei, încadrată între paranteze
                  rotunde
                </li>
                <li>
                  corpul funcţiei conține declarații și instrucțiuni care
                  specifică prelucrările realizate de funcția respectivă
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Forma funcţiei main</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img style={{ height: "120px" }} src={mainImage} alt="main" />
              <p style={{ marginLeft: "10px" }}>
                Instrucţiunea return este utilizată pentru a încheia execuţia
                unei funcţii și a returna valoarea expresiei specificate în
                instrucţiunea return ca valoare a funcţiei.
              </p>
            </div>
          </section>
          <section>
            <h2>Vocabular</h2>
            Vocabularul limbajului C++ este format din:
            <ul>
              <li>setul de caractere</li>
              <li>identificatori</li>
              <li>cuvinte cheie</li>
              <li>comentarii</li>
              <li>separatori</li>
            </ul>
            <h3>Setul de caractere</h3>
            Setul de caractere utilizat pentru scrierea programelor C++ este
            setul de caractere al codului ASCII. Codul ASCII este format din:
            <br></br> • literele mari şi mici ale alfabetului latin (A-Z, a-z);
            <br></br> • cifrele sistemului de numeraţie zecimal (0-9); <br></br>
            • caracterele speciale (blank, +, *, %, =, ! etc.).<br></br>
            <h3>Identificatori</h3>
            Identificatorii (numele) au rolul de a denumi elemente ale
            programului precum constante, variabile, funcţii etc.
            Identificatorii:<br></br>• reprezintă o secvenţă de litere, cifre şi
            _ (linia de subliniere) care trebuie să înceapă cu _ sau cu o
            literă;<br></br>• nu pot fi cuvinte cheie (rezervate) ale
            limbajului.<br></br>
            <br></br>
            <div
              style={{
                boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
                padding: "10px",
              }}
            >
              <b>Exemple:</b> suma, Suma, suma1, suma_1
              <br />
              <b>Contra exemple:</b> suma 1, 1suma, suma+1
            </div>
            <span></span>
            <h3>Cuvinte cheie</h3>
            Cuvintele cheie (keywords) sunt cuvinte care au un înţeles bine
            definit şi nu pot fi folosite în alt context.<br></br>
            <b>Exemple: </b> bool, break, default, void, do, double etc.
            <h3>Comentarii</h3>
            Pentru ca un program să fie uşor de înţeles se folosesc
            comentariile. Acestea sunt texte care vor fi ignorate de compilator,
            dar au rolul de a explicita pentru programator anumite secvenţe de
            program.<br></br>
            <br></br>
            <div
              style={{
                boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
                padding: "10px",
              }}
            >
              <b>// comentariu</b>
              <br></br>
              sau<br></br>
              <b>
                /*comentariu<br></br> comentariu<br></br> ..........*/<br></br>
              </b>
            </div>
            <h3>Separatori</h3>
            Separatorii se folosesc pentru a delimita unităţile sintactice.
            <br></br>
            <br></br>
            <div
              style={{
                boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
                padding: "10px",
              }}
            >
              <b>Exemple: </b> blank, TAB, virgula, caracterele de control CR+LF
              generate de tasta Enter
            </div>
          </section>
          <section>
            <h2>Tipuri simple de date</h2>
            Prin date se înţelege, în general, tot ceea ce este prelucrat de un
            calculator. Fiecare dată are un anumit tip.
            <br></br>Un tip de date defineşte:
            <ul>
              <li>
                mulţimea valorilor pe care le pot lua datele de tipul respectiv
              </li>
              <li>modul de reprezentare a acestora în memorie</li>
              <li> operaţiile care se pot efectua cu datele respective</li>
            </ul>
            Tipuri standard în C++:<br></br>
            <ul>
              <li>
                {" "}
                <b>int</b> şi <b>long </b>– pentru memorarea numerelor întregi
              </li>
              <li>
                <b>float</b> şi <b>double</b> pentru memorarea numerelor reale
              </li>
              <li>
                <b>char</b> – pentru memorarea caracterelor
              </li>
              <li>
                {" "}
                <b>void</b> – pentru tip neprecizat
              </li>
            </ul>
            Tipul void este un tip special, pentru care mulţimea valorilor este
            vidă. Acest tip se utilizează atunci când este necesar să specificăm
            absenţa oricărei valori. De exemplu, poate fi utilizat pentru a
            specifica tipul unei funcţii care nu returnează niciun rezultat.
          </section>
          <section>
            <h2>Constantele</h2>
            <ol>
              <li>
                constanta are un tip şi o valoare fixă pe toată durata execuţiei
                programului care o conţine
              </li>
              <li>
                tipul şi valoarea unei constante se definesc prin caracterele
                care compun constanta respectivă
              </li>
            </ol>
            Constantele se clasifică astfel:
            <ul>
              <li> numerice: - întregi - reale </li>
              <li>caracter</li> <li>şir de caractere</li>
            </ul>
            <h3>Declararea constantelor</h3>
            <br></br>
            Sintaxa:<br></br>
            const [tip_dată] nume=valoare;<br></br>
            unde:<br></br>
            <ul>
              <li>
                const este un cuvânt cheie care înseamnă definirea unei
                constante simbolice
              </li>
              <li>tip_dată precizează tipul constante (poate lipsi)</li>
              <li>nume este identificatorul constantei</li>
              <li>valoare este valoarea constantei</li>
            </ul>
            <br></br>
            <br></br>
            <div
              style={{
                boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
                padding: "10px",
              }}
            >
              <b>Exemple</b>
              <br></br>
              const int a=0;<br></br>
              const int x=-5;<br></br>
              const float PI=3.14;<br></br>
              const char a=„a‟;<br></br>
              const char sir[]=“info”;<br></br>
            </div>
          </section>
          <section>
            <h2>Variabile</h2>
            <ol>
              <li>nume asociat cu una sau mai multe locaţii de memorie</li>
              <li>
                valoarea păstrată în aceste locaţii se poate modifica în cursul
                execuţiei programului
              </li>
              <li>trebuie declarate – se specifică tipul şi numele</li>
            </ol>
            <h3>Declararea variabilelor</h3>
            <br></br>
            Sintaxa:<br></br>
            tip_dată nume; unde:
            <ul>
              <li>
                tip_dată precizează tipul datei memorate în variabila de memorie
              </li>
              <li>nume este identificatorul variabilei de memorie</li>
            </ul>
            <br></br>
            <div
              style={{
                boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
                padding: "10px",
              }}
            >
              <b>Exemple:</b>
              <br></br>
              Exemple int a;<br></br>
              int a,b=1, c=2;<br></br>
              float e=1.234;<br></br>
              unsigned int p,q;<br></br>
              char sir[]="info";<br></br>
            </div>
          </section>

          <section>
            <h2>Operatori</h2>
            Operatorii sunt caractere speciale care indică operaţia care se
            efectuează în cadrul unui program
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "120px", marginLeft: "30px" }}
                src={mathImage}
                alt="main"
              />
              <ol style={{ marginLeft: "50px" }}>
                <li>Operatori aritmetici: -, +, *, /, % </li>
                <li>
                  Operatori de comparație (relaționali ): &lt;, &gt;, &lt;=,
                  &gt;=
                </li>
                <li>Operatori de egalitiate: ==, !=</li>
                <li>Operatori de incrementare/decrementare: ++, --</li>
                <li>
                  Operatori logici: &amp;&amp; (ŞI logic), || (SAU logic) , !
                </li>
                <li>Operatori de atribuire: =, *=, /=, %=, +=, -=</li>
                <li>Operatorul virgulă</li>
              </ol>
            </div>
          </section>
          <section>
            <h2>Expresii</h2>O expresie este alcătuită din unul sau mai mulţi
            operanzi legaţi între ei prin operatori. Operanzii pot fi constante,
            variabile sau funcţii.<br></br>
            Operanzii reprezintă valorile care intră în calcul, iar operatorii
            desemnează operaţiile care se execută în cadrul expresiei.<br></br>
            <br></br>
            expresie = operatori + operanzi<br></br>
            <br></br>
            Tipul unei expresii reprezintă tipul valorii expresiei.<br></br>
            Expresiile se împart în două categorii:<br></br>
            <ul>
              <li>
                expresii aritmetice: sunt cele care efectuează operaţii
                aritmetice având ca rezultat un număr<br></br>
                <div
                  style={{
                    boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
                    padding: "10px",
                  }}
                >
                  <b>Exemple:</b>
                  <br></br>
                  int x=7, y=2, r;<br></br>
                  r=x/y; <br></br>
                </div>
              </li>
              <li>
                expresii logice: valoarea unei expresii logice reprezintă
                valoarea de adevăr a expresiei aferente
                <br></br>
                <div
                  style={{
                    boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
                    padding: "10px",
                  }}
                >
                  <b>Exemple:</b>
                  <br></br>
                  int x=7, y=2; <br></br>
                  x!=y <br></br>
                  X&lt;y <br></br>
                </div>
              </li>
            </ul>
          </section>
          <section>
            <h2>Operaţii de citire şi scriere</h2>
            În limbajul C++ operaţiile de introducere şi extragere date se
            execută prin fluxurile de date.<br></br>
            Un <b>flux de date</b> (stream) reprezintă fluxul datelor de la
            sursă (de exemplu tastatură) la destinaţie (de exemplu ecranul
            monitorului). Prin fluxurile de date echipamentele periferice de
            intrare-ieşire sunt conectate la programul C++.
            <h3>Flux de date de intrare (cin)</h3>
            <ul>
              <li>conectează tastatura la program</li>
              <li>execută operaţii de citire</li>
              <li>datele de intrare sunt furnizate programului</li>
              <li>datele sunt păstrate în variabile de memorie</li>
              <li>cin reprezintă tastatura</li>
              <li>
                operatorul de intrare &gt;&gt; înseamnă transmiterea unei valori
                de la tastatură
              </li>
              <br></br>
              <b>Sintaxa:</b>
              <br></br>
              <br></br>
              <div
                style={{
                  boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
                  padding: "10px",
                }}
              >
                cin&gt;&gt;nume_var;<br></br>
                sau<br></br>
                cin&gt;&gt;nume_var1&gt;&gt;nume_var2&gt;&gt; …
                &gt;&gt;nume_varn;
                <br></br>
              </div>
            </ul>
            <h3>Flux de date de ieşire (cout)</h3>
            <ul>
              <li>conectează monitorul la program</li>
              <li>execută operaţii de scriere</li>
              <li>datele de ieşire sunt furnizate de program</li>
              <li>datele sunt transmise către monitor</li>
              <li>cout reprezintă monitorul</li>
              <li>
                operatorul de ieşire &lt;&lt; înseamnă transmiterea unei valori
                către monitor
              </li>
              <br></br>
              <br></br>
              <div
                style={{
                  boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
                  padding: "10px",
                }}
              >
                <b>Sintaxa:</b>
                <br></br>
                cout&lt;&lt;nume_var|constantă;<br></br>
                sau<br></br>
                coutt&lt;&lt;nume_var1|constantă1t&lt;&lt; nume_var
                2|constantă2t&lt;&lt; … t&lt;&lt;nume_varn|constantăn;
                <br></br>
              </div>
            </ul>
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
    </div>
  );
}

export default ClasaANoua;
