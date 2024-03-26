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
function Instructiuni() {
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
          pathname: `/algoritmi-elementari`,
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
          pathname: `/lectii-clasa-a-noua`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `
{\n
  int a, x, p = 5;\n
  a = 0;\n
  x = p + 2;\n
  x++;\n
  p += x;\n
  cout<<a<<x<<p;\n
}\n`;

  const text2 = `{
  if(expresie logică)
  \tinstrucţiune;
}\n`;

  const text3 = `
{
  if(n%2==0)
  \tinstrucţiune1;
  else
  \tinstrucţiune2;
}\n`;

  const text4 = `
{
  if(n%2==0)
  \tcout<<“Numarul este par“;
}\n`;

  const text5 = `
{
  if(n%2==0)
  \tcout<<“Numarul este par“;
else
 \tcout<<“Numarul este impar“;

}\n`;

  const text6 = `{
    switch(expresie logică)
    {
     case c1: instrucţiune1;
     break;
     case c2: instrucţiune2;
     break;
     .................
     case cn: instrucţiunen;
    break;
     [default: instrucţiunen+1;]
     } 
}\n`;

  const text7 = `
    switch(variabilă)
    {
        case valoare_1: instrucţiune1;
        break;
        case valoare_2: instrucţiune2;
        break;
        default: cout<<“am citit altceva“;;    
     } 
\n`;

  const text8 = `  switch(variabilă)
    {
        case 1: cout<<“am citit 1“;
        break;
        case 2:cout<<“am citit 2“;
        break;
        default: cout<<“am citit altceva“;  
     } 
\n`;
  const text9 = `while(expresie logică)
    instrucţiune;   
\n`;
  const text10 = `int a=1;
    while(a<5)
    {
        a++;
        cout<<a<<endl;
    }

\n`;

  const text11 = `do
    instrucţiune;   
while(expresie logică);
\n`;

  const text12 = `
int a=1;
do
{
    a++;
    cout<<a<<endl;
} while(a<5);
\n`;

  const text13 = `for(expresie1;expresie2;expresie3)
    instrucţiune;
\n`;

  const text14 = `int i;
for(i=1;i<5;i++)
    cout<<i<<“ “;
\n`;

  const instrctiuniImage = "./src/assets/instructiuni.png";

  return (
    <div className="lectie-container">
      <header>
        <h1>Instrucțiuni</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"9"}
          ></RedirectionareLectii>
        </section>
        <section>
          <p>
            Pentru a genera rezultatele dorite, un program trebuie să acţioneze
            asupra datelor într-un mod bine precizat. Descrierea acestor acţiuni
            se face cu ajutorul instrucţiunilor limbajului de programare.
            Comenzile pe care programul le dă calculatorului, atunci când
            programul este rulat se numesc <b>instrucţiuni</b>. Instrucţiunile
            limbajului C++ sunt:<br></br>
            <ul>
              <li>instrucţiunea expresie</li>
              <li>instrucţiunea compusă</li>
              <li>instrucţiunea if</li>
              <li>instrucţiunea switch</li>
              <li>instrucţiunea break</li>
              <li>instrucţiunea while</li>
              <li>instrucţiunea do while</li>
              <li>instrucţiunea for</li>
            </ul>
            Instrucţiunile limbajului C++ se împart în două categorii:<br></br>{" "}
            • instrucţiuni simple;<br></br> • instrucţiuni de control
            (structurate).<br></br>
            Instrucţiunile simple nu conţin alte instrucţiuni (exp.
            instrucţiunea de atribuire). <br></br>Instrucţiunile de control
            specifică ordinea în care se execută instrucţiunile programului,
            controlând fluxul de execuţie al programului.<br></br>
          </p>
          <img
            style={{ height: "300px", display: "block", margin: "auto" }}
            src={instrctiuniImage}
            alt="Binary"
          />
        </section>
        <section>
          <h3>Instrucţiunea expresie</h3>
          Instrucţiunea expresie (de atribuire) este destinată atribuirii de
          valori variabilelor sau returnarea de valori în cazul funcţiilor.
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            Sintaxa:<br></br>
            <b>expresie;</b>
            <br></br>
            Efect:<br></br>• se evaluează expresia<br></br>
            <b>Exemple:</b>
            <br></br>
            a=b=c=d=10;<br></br>
            s=a+5;<br></br>
            p=abs(8);<br></br>
          </div>
        </section>
        <section>
          <h3>Instrucţiunea compusă</h3>
          Reprezintă o succesiune de declaraţii urmate de instrucţiuni, incluse
          între acolade.<br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            Sintaxa:<br></br>
            <strong>
              {
                //declaraţii;
                //instrucţiuni;
              }
            </strong>
            Efect:<br></br>• se execută în ordine instrucţiunile specificate.
            <br></br>
            <b>Exemple:</b>
            <br></br>
            <pre style={{ fontFamily: "inherit" }}>{text}</pre>
            <br></br>
          </div>
        </section>
        <section>
          <h3>Instrucţiunea if</h3>
          Instrucţiunea decizională (condiţională) if realizează selectarea în
          vederea execuţiei a unei singure instrucţiuni din mai multe posibile.
          <br></br>
          Există două forme ale instrucţiunii decizionale if.<br></br>
          <h4>Forma 1</h4>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            Sintaxa:
            <b>
              <pre style={{ fontFamily: "inherit" }}>{text3}</pre>
            </b>
            <br></br>
            Efect:
            <ul>
              <li>pasul 1: se evaluează expresie logică</li>
              <li>
                pasul 2: dacă valoarea produsă de expresie logică este diferită
                de 0 (este adevărată) se execută instrucţiune1, iar dacă
                valoarea produsă este 0 (este falsă) se execută instrucţiune2
              </li>
            </ul>
            <b>Exemple:</b>
            <pre style={{ fontFamily: "inherit" }}>{text5}</pre>
          </div>
          <h4>Forma 2</h4>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            Sintaxa:<br></br>
            <b>
              <pre style={{ fontFamily: "inherit" }}>{text2}</pre>
            </b>
            <br></br>
            Efect:
            <ul>
              <li>pasul 1: se evaluează expresie logică</li>
              <li>
                pasul 2: dacă valoarea produsă de expresie logică este diferită
                de 0 (este adevărată) se execută instrucţiune
              </li>
            </ul>
            <br></br>
            <b>Exemple:</b>
            <pre style={{ fontFamily: "inherit" }}>{text4}</pre>
          </div>
        </section>
        <section>
          <h3>Instrucţiunea switch</h3>
          Instrucţiunea decizională switch realizează selectarea în vederea
          execuţiei a unei singure instrucţiuni din mai multe posibile.<br></br>
          Instrucţiunea switch este o generalizare a instrucţiunii decizionale
          if, putând fi înlocuită cu instrucţiuni decizionale if imbricate.
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            Sintaxa:
            <b>
              <pre style={{ fontFamily: "inherit" }}>{text6}</pre>
            </b>
            Efect:
            <ul>
              <li>pasul 1: se evaluează expresie logică</li>
              <li>
                pasul 2: dacă aceasta produce o valoare egală cu cea produsă de
                ci , se execută instrucţiunei şi se încheie execuţia
                instrucţiunii switch, altfel se execută instrucţiunen+1
              </li>
            </ul>
            <b>Exemplu:</b>
            <br></br>
            <pre style={{ fontFamily: "inherit" }}>{text7}</pre>
          </div>
        </section>
        <section>
          <h3>Instrucţiunea break</h3>
          Instrucţiunea break se foloseşte în instrucţiunea decizională switch
          sau în instrucţiunile repetitive.<br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            Sintaxa:<br></br>
            <b>break;</b>
            <br></br>
            <br></br>
            Efect:<br></br>
            <ul>
              <li>
                determină ieşirea necondiţionată din instrucţiunea în care apare
                (switch, while, do while sau for)
              </li>
            </ul>
            <br></br>
            <b>Exemplu:</b>
            <pre style={{ fontFamily: "inherit" }}>{text8}</pre>
          </div>
        </section>
        <section>
          <h3>Instrucţiunea while</h3>
          Instrucţiunea repetitivă while specifică faptul că anumite
          instrucţiuni se execută de mai multe ori.<br></br>
          nstrucţiunea while este o instrucţiune repetitivă:
          <ul>
            <li>cu test iniţial</li>
            <li>cu număr necunoscut de paşi</li>
          </ul>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            Sintaxa:
            <b>
              <pre style={{ fontFamily: "inherit" }}>{text9}</pre>
            </b>
            Efect:
            <ul>
              <li>pasul 1: se evaluează expresie logică</li>
              <li>
                pasul 2: dacă valoarea produsă de aceasta este adevărată
                (diferită de 0), se execută instrucţiune, apoi se trece la pasul
                1, altfel (are valoarea 0) se trece la instrucţiunea următoare
                din program.
              </li>
            </ul>
            <b>Exemplu: </b>
            <pre style={{ fontFamily: "inherit" }}>{text10}</pre>
          </div>
        </section>
        <section>
          <h3>Instrucţiunea do while</h3>
          Instrucţiunea repetitivă do while specifică faptul că anumite
          instrucţiuni se execută de mai multe ori.<br></br>
          Instrucţiunea do while este o instrucţiune repetitivă:
          <ul>
            <li>cu test final</li>
            <li>cu număr necunoscut de paşi</li>
          </ul>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            Exemplu:
            <b>
              <pre style={{ fontFamily: "inherit" }}>{text10}</pre>
            </b>
            Efect:<br></br>
            <ul>
              <li>pasul 1: se execută instrucţiune;</li>
              <li>
                pasul 2: se evaluează expresie logică; dacă valoarea produsă de
                aceasta este 0, execuţia se încheie, altfel se trece la pasul 1
              </li>
            </ul>
            <b>Exemplu: </b>
            <pre style={{ fontFamily: "inherit" }}>{text12}</pre>
          </div>
        </section>
        <section>Instrucţiunea for</section>
        Instrucţiunea repetitivă for specifică faptul că anumite instrucţiuni se
        execută de mai multe ori.<br></br>
        <br></br>
        Instrucţiunea for este o instrucţiune repetitivă:
        <ul>
          <li>cu număr cunoscut de paşi</li>
        </ul>
        <div
          style={{
            boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
            padding: "10px",
          }}
        >
          Sintaxa:
          <b>
            <pre style={{ fontFamily: "inherit" }}>{text9}</pre>
          </b>
          <br></br>Efect:
          <ul>
            <li>pasul 1: se evaluează expresie1</li>
            <li>
              pasul 2: se evaluează expresie2; dacă aceasta produce o valoare
              diferită de 0, se execută instrucţiune, apoi se trece la pasul 3,
              altfel instrucţiunea for se încheie
            </li>
            <li>pasul 3: se evaluează expresie3 şi se revine la pasul 2</li>
          </ul>
          <b>Exemplu: </b>
          <pre style={{ fontFamily: "inherit" }}>{text14}</pre>
        </div>
        <br></br>
        <Carusel category="Instrucțiuni" username={username}></Carusel>
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

export default Instructiuni;
