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
function Queue() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";

  const queueImage = "./src/assets/queue.png";
  const cinemaImage = "./src/assets/cinema.jpg";

  const [redirectPrev, setRedirectPrev] = useState<boolean>(false);
  const [redirectFollow, setRedirectFollow] = useState<boolean>(false);
  const handleButtonFollow = () => {
    setRedirectFollow(true);
  };

  if (redirectFollow) {
    return (
      <Redirect
        to={{
          pathname: `/coada`,
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
          pathname: `/stiva`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `
  #include <iostream>
  #define MAX_SIZE 100 // Definește dimensiunea maximă a cozii
  
  int queue[MAX_SIZE]; // Tablou pentru a stoca elementele cozii
  int front = -1; // Variabilă pentru a urmări primul element din coadă
  int rear = -1; // Variabilă pentru a urmări ultimul element din coadă
  
  void enqueue(int x) {
      if (rear == MAX_SIZE - 1) { // Verifică dacă coada este plină
          std::cout << "Coada este plina. Nu se poate adauga." << std::endl;
          return;
      }
      if (front == -1) // Verifică dacă coada este goală
          front = 0;
      queue[++rear] = x; // Adaugă elementul la sfârșitul cozii și actualizează rear-ul
  }
  
  void dequeue() {
      if (front == -1 || front > rear) { // Verifică dacă coada este goală
          std::cout << "Coada este goala. Nu se poate elimina." << std::endl;
          return;
      }
      ++front; // Elimină primul element din coadă prin actualizarea front-ului
  }
  
  int peek() {
      if (front == -1 || front > rear) { // Verifică dacă coada este goală
          std::cout << "Coada este goala." << std::endl;
          return -1;
      }
      return queue[front]; // Returnează primul element din coadă
  }
  
  bool isEmpty() {
      return (front == -1 || front > rear); // Verifică dacă coada este goală
  }
  

  `;
  const text1 = `
  #include <iostream>

  struct Node {
      int data;
      Node* next;
  };
  
  Node* front = nullptr; // Pointer către primul element din coadă
  Node* rear = nullptr; // Pointer către ultimul element din coadă
  
  void enqueue(int x) {
      Node* newNode = new Node; // Creează un nou nod pentru elementul de adăugat
      newNode->data = x; // Setează data noului nod
      newNode->next = nullptr; // Initializează legătura următoare a noului nod
  
      if (rear == nullptr) { // Verifică dacă coada este goală
          front = rear = newNode; // Dacă da, noul nod devine și primul și ultimul element din coadă
          return;
      }
      rear->next = newNode; // Legătură între vechiul rear și noul nod
      rear = newNode; // Actualizează rear-ul cu noul nod
  }
  
  void dequeue() {
      if (front == nullptr) { // Verifică dacă coada este goală
          std::cout << "Coada este goala. Nu se poate elimina." << std::endl;
          return;
      }
      Node* temp = front; // Păstrează referința către primul element din coadă
      front = front->next; // Actualizează front-ul la următorul nod
      delete temp; // Șterge nodul anterior din memorie
      if (front == nullptr) // Verifică dacă coada a devenit goală
          rear = nullptr; // Dacă da, rear-ul trebuie să fie și el nullptr
  }
  
  int peek() {
      if (front == nullptr) { // Verifică dacă coada este goală
          std::cout << "Coada este goala." << std::endl;
          return -1;
      }
      return front->data; // Returnează data primului element din coadă
  }
  
  bool isEmpty() {
      return (front == nullptr); // Verifică dacă coada este goală
  }
  
  `;

  const text2 = `
  #include <iostream>
  #include <queue> // Include biblioteca pentru containerul queue
  
  int main() {
      std::queue<int> myQueue; // Declarați o coadă de întregi
  
      // Adăugarea unor elemente în coadă
      myQueue.push(5);
      myQueue.push(10);
      myQueue.push(15);
  
      // Accesarea și eliminarea elementelor din începutul cozii
      std::cout << "Primul element din coada: " << myQueue.front() << std::endl;
      myQueue.pop();
  
      std::cout << "Primul element din coada: " << myQueue.front() << std::endl;
      myQueue.pop();
  
      std::cout << "Primul element din coada: " << myQueue.front() << std::endl;
      myQueue.pop();
  
      if (myQueue.empty()) {
          std::cout << "Coada este goala." << std::endl;
      }
  
      return 0;
  }
c:\Users\Alexandra\OneDrive\Pictures\Screenshots\Screenshot (707).png  

    `;

  return (
    <div className="lectie-container">
      <header>
        <h1>Coada</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"10"}
          ></RedirectionareLectii>
        </section>

        <section>
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: "0px" }}
          >
            <div style={{ flex: "1", marginRight: "20px" }}>
              <p>
                <b>Coada (queue)</b> este o structură de date abstractă în care
                operația de adăugare se realizează la un capăt, iar cea de
                eliminare se realizează la celălalt capăt.<br></br> În timpul
                operațiilor cu coada avem acces la un singur element, cel aflat
                la începutul cozii – elementul care urmează să se elimine.
              </p>
            </div>
            <div style={{ flexShrink: "0", marginRight: "-110px" }}>
              <img
                style={{
                  height: "230px",
                  width: "350px",
                  marginBottom: "10px",
                }}
                src={queueImage}
                alt="Binary"
              />
            </div>
          </div>
          <h2>Operații cu coada</h2>
          Cu o coadă se pot face următoarele operații:
          <ul>
            <li>inițializarea cozii – crearea unei cozi vide</li>
            <li>verificarea faptului că o coadă este sau nu vidă</li>
            <li>
              adăugarea unui nou element în coadă. Operația se numește push
            </li>
            <li>eliminarea unui element din coadă. Operația se numește pop</li>
            <li>
              iidentificarea valorii elementului de la începutul cozii – accesul
              la acel element Operația se numește front
            </li>
          </ul>
          <br></br>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "50px",
            }}
          >
            <div style={{ flex: "1" }}>
              <p>
                Operațiile cu coada sunt similare cu modul în care funcționează
                coada la casa de bilete a unui cinematograf. Imaginați-vă că
                spectatori vin și se așează în ordine la coadă. Această ordine
                în care spectatorii cumpără biletele este aceeași cu ordinea în
                care au sosit la coadă. Astfel, primul spectator care a venit la
                coadă va fi servit primul și va cumpăra biletele, iar apoi
                următorul spectator în ordine va urma. Acest proces continuă
                până când toți spectatorii sunt serviți în ordinea în care au
                sosit.
                <br></br> Deoarece operațiile de eliminare se fac în aceeași
                ordine ca cele de adăugare, coada este o structură de date de
                tip FIFO – First In First Out. <b>LIFO – Last In First Out </b>
                (ultimul intrat, primul ieșit).
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
                  width: "300px",
                  marginBottom: "10px",
                }}
                src={cinemaImage}
                alt="Binary"
              />
            </div>
          </div>
        </section>

        <section>
          <h2>Modalități de implementare a cozii</h2>
          Coada poate fi implementată în limbajul C++ în mai multe moduri:
          <ul>
            <li>implementare statică, prin intermediul tablourilo</li>
            <li>
              implementare dinamică, prin intermediul listelor alocate dinamic
            </li>
            <li>folosirea containerului queue din STL</li>
          </ul>
          <br></br>
          <h3>Implementare statică, prin intermediul tablourilor:</h3>
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
          <h3>
            Implementare dinamică, prin intermediul listelor alocate dinamic
          </h3>
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
          <h3>Folosirea containerului stack din STL</h3>
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
      </footer>
    </div>
  );
}

export default Queue;
