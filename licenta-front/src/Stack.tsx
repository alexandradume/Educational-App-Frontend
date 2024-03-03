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
function Stack() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const codingImage = "./src/assets/coding.png";
  const learningImage = "./src/assets/elearning.png";

  const stackImage = "./src/assets/stack.png";
  const carteImage = "./src/assets/carte.jpg";

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
          pathname: `/siruri-de-caractere`,
          state: { username: username },
        }}
      />
    );
  }

  const text = `
#include <iostream>
#define MAX_SIZE 100 // Definește dimensiunea maximă a stivei

int stack[MAX_SIZE]; // Tablou pentru a stoca elementele stivei
int top = -1; // Variabilă pentru a urmări vârful stivei

void push(int x) {
    if (top >= MAX_SIZE - 1) { // Verifică dacă stiva este plină
        std::cout << "Stiva este plina. Nu se poate adauga." << std::endl;
        return;
    }
    stack[++top] = x; // Adaugă elementul la vârful stivei și actualizează top-ul
}

void pop() {
    if (top < 0) { // Verifică dacă stiva este goală
        std::cout << "Stiva este goala. Nu se poate elimina." << std::endl;
        return;
    }
    --top; // Elimină elementul din vârful stivei prin actualizarea top-ului
}

int peek() {
    if (top < 0) { // Verifică dacă stiva este goală
        std::cout << "Stiva este goala." << std::endl;
        return -1;
    }
    return stack[top]; // Returnează elementul din vârful stivei
}

bool isEmpty() {
    return (top < 0); // Verifică dacă stiva este goală
}

  `;
  const text1 = `
#include <iostream>

struct Node {
    int data;
    Node* next;
};

Node* top = nullptr; // Pointer către vârful stivei

void push(int x) {
    Node* newNode = new Node; // Creează un nou nod pentru elementul de adăugat
    newNode->data = x; // Setează data noului nod
    newNode->next = top; // Legătură către vârful vechi al stivei
    top = newNode; // Actualizează vârful stivei
}

void pop() {
    if (top == nullptr) { // Verifică dacă stiva este goală
        std::cout << "Stiva este goala. Nu se poate elimina." << std::endl;
        return;
    }
    Node* temp = top; // Păstrează referința către vârful stivei
    top = top->next; // Actualizează vârful stivei la următorul nod
    delete temp; // Șterge nodul anterior din memorie
}

int peek() {
    if (top == nullptr) { // Verifică dacă stiva este goală
        std::cout << "Stiva este goala." << std::endl;
        return -1;
    }
    return top->data; // Returnează data stocată în vârful stivei
}

bool isEmpty() {
    return (top == nullptr); // Verifică dacă stiva este goală
}
  `;

  const text2 = `
#include <iostream>
#include <stack> // Include biblioteca pentru containerul stack

int main() {
    std::stack<int> myStack; // Declarați o stivă de întregi

    // Adăugarea unor elemente în stivă
    myStack.push(5);
    myStack.push(10);
    myStack.push(15);

    // Accesarea și eliminarea elementelor din vârful stivei
    std::cout << "Elementul din varful stivei: " << myStack.top() << std::endl;
    myStack.pop();

    std::cout << "Elementul din varful stivei: " << myStack.top() << std::endl;
    myStack.pop();

    std::cout << "Elementul din varful stivei: " << myStack.top() << std::endl;
    myStack.pop();

    if (myStack.empty()) {
        std::cout << "Stiva este goala." << std::endl;
    }

    return 0;
}

    `;

  return (
    <div className="lectie-container">
      <header>
        <h1>Stiva</h1>
      </header>
      <main>
        <section>
       <RedirectionareLectii
        username={username}
        clasa={"10"}>
       </RedirectionareLectii>
        </section>

        <section>
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: "0px" }}
          >
            <div style={{ flex: "1", marginRight: "20px" }}>
              <p>
                <b>Stiva (stack)</b> este o structură de date liniară abstractă,
                pentru care sunt definite operațiile de adăugare a unui element
                și eliminare a unui element și aceste operații se realizează la
                un singur capăt al structurii, numit vârful stivei.
              </p>
            </div>
            <div style={{ flexShrink: "0", marginRight: "-80px" }}>
              <img
                style={{
                  height: "230px",
                  width: "300px",
                  marginBottom: "10px",
                }}
                src={stackImage}
                alt="Binary"
              />
            </div>
          </div>
          <h2>Operații cu stiva</h2>
          Cu o stivă se pot face următoarele operații:
          <ul>
            <li>inițializarea stivei – crearea unei stive vide</li>
            <li>verificarea faptului că o stivă este sau nu vidă</li>
            <li>
              adăugarea unui nou element pe stivă – elementul devine vârful
              stivei. Operația se numește push
            </li>
            <li>
              eliminarea unui element de pe stivă – se va elimina vârful stivei.
              Un nou element devine vârf al stivei, sau ea devine vidă. Operația
              se numește pop
            </li>
            <li>
              identificarea valorii elementului din vârful stivei – accesul la
              acel element Operația se numește top
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
                Să ne imaginăm că avem o stivă de cărți pe o masă. Dacă adăugăm
                o altă carte la stivă, o vom plasa pe partea de sus a stivei.
                Astfel, acea carte va deveni noua carte de sus a stivei. Dacă
                dorim să luăm o carte din stivă, vom lua întotdeauna cea de sus,
                altfel riscul de a răsturna stiva este mare. Deci, în acest caz,
                lucrăm întotdeauna cu ultima carte adăugată sau scoasă din
                stivă.
                <br></br> Deoarece operațiile cu elementele stivei se fac la
                același capăt, spunem că stiva este o structură de date de tip{" "}
                <b>LIFO – Last In First Out </b>(ultimul intrat, primul ieșit).
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
                src={carteImage}
                alt="Binary"
              />
            </div>
          </div>
        </section>

        <section>
          <h2>Modalități de implementare a stivei</h2>
          Stiva poate fi implementată în limbajul C++ în mai multe moduri:
          <ul>
            <li>implementare statică, prin intermediul tablourilo</li>
            <li>
              implementare dinamică, prin intermediul listelor alocate dinamic
            </li>
            <li>folosirea containerului stack din STL</li>
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

export default Stack;
