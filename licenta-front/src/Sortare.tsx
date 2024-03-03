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
function Sortare() {
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
          pathname: `/tablouri-bidimenisonale`,
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
  int n, X[100];
  //citire X[] cu n elemente
  for(int i = 0 ; i < n - 1 ; i ++)
      for(int j = i + 1 ; j < n ; j ++)
          if(X[i] > X[j])
          {
              int aux = X[i];
              X[i] = X[j];
              X[j] = aux;
          }
    }\n
`;

  const text1 = `
int n, X[100];
//citire X[] cu n elemente
for(int i = 1 ; i < n ; i ++)
{
    int x = a[i];
    int p = i - 1;
    while(p >= 0 && a[p] > x)
        a[p + 1] = a[p], p --;
    a[p + 1] = x;
}\n
`;

  const text2 = `
  int n, v[100];
  //citire v[] cu n elemente
  bool sortat;
  int m = n;
  do
  {
    sortat = true;
    int p = m;
    for(int i = 0 ; i < p - 1 ; i ++)
      if(v[i] > v[i+1])
      {
        int aux = v[i];
        v[i] = v[i+1];
        v[i+1] = aux;
        sortat = false;
        m = i + 1;
      }
  }
  while(!sortat);\n
`;

  const selectionImage = "./src/assets/selectionsort.gif";
  const insertionImage = "./src/assets/insertionsort.gif";
  const bubbleImage = "./src/assets/bubblesort.gif";

  return (
    <div className="lectie-container">
      <header>
        <h1>Sortări</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"9"}
          ></RedirectionareLectii>
        </section>

        <section>
          Sortarea unui tablou reprezintă o rearanjare a elementelor astfel
          încât valorile acestora să fie într-o anumită ordine. De regulă
          ordinea cerută este cea crescătoare sau descrescătoare.<br></br>
        </section>
        <section>
          <h2>Sortarea prin selecție</h2>
          Pas 1. Determinam minimul din vector si poziția sa.<br></br>
          Pas 2. Interschimba minimul cu primul element din vector si astfel
          minimul ajunge pe poziția sa finală în vectorul ordonat.<br></br>
          Reluam Pas 1 si 2 pentru vectorul cu ultimele n-1 elemente, care
          trebuie sortat: determinam minimul dintre ultimele n-1 elemente si îl
          mutam pe a doua poziție, apoi facem același lucru pentru șirul care
          începe cu al treilea element, până când vectorul este sortat.
          Implementarea algoritmului descris: <br></br>
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
            <img
              style={{
                height: "200px",
                marginLeft: "200px",
                marginBottom: "50px",
              }}
              src={selectionImage}
              alt="Binary"
            />
          </div>
        </section>

        <section>
          <h2>Sortarea prin inserție</h2>
          Sortarea prin inserție (Insertion Sort) se bazează pe următoarea idee:
          <ul>
            <li>fie un vector X[] cu n elemente</li>
            <li>
              dacă secvența cu indici 0, 1, …, i-1 este ordonată, atunci putem
              insera elementul X[i] în această secvență astfel încât să fie
              ordonată secvența cu indici 0, 1, …, i-1, i
            </li>
            <li>
              luăm pe rând fiecare element X[i] și îl inserăm în secvența din
              stânga sa
            </li>
            <li>la final întreg vectorul va fi ordonat</li>
          </ul>
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
            <img
              style={{
                height: "200px",
                marginLeft: "200px",
                marginBottom: "50px",
              }}
              src={insertionImage}
              alt="Binary"
            />
          </div>
        </section>
        <section>
          <h2>Metoda bulelor</h2>
          Cunoscută și sub numele BubbleSort, metoda bulelor se bazează pe
          următoare idee:
          <ul>
            <li>fie un vector X[] cu n elemente</li>
            <li>
              parcurgem vectorul și pentru oricare două elemente învecinate care
              nu sunt în ordinea dorită, le interschimbăm valorile
            </li>
            <li>
              după o singură parcurgere, vectorul nu se va sorta, dar putem
              repeta parcurgerea
            </li>
            <li>
              dacă la o parcurgere nu se face nicio interschimbare, vectorul
              este sortat
            </li>
          </ul>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text2}</pre>
            <img
              style={{
                height: "100px",
                marginLeft: "200px",
                marginBottom: "0px",
              }}
              src={bubbleImage}
              alt="Binary"
            />
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

export default Sortare;
