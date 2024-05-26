import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./ClasaANoua.css";
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";
import Carusel from "./Carusel";
import "./Podium.css";

interface LocationState {
  username: string;
}
function Arbori() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";

  const arb1Image = "./src/assets/arb1.png";
  const arb2Image = "./src/assets/arb2.png";
  const arb3Image = "./src/assets/arb3.png";
  const arb4Image = "./src/assets/arb4.png";
  const arb5Image = "./src/assets/arb5.png";
  const complementarImage = "./src/assets/complementar.png";
  const transpusImage = "./src/assets/transpus.png";
  const completImage = "./src/assets/complet.png";
  const bipartitImage = "./src/assets/bipartit.png";
  const regulatImage = "./src/assets/regulat.png";
  const steaImage = "./src/assets/stea.png";
  const elementarImage = "./src/assets/elementar.png";
  const drumImage = "./src/assets/drum.png";
  const xImage = "./src/assets/x.png";
  const conexImage = "./src/assets/y.png";
  const ponderatImage = "./src/assets/z.png";
  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/grafuri-algoritmi`,
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
          pathname: `/teoria-grafurilor`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `k∈{0,1,2,⋯,h} `;
  const text2 = `k∈{0,1,2,⋯,h–1}`;
  const data = [
    ["Tata[k]", 0, 1, 1, 2, 3, 3, 4],
    ["Tip[k]", 0, -1, 1, -1, -1, 1, 1],
  ];

  const data1 = [
    ["st[k]", 2, 4, 5, 0, 0, 0, 0],
    ["dr[k]", 3, 0, 6, 7, 0, 0, 0],
  ];

  return (
    <div className="lectie-container">
      <header>
        <h1>Arbori binari</h1>
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
          <br></br>
          Se numește arbore binar un arbore cu rădăcină în care fiecare nod are
          cel mult doi descendenți direcți: descendentul stâng și descendentul
          drept
          <img
            style={{
              height: "200px",
              width: "300px",
              marginBottom: "10px",
              marginLeft: "30%",
              display: "flex",
            }}
            src={arb1Image}
            alt="Binary"
          />
          În arborele de mai sus:
          <ul>
            <li>nodul 1 este rădăcina;</li>
            <li>
              rădăcina are doi descendenți direcți (fii): 2 este descendent
              stâng a lui 1, iar 3 este descendent drept;
            </li>
            <li>
              nodul 2 are un singur descendent, pe 4. Acesta este descendent
              stâng al lui 2;
            </li>
            <li>similar, 7 este descendent drept al lui 4;</li>
            <li>nodurile 5, 6 și 7 sunt noduri terminale (frunze).</li>
          </ul>
          <b>Observație</b> Dacă un nod are un singur descendent acesta va fi
          descendent stâng sau drept – acest lucru trebuie să fie precizat.
        </section>
        <section>
          <h2>Proprietății ale arborilor binari</h2>

          <ol>
            <li>
              Fiecare nivel i=0,1,2,... dintr-un arbore binar conține cel mult 2
              <sup>i</sup> noduri.
            </li>
            <li>
              Un arbore binar de înălțime h conține cel mult 2<sup>h+1</sup>-1
              noduri. Demonstrația se bazează pe afirmația anterioară.
            </li>
            <li>
              Într-un arbore cu n noduri și înâlțime h avem relația h≥log
              <sub>2</sub>(n+1)−1 .
            </li>
            <li>
              Dacă într-un arbore binar numărul nodurilor terminale este a, iar
              c este numărul nodurilor care au exact 2 fii, atunci a = c + 1.
            </li>
          </ol>

          <h2>Tipuri speciale de arbori binari</h2>
          <h3>Arbore binar strict</h3>

          <div
            style={{ display: "flex", alignItems: "center", marginLeft: "0px" }}
          >
            <div style={{ flex: "1", marginRight: "20px" }}>
              <p>
                Se numește <b>arbore binar strict</b> un arbore binar în care
                fiecare nod, cu excepția celor terminale, are exact doi
                descendenți.
                <br></br>
                <br></br>
                <b>Proprietăți:</b>
                <ol>
                  <li>
                    Un arbore binar strict cu k noduri terminale are n=2⋅k–1
                    noduri.
                  </li>
                  <li>Un arbore binar strict are număr impar de noduri.</li>
                </ol>
              </p>
            </div>
            <div style={{ flexShrink: "0", marginRight: "-20px" }}>
              <img
                style={{
                  height: "150px",
                  width: "200px",
                  marginBottom: "10px",
                }}
                src={arb2Image}
                alt="Binary"
              />
            </div>
          </div>
        </section>
        <section>
          <h3>Arbore binar plin</h3>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1", marginRight: "0px" }}>
              <img
                style={{
                  height: "200px",
                  width: "300px",
                  marginTop: "70px",
                }}
                src={arb3Image}
                alt="Binary"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: "90px",
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <p>
                  Se numește <b>arbore binar plin</b> un arbore binar în care
                  fiecare nivel {text}, unde h este înălțimea arborelui, conține
                  2<sup>k</sup>
                  noduri.
                  <br></br>
                  <br></br>
                  <b>Proprietăți:</b>
                  <ul>
                    <li>
                      Arborele binar plin este un caz particular de arbore binar
                      strict, în care toate nodurile terminale sunt situate pe
                      același nivel.
                    </li>
                    <li>
                      Un arbore binar plin cu k noduri terminale are n=2⋅k–1
                      noduri.
                    </li>
                    <li>
                      Un arbore binar plin cu înălțimea h are 2<sup>h</sup>−1
                      noduri.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <h3>Arbore binar complet</h3>

          <div
            style={{ display: "flex", alignItems: "center", marginLeft: "0px" }}
          >
            <div style={{ flex: "1", marginRight: "20px" }}>
              <p>
                Se numește arbore binar complet un arbore binar în care fiecare
                nivel {text2}, unde h este înălțimea arborelui, conține 2k
                noduri, iar nivelul k conține eventual mai puțin de 2h noduri,
                acestea fiind grupate de regulă în partea stângă.
                <br></br>
                <br></br>
                <b>Observație:</b> Arborele binar plin este și arbore binar
                complet.
              </p>
            </div>
            <div style={{ flexShrink: "0", marginRight: "-20px" }}>
              <img
                style={{
                  height: "150px",
                  width: "200px",
                  marginBottom: "10px",
                }}
                src={arb4Image}
                alt="Binary"
              />
            </div>
          </div>

          <br></br>
        </section>

        <section>
          <h2>Reprezentarea arborilor binari</h2>
          Arborii binari se pot reprezenta fie prin <b>referințe ascendente</b>,
          fie prin <b>referințe descendente</b>, fie combinând cele două
          variante.
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1", marginRight: "0px" }}>
              <img
                style={{
                  height: "200px",
                  width: "300px",
                  marginTop: "70px",
                }}
                src={arb5Image}
                alt="Binary"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: "10px",
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <p>
                  <h3>Reprezentarea prin referințe ascendente</h3>
                  În cazul reprezentării prin referințe ascendente, pentru
                  fiecare nod din arbore trebuie să se cunoască:
                  <ul>
                    <li>nodul părinte</li>
                    <li>ce fel de descendent este (stâng sau drept).</li>
                    Pentru memorarea informațiilor, considerând nodurile
                    numerotate începând cu 1, putem folosi două tablouri: Tata[]
                    și Tip[], unde Tata[k] reprezintă nodul părinte al lui k sau
                    0 dacă k este chiar rădăcina arborelui, iat Tip[k] este 0,
                    dacă k este rădăcina arborului (caz în care nu are părinte),
                    respectiv -1 dacă k este descendent stâng al lui Tata[k] sau
                    1 dacă k este descendent drept al lui Tata[k].
                  </ul>
                </p>
              </div>
            </div>
          </div>
          Pentru arborele de mai sus, cele doua tablouri sunt:
          <table className="custom-tablee">
            <thead>
              <tr>
                <th>k</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${index}-${cellIndex}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Reprezentarea prin referințe descendente</h3>
          În cazul reprezentării prin referințe descendente, trebuie să fie
          cunoscută rădăcina arborelui binar, iar pentru celelalte noduri din
          arbore, trebuie să se cunoască fiul stâng și fiul drept. Această
          reprezentare se poate face cu ajutorul tablourilor. Dacă folosim
          tablouri, vom avea nevoie de două tablouri, st[] (de la stânga) și
          dr[] (de la dreapta). Considerând nodurile numerotate de la 1 la n:
          <ul>
            <li>
              st[k] reprezintă numărul de ordine al nodului care este descendent
              stâng al lui k, sau 0 dacă k nu are descendent stâng;
            </li>
            <li>
              dr[k] reprezintă numărul de ordine al nodului care este descendent
              drept al lui k, sau 0 dacă k nu are descendent drept.
            </li>
          </ul>
          <table className="custom-tablee">
            <thead>
              <tr>
                <th>k</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${index}-${cellIndex}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
          <br></br>
          Cunoscând valorile din cele două tablouri putem identifica rădăcina ca
          nodul care nu apare nici în st[], nici în dr[]. În exemplul de mai sus
          acesta este 1.
        </section>

        <section>
          <h2>Parcurgerea arborilor binari</h2>
          Pentru a prelucra un arbore este necesar ca nodurile sale să fie
          vizitate. La fel ca în cazul grafurilor (ceea ce și sunt de fapt
          arborii binari), ei pot fi parcurși în lățime sau în adâncime, a doua
          metodă fiind de regulă folosită.
          <br></br>
          Parcurgerea începe din rădăcină.
          <br></br>
          În funcție de ordinea în care se vizitează nodurile avem următoarele
          parcurgeri:
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: "0px" }}
          >
            <div style={{ flex: "1", marginRight: "20px" }}></div>

            <ol>
              <li>
                <b>parcurgerea în inordine</b> – <b>SRD</b> – se parcurge mai
                întâi subarborele stâng (<b>S</b>), apoi rădăcina (<b>R</b>),
                apoi subarborele drept (<b>D</b>);
              </li>
              <li>
                <b>parcurgerea în preordine</b> – <b>RSD</b> – se parcurge mai
                întâi rădăcina (<b>R</b>), apoi subarborele stâng (<b>S</b>),
                apoi subarborele drept (<b>D</b>);
              </li>
              <li>
                <b>parcurgerea în postordine</b> – <b>SDR </b>– se parcurge mai
                întâi subarborele stâng (<b>S</b>), apoi subarborele drept (
                <b>D</b>), apoi rădăcina (<b>R</b>).
              </li>
            </ol>
            <div style={{ flexShrink: "0", marginRight: "-30px" }}>
              <img
                style={{
                  height: "250px",
                  width: "250px",
                  marginBottom: "10px",
                }}
                src={arb5Image}
                alt="Binary"
              />
            </div>
          </div>
          <br></br>
          Pentru arborele de mai sus, ordinea de parcurgere este:
          <ul>
            <li>
              Inordine – SRD: <i>4 7 2 1 5 3 6</i>
            </li>
            <li>
              Preordine: RSD <i>1 2 4 7 3 5 6</i>
            </li>
            <li>
              Postordine: SDR <i>7 4 2 5 6 3 1</i>
            </li>
          </ul>
        </section>

        <Carusel category="Arbori" username={username}></Carusel>
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

export default Arbori;
