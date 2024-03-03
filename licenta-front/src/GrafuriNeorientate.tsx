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
function TeoriaGrafurilor() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";

  const orasImage = "./src/assets/oras.png";
  const extremitatiImage = "./src/assets/extremitati.png";
  const graphImage = "./src/assets/graph.png";
  const nodImage = "./src/assets/nodGraf.png";
  const subgrafImage = "./src/assets/supgraf.png";
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
          pathname: `/greedy`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `{ (y, x) | (x, y) ∈ E} `;

  return (
    <div className="lectie-container">
      <header>
        <h1>Grafuri Neorientate</h1>
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
          Matematic, un <b>graf</b> este o pereche ordonată de mulțimi,{" "}
          <i>G = ( V , E )</i> unde <i>V</i> reprezintă o mulțime finită și
          nevidă de elemente numite vârfuri (sau noduri), iar <i>E</i> este o
          mulțime de perechi cu elemente din <i>V</i>, numite muchii (dacă sunt
          neordonate) sau arce (dacă sunt ordonate). În primul caz graful se
          numește neorientat, iar în al doilea orientat (sau digraf)<br></br>
          <h2>Exemplu</h2>
          <h3>Harta unui oraș</h3>
          Nodurile sunt intersecții, iar o muchie dintre două noduri reprezintă
          faptul că există o stradă între cele două intersecții. În cazul în
          care vrem să evidențiem faptul că unele străzi au sens unic, graful
          devine orientat. Astfel, dacă există muchie de la <i>A</i> la <i>B</i>
          , înseamnă că din <i>A</i> se poate ajunge în <i>B</i> prin acel drum,
          dar nu și reciproc.<br></br>
          <br></br>
          <img
            style={{
              height: "300px",
              width: "600px",
              marginBottom: "10px",
              marginLeft: "120px",
              display: "flex",
            }}
            src={orasImage}
            alt="Binary"
          />
        </section>
        <section>
          <h2>Noțiuni elementare din teoria grafurilor</h2>

          <div
            style={{ display: "flex", alignItems: "center", marginLeft: "0px" }}
          >
            <div style={{ flex: "1", marginRight: "20px" }}>
              <p>
                Cele două noduri <i>x</i> și <i>y </i>ce formează muchia
                <i>[x,y]</i> se numesc extremități. În cazul grafurilor
                orientate, pentru arcul
                <i>(x,y)</i>, <i>x</i> se numește extremitate inițială, iar{" "}
                <i>y</i> extremitate finală. În plus, vom spune că
                <i>x</i> și <i>y</i> sunt noduri adiacente, și incidente la
                muchia/ arcul pe care îl formează.
              </p>
            </div>
            <div style={{ flexShrink: "0", marginRight: "-110px" }}>
              <img
                style={{
                  height: "200px",
                  width: "300px",
                  marginBottom: "10px",
                }}
                src={extremitatiImage}
                alt="Binary"
              />
            </div>
          </div>
        </section>
        <section>
          <h2>Graf simplu, multigraf</h2>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1", marginRight: "0px" }}>
              <img
                style={{
                  height: "200px",
                  width: "300px",
                  marginBottom: "10px",
                }}
                src={graphImage}
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
                  Între oricare două noduri ale unui graf simplu poate exista
                  cel mult o muchie/arc. În caz contrar, structura de date se va
                  numi multigraf. Într-un multigraf, muchiile cu aceeași pereche
                  de extremități se numesc muchii paralele. În plus, muchiile cu
                  extremități identice (de la un nod la el însuși), se numesc
                  bucle.
                </p>
              </div>
            </div>
          </div>

          <br></br>
        </section>
        <section>
          <h2>Numărul maxim de muchii/ arce</h2>
          Numărul maxim de muchii ale unui graf neorientat cu
          <i>n(n−1)/2</i>, pentru că, având la dispoziție <i>n</i> noduri, se
          pot forma
          <i>combinări de n luate câte două</i> perechi neordonate, iar în cel
          mai fericit caz, pentru oricare două noduri <i>x </i> și <i>y</i> din{" "}
          <i>V</i> există muchia <i> [x,y]</i>. Similar, numărul maxim de arce
          ale unui graf orientat cu n <i>n</i>noduri este{" "}
          <i>2 * combinări de n luate câte două</i> pentru că două noduri{" "}
          <i>x </i> și <i>y</i>
          pot contribui cu maxim două arce: <i>(x,y)</i> și
          <i>(y,x)</i>. Numărul de grafuri orientate/ neorientate
        </section>
        <section>
          <h2>Numărul de grafuri orientate/ neorientate</h2>
          De aici mai putem deduce două formule: Numărul de grafuri neorientate
          cu
          <i>n</i> noduri este{" "}
          <i>
            2<sup>n(n-1)/2</sup>
          </i>
          , pentru că între fiecare două noduri pot exista 0 sau 1 muchii.
          nalog, numărul de grafuri orientate cu <i>n</i> noduri este{" "}
          <i>
            4<sup>n(n-1)/2</sup> , pentru că între fiecare două noduri <i>x</i>{" "}
            și <i>y</i> pot exista arcul <i>(x,y)</i>, <i>(y,x)</i>, ambele sau
            niciunul .
          </i>
        </section>
        <section>
          <h2>Gradul unui nod</h2>
          Într-un graf neorientat, gradul unui nod reprezintă numărul de muchii
          incidente cu acesta, și se notează cu <i>d(x)</i>. Într-un graf
          orientat, gradul interior al nodului
          <i>x</i> se notează cu{" "}
          <i>
            d<sup>−</sup>(x)
          </i>{" "}
          și este egal cu numărul de arce cu extremitatea finală <i>x</i>,iar
          gradul exterior, notat cu{" "}
          <i>
            {" "}
            <i>
              d<sup>+</sup>(x)
            </i>
          </i>{" "}
          este numărul arcelor cu extremitatea inițială <i>x</i>.<br></br>
          <br></br>
          <img
            style={{
              height: "300px",
              width: "600px",
              marginBottom: "10px",
              marginLeft: "120px",
              display: "flex",
            }}
            src={nodImage}
            alt="Binary"
          />
          <br></br>
          Suma gradelor nodurilor unui graf neorientat este egală cu dublul
          numărului său de muchii, pentru că fiecare muchie contribuie cu câte o
          unitate la gradul a două noduri:{" "}
          <b>
            ∑<sub>x∈V</sub> d(x)=2∣E∣
          </b>
          <br></br>
          Atât suma gradelor interioare cât și suma gradelor exterioare ale
          nodurilor unui graf orientat sunt egale cu numărul de arce ale
          grafului, pentru că fiecare muchie contribuie cu câte o unitate la
          fiecare sumă: <br></br>
          <b>
            ∑<sub>x∈V</sub> d<sup>-</sup>(x) = ∑<sub>x∈V</sub> d<sup>+</sup>(x)
            = ∣E∣
          </b>
        </section>
        <section>
          <h2>Grafuri asociate unui graf</h2>
          Fie graful <i>G=(V,E)</i>. Graful <i>G′ =(V,E′ )</i> cu E′ ⊆E ste un{" "}
          <b>graf parțial </b>al grafului <i>G</i>. Se observă că acesta se
          poate obține prin eliminarea unor muchii/ arce din graful inițial.
          Numărul grafurilor parțiale ale lui <i>G</i>
          este 2<sup>∣E∣</sup>(pentru fiecare muchie avem două variante: o
          ștergem sau nu).<br></br>
          <br></br>
          Graful <i>G′′ =(V′′ ,E′′ )</i> cu <i>V′′ ⊆ V</i> și <i> E′′</i>{" "}
          mulțimea tuturor muchiilor/ arcelor din <i>E</i> cu extremități în{" "}
          <i>V ′′</i>V ′′ se numește subgraf al lui <i>G</i>. Acesta poate fi
          obținut eliminând unele noduri din <i>G</i>, împreună cu toate
          muchiile incidente la acestea. Numărul de subgrafuri ale lui
          <i>G</i> este 2<sup>|V|</sup>-1(numărul submulțimilor lui <i>V</i>,
          excluzând mulțimea vidă, deoarece graful nu poate avea 0 noduri).
          <br></br>
          <br></br>
          Un <b>subgraf parțial</b> este, după cum îi spune și numele, un
          subgraf din care s-au eliminat niște muchii.
          <br></br>
          <br></br>
          <img
            style={{
              height: "300px",
              width: "800px",
              marginBottom: "10px",
              marginLeft: "100px",
              display: "flex",
            }}
            src={subgrafImage}
            alt="Binary"
          />
          <br></br>
          <b></b> Graful complementar unui graf neorientat
          <i>G</i> are aceeași mulțime de vârfuri, dar mulțimea muchiilor
          conține doar muchiile care nu apar în
          <i>G</i>.<br></br>
          <br></br>
          <img
            style={{
              height: "250px",
              width: "500px",
              marginBottom: "10px",
              marginLeft: "200px",
              display: "flex",
            }}
            src={complementarImage}
            alt="Binary"
          />
          <br></br>
          Pentru un graf orientat <i>G</i>, graful{" "}
          <i>
            G<sup>T</sup> = ( V, E<sup>T)</sup>
          </i>
          se numește <b>graful transpus</b> al lui <i>G</i> dacă{" "}
          <i>
            E<sup>T</sup> = {text}
          </i>
          <br></br>
          <br></br>
          <img
            style={{
              height: "250px",
              width: "500px",
              marginBottom: "10px",
              marginLeft: "200px",
              display: "flex",
            }}
            src={transpusImage}
            alt="Binary"
          />
        </section>
        <section>
          <h2>Tipuri speciale de grafuri</h2>
          Un graf se numește <b>complet</b> dacă oricare două noduri ale sale
          sunt adiacente. Graful neorientat complet cu
          <i>n</i>noduri se notează{" "}
          <i>
            K<sub>n</sub>
          </i>{" "}
          și conține <i>n(n−1)/2</i> muchii.
          <br></br>
          <br></br>
          Există un singur <b>graf neorientat complet</b> cu <i>n</i> noduri,
          însă grafurile orientate complete cu <i>n</i>noduri sunt mai multe.
          Mai exact, între oricare două noduri <i>x</i> și <i>y</i> pot exista
          ori arcul <i>(x, y)</i>, ori <i>(y, x)</i>, ori ambele. Deci, numărul
          grafurilor orientate complete cu <i>n</i> noduri este{" "}
          <i>
            3<sup>n(n-1)/2</sup>
          </i>
          .<br></br>
          <img
            style={{
              height: "250px",
              width: "500px",
              marginBottom: "10px",
              marginLeft: "200px",
              display: "flex",
            }}
            src={completImage}
            alt="Binary"
          />
        </section>
        Un graf neorientat se numește <b>bipartit</b> dacă mulțimea muchiilor
        sale poate fi partiționată în două submulțimi <i>A</i> și <i>B</i>,
        astfel încât orice muchie are o extremitate în <i>A</i> și una în{" "}
        <i>B</i>. <br></br>
        <br></br>Un graf bipartit complet este un <b>graf bipartit</b> în care
        fiecare nod din <b>A</b> este adiacent cu fiecare nod din <i>B</i>.
        <br></br>
        <br></br>
        <img
          style={{
            height: "250px",
            width: "500px",
            marginBottom: "10px",
            marginLeft: "200px",
            display: "flex",
          }}
          src={bipartitImage}
          alt="Binary"
        />
        <section>
          Un graf neorientat se numește <b>regulat</b> dacă toate nodurile sale
          au același grad.
          <br></br>
          <br></br>
          <img
            style={{
              height: "250px",
              width: "500px",
              marginBottom: "10px",
              marginLeft: "200px",
              display: "flex",
            }}
            src={regulatImage}
            alt="Binary"
          />
          Un <b>graf stea</b> (star graph) este un graf neorientat format
          dintr-un nod la care s-au unit mai multe noduri terminale. Graful stea
          cu <i>n</i> noduri terminale se notează cu{" "}
          <i>
            S<sub>n</sub>. De exemplu, așa arată{" "}
            <i>
              S<sub>5</sub>
            </i>{" "}
          </i>
          <img
            style={{
              height: "250px",
              width: "400px",
              marginBottom: "10px",
              marginLeft: "200px",
              display: "flex",
            }}
            src={steaImage}
            alt="Binary"
          />
        </section>
        <section>
          <h2>Lanț, ciclu, drum, circuit</h2>
          Într-un graf neorientat, un <b>lanț</b> este o secvență de noduri [x
          <sub>1</sub> ​ ,x<sub>2</sub>​ ,…,x<sub>k</sub> ​ ], cu proprietatea
          că oricare două noduri consecutive din secvență sunt adiacente.
          Extremitatea inițială a lanțului este{" "}
          <i>
            x<sub>1</sub>
          </i>{" "}
          ​ , iar cea finală{" "}
          <i>
            x<sup>k</sup>
          </i>
          . <b>Lungimea</b> unui lanț este numărul muchiilor din care este
          compus, deci <i>k-1</i>.<br></br>
          <br></br>
          Un lanț este <b>elementar</b> dacă nu conține de mai multe ori același
          nod. Un lanț se numește <b>simplu</b> dacă nu conține de mai multe ori
          aceeași muchie. Se observă că orice lanț elementar este automat și
          simplu. Un ciclu este un lanț simplu pentru care extremitatea inițială
          este aceeași cu cea finală. Ciclul este <b>elementar</b> dacă nu
          conține de mai multe ori același nod (cu excepția extremităților).
          <br></br>
          <br></br>
          <img
            style={{
              height: "250px",
              width: "500px",
              marginBottom: "10px",
              marginLeft: "200px",
              display: "flex",
            }}
            src={elementarImage}
            alt="Binary"
          />
          Similar sunt definite și <b>drumurile</b> (pentru grafurile
          orientate): Un drum este o secvență de noduri{" "}
          <i>
            (x<sub>1</sub>, x<sub>2</sub>,...,x<sub>k</sub>)
          </i>
          cu proprietatea că pentru oricare două noduri consecutive{" "}
          <i>
            x<sub>i</sub>
          </i>{" "}
          și{" "}
          <i>
            x<sub>i+1</sub>
          </i>{" "}
          există arcul{" "}
          <i>
            (x<sub>i</sub>,x<sub>i+1</sub>)
          </i>
          . În plus, ciclul se va numi de fapt <b>circuit</b>.<br></br>
          <img
            style={{
              height: "250px",
              width: "600px",
              marginBottom: "10px",
              marginLeft: "200px",
              display: "flex",
            }}
            src={drumImage}
            alt="Binary"
          />
          <br></br>Un lanț/ drum/ ciclu/ circuit se numește <b>hamiltonian</b>{" "}
          dacă trece prin fiecare nod al grafului exact o singură dată.<br></br>
          Un lanț/ drum/ ciclu/ circuit se numește <b>eulerian</b> dacă trece
          prin fiecare dintre muchiile/ arcele grafului exact o singură dată.
          <br></br>
          <br></br>
          <img
            style={{
              height: "200px",
              width: "500px",
              marginBottom: "10px",
              marginLeft: "200px",
              display: "flex",
            }}
            src={xImage}
            alt="Binary"
          />
        </section>
        <section>
          <h2>Conexitate</h2>
          Un graf neorientat <i>G</i> se numește <b>conex</b> dacă există lanț
          între oricare două noduri ale sale. O <b>componentă conexă</b> a lui{" "}
          <i>G</i> este un subgraf conex maximal al său.
          <br></br>
          <br></br>'
          <img
            style={{
              height: "200px",
              width: "500px",
              marginBottom: "10px",
              marginLeft: "200px",
              display: "flex",
            }}
            src={conexImage}
            alt="Binary"
          />
          ' Un graf neorientat <i>G</i> se numește <b>tare-conex</b> dacă pentru
          oricare două noduri <i>x</i> și <i>y</i> le sale există atât drum de
          la <i>x</i> la <i>y</i> cât și drum de la <i>y</i> la <i>x</i>. O
          <b>componentă tare-conexă </b>a lui <i>G</i> este un subgraf
          tare-conex maximal al său.
        </section>
        <section>
          <h2>Grafuri ponderate</h2>
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: "0px" }}
          >
            <div style={{ flex: "1", marginRight: "20px" }}>
              <p>
                Adesea, modelarea problemelor practice necesită utilizarea unor
                grafuri în care muchiilor/ arcelor li se asociază costuri
                (ponderi). Astfel de grafuri se numesc <b>grafuri ponderate</b>.
                uncția care asociază câte un cost fiecărei muchii/ arc a
                grafului se numește <b>funcție de cost</b>. De exemplu, avem un
                graf <i>G = (V, E)</i> e reprezintă harta unei țări, și funcția{" "}
                <i>
                  f:V→N<sup>*</sup>
                </i>{" "}
                unde <i>f([x,y])</i> reprezintă lungimea străzii dintre orașele{" "}
                <i>x</i> și <i>y.</i>
              </p>
            </div>
            <div style={{ flexShrink: "0", marginRight: "-110px" }}>
              <img
                style={{
                  height: "200px",
                  width: "350px",
                  marginBottom: "10px",
                }}
                src={ponderatImage}
                alt="Binary"
              />
            </div>
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

export default TeoriaGrafurilor;
