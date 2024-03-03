import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";

function Lectie() {
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";
  return (
    <div className="lectie-container">
      <header>
        <h1>Introducere în Programare</h1>
      </header>
      <main>
        <section>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "15%",
              height: "100%",
              backgroundColor: "#b4c3fe9b",
              boxShadow: "5px 0px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                marginTop: "30px",
                marginLeft: "10px",
              }}
            >
              Lectie 1<br></br>
              Lectie 2<br></br>
              Lectie 3<br></br>
              Lectie 4<br></br>
            </div>
          </div>
        </section>
        <section>
          <h2>Ce este programarea?</h2>
          <p>
            Programarea este procesul de creare a seturilor de instrucțiuni care
            dictează comportamentul computerelor și altor dispozitive
            electronice.
          </p>
        </section>
        <section>
          <h2>Tipuri de limbaje de programare</h2>
          <ul>
            <li>
              Limabje de programare de nivel înalt (ex. Python, JavaScript)
            </li>
            <li>Limbi de asamblare (ex. x86 Assembly)</li>
            <li>Limbi de descriere hardware (ex. Verilog)</li>
          </ul>
        </section>
        <section>
          <h2>Structuri de date</h2>
          <p>
            Structurile de date sunt metode organizate de stocare și manipulare
            a datelor într-un program.
          </p>
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
        >
          Următorul
        </Button>
      </footer>
    </div>
  );
}

export default Lectie;
