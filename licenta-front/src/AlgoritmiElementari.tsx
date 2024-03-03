import React from "react";
import "./Lectie.css"; // Import your custom CSS file
import { Button } from "react-bootstrap";
import "./ClasaANoua.css";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import RedirectionareLectii from "./RedirectionareLectii";

interface LocationState {
  username: string;
}
function AlgoritmiElementari() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  console.log("heiii" + username);
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
          pathname: `/tablouri-unidimenisonale`,
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
          pathname: `/instructiuni`,
          state: { username: username },
        }}
      />
    );
  }

  const text0 = `
  #include <iostream>
  using namespace std;
  int main() {
    int n, s; // declararea variabilelor
    cin>>n; // citirea numărului n
    s=0; //inițializarea sumei cu 0
    while(n>0)
    { 
        s=s+n%10; //adăugarea ultimei cifre la sumă
        n=n/10; // tăierea ultimei cifre a variabilei n
    }
    cout<<s; // afisarea sumei
    return 0;
  }
\n`;

  const text1 = `
#include <iostream>
using namespace std;
int main() {
    int n; // declararea variabilei
    cin>>n; // citirea variabilei n
    while(n > 9)// cât timp n>9
    {
        n = n / 10;// tăierea ultimei cifre până când n ajunge de o cifră
    }
    cout<<n; //afisarea lui n (primei cifre a lui n)
    return 0;
    }

\n`;

  const text2 = `
#include <iostream>
using namespace std;
int main() {
    int n, inv; //declararea variabilelor
    cin>>n; // citirea lui n
    inv = 0; // inițializarea inversului cu 0 – deoarece este o sumă
    while(n > 0) până când n ajunge < sau = cu 0
    {
        inv = inv * 10 + n%10; // se construiește inversul pornind de la ultima cifră
        n = n / 10; // golirea numarului n de cifre
    }
    cout<<inv;
    return 0;
}

\n`;

  const text3 = `
#include <iostream>
using namespace std;
int main() {
    long long p, r;
    cin>>p; r = 0;
    while ( p > r ) {
        r = r * 10 + p % 10;
        p = p / 10;
    }// când numărul are un număr par de cifre testăm dacă p == r
    // când numărul are un număr impar de cifre testăm dacă p == r / 10
    if ( p == r || p == (r / 10) )
        cout<<"DA" ;
    else
        cout<<"NU" ;
    return 0; }

\n`;

  const text4 = `
#include <iostream>
using namespace std;
int main() {
    int n, uc, nou, p; cin>>n;
    nou = 0;
    p = 1; // orice produs se inițializează cu 1
    while(n > 0)
    { 
        uc = n % 10;// ultima cifră
        if (uc NU are proprietatea de șters) //uc trebuie păstrata
        {
            nou = nou + uc * p;
            p = p * 10;
        }
        n = n / 10;
    } 
    cout<<nou;
    return 0; }

\n`;

  const text5 = `
#include <iostream>
using namespace std;
int main()
{ 
    int n, pc, p;
    p = 1;
    while (p * 10 <= n)
    { 
        p = p * 10;
    }
    while(n > 0)
    { 
        pc = n / p;
        n = n % p;
        p = p /10;
    cout<<pc<<” ”;
    }
    return 0;
}

\n`;

  const text6 = `
#include <iostream>
using namespace std;
int main()
{ 
    int n, cmax=0, u;//cifra maxima se inițializează cu 0 sau cu -1
    cin>>n;
    while (n>0)
    {
         u=n%10; //ultima cifra
        if (u>cmax)
        {
            cmax=u;
        }
        n = n /10;// tăierea ultimei cifre până când n ajunge 0
    }
    cout<<cmax; // afișarea cifrei maxime
    return 0;
}

\n`;

  const text7 = `
#include <iostream>
using namespace std;
int main()
{
    int n, cmin=0, u;//cifra minima se inițializează cu 10 sau cu 9
    cin>>n;
    while (n>0)
    { 
        u=n%10; // ultima cifra
        if (u< cmin)
        { 
            cmin =u;
        }
        n = n /10; // tăierea ultimei cifre până când n ajunge 0
    }
    cout<< cmin; // afișarea cifrei minime
    return 0;
}

\n`;

  const text8 = `
#include <iostream>
using namespace std;
int main()
{
    int n, d;
    cin>>n ;
    d = n - 1;
    while ( n % d > 0) 1 // cât timp nu mai dăm de niciun divizor
    { 
        d = d - 1;} // decrementez cel mai mare divizor
        cout<< "Cel mai mare divizor propriu: "<<d ;
    return 0; 
    }

\n`;

  const text9 = `
#include <iostream>
using namespace std;
int main()
{
    int n, d;
    cin>>n ;
    cout<<"Divizorii lui ”<<n<<” sunt: ";
    d = 1;
    while ( d <= n/2 ){
        if ( n % d == 0 ) //dacă am găsit un divizor
            cout<<d<<” “; // îl afişăm
        d = d + 1;
    }
    cout<<n;//la sfârșit îl afişăm şi pe n
     return 0; 
}

\n`;

  const text10 = `
#include <iostream>
using namespace std;
int main()
{
    int n, d;
    cin>>n ;
    d = 2;
    while ( d * d <= n && 3 n % d > 0 ) /* condiția de oprire este d * d > n or n % d == 0 adică ori nu am găsit {
        d = d + 1; niciun divizor, ori am găsit primul divizor */
    if ( d * d > n )
        cout<<”d este prim ";
    else
        cout<<" d nu este prim ";
    return 0; 
}    

\n`;

  const text11 = `
#include <iostream>
using namespace std;
int main()
{
    int n, p, d;
    cin>>n; cout<< "n= ";
    d = 2;
    while ( n > 1 ) {
        p = 0;
        while ( n % d == 0 ) { dacă am găsit un divizor …
            p = p + 1; // puterea unui divizor prim d – de cate ori se cuprinde d în n
            n = n / d; // … împărţim numărul la d cât timp se mai poate
        }
        if ( p > 0 ) // dacă puterea este >0
            cout<<" *"<<d<<" ^"<<p ;// afișăm
        d = d + 1;
    }
    return 0; 
}    

\n`;

  const text12 = `
#include <iostream>
using namespace std;
int main()
{
    int a, b, r, p;
    cin>>a>>b;
    p=a*b;
    while ( b > 0 ) {
        r = a % b;
        a = b;
        b = r;
    }
    cout<<a<<” “; //cmmdc
    cout<<p/a; //cmmmc
    return 0; 
}    

\n`;

  const text13 = `
#include <iostream>
using namespace std;
int main()
{
    int n, cn, c;
    cin>>n;
    cn= 0;
    while ( n > 9 && cn == 0 ) {
        c = n % 10;
        cn = n / 10;}
        while ( cn > 0 && cn % 10 != c )
            cn = cn/ 10;
        n = n / 10;
    }
    if (cn==0)
        cout<<”Cifre distincte”;
    else
        cout<<”Cifre nedistincte”;
    return 0; 
}    

\n`;

  return (
    <div className="lectie-container">
      <header>
        <h1>Algoritmi Elementari</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"9"}
          ></RedirectionareLectii>
        </section>

        <section>
          <h2>Prelucrarea cifrelor unui număr natural</h2>
          <h3>Calculul şi afișarea sumei cifrelor unui număr natural n. </h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text0}</pre>
          </div>
          <h3>Aflarea primei cifre a numărului natural n. </h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text1}</pre>
          </div>
          <h3>
            Determinarea inversului (oglinditului) lui n de ex: n=1234, inv=4321{" "}
          </h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text2}</pre>
          </div>
          <h3>Numere de tip palindrom</h3>
          Cum aflăm dacă un număr este de tip palindrom (simetric)? Exemplu: 22,
          32123, 454, etc. Algoritmul clasic răstoarnă numărul şi testează dacă
          numărul este egal cu răsturnatul său:<br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text3}</pre>
          </div>
          <h3>Eliminarea din număr a cifrelor cu o anumita proprietate</h3>
          Acest algoritm construieşte noul număr începând cu cifra cea mai
          reprezentativă (cu prima cifră) şi utilizează o variabilă p care
          construieşte zecile, sutele, miile etc.<br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text4}</pre>
          </div>
          <h3>
            Descompunerea unui număr în cifre începând cu cifra cea mai
            semnificativă{" "}
          </h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text5}</pre>
          </div>
          <h3>Aflarea cifrei maxime dintr-un număr n:</h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text6}</pre>
          </div>
          <h3>Aflarea cifrei minime dintr-un număr n:</h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text7}</pre>
          </div>
          <h3>Cel mai mare divizor propriu al lui n</h3>
          Se citește un număr n. Să se afișeze cel mai mare divizor propriu al
          lui n (strict mai mic decât n). Exemplu: dacă n=24 cel mai mare
          divizor propriu este 12. Dacă n=7 cel mai mare divizor propriu este 1.
          Dacă n=125 cel mai mare divizor propriu este 25. Dacă n=175 cel mai
          mare divizor propriu este 35.<br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text8}</pre>
          </div>
          <h3>Divizorii unui număr</h3>
          Se citește un număr n, să se afișeze toți divizorii lui n. Spunem că d
          este divizor al lui n dacă n se împarte la d. Pentru a rezolva
          exerciţiul vom varia un contor d de la 1 la n. El reprezintă
          potenţialii divizori ai lui n. Pentru fiecare valoare a lui d, vom
          testa dacă n se împarte la d. Dacă da, vom afişa acel divizor.
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text9}</pre>
          </div>
          <h3>Număr prim</h3>
          Se citește un număr n. Să se spună dacă n este prim. Un număr este
          prim dacă nu se împarte decât la 1 și la el însuși. Vom proceda
          similar cu afişarea divizorilor: vom căuta primul divizor al lui n,
          începând cu 2. Dacă găsim un divizor, numărul nu este prim. Dacă, în
          schimb, primul divizor găsit este chiar n, numărul este prim.<br></br>
          Putem face mai puține iterații dacă observăm că dacă un număr nu are
          nici un divizor strict mai mare ca 1 dar mai mic sau egal cu radical
          din n atunci el nu va avea nici alți divizori mai mari decât radical
          din n dar mai mici decât n. Putem, deci, înlocui condiția d &lt;= n/2
          cu d * d &lt;= n. În acest caz va trebui să modificăm condiția finală
          de test de primalitate în d * d &lt; n.<br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text10}</pre>
          </div>
          <h3>Descompunerea în factori primi</h3>
          Se citește un număr n. Să se descompună în factori primi. Exemple:
          dacă n = 45 vom afișa 45 = * 3^2 * 5^1; dacă n = 1008 vom afișa 1008 =
          * 2^4 * 3^2 * 7^1. Observație: nu este nevoie să testăm dacă un
          divizor este prim, putem testa toți divizorii. <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text11}</pre>
          </div>
        </section>

        <section>
          <h3>
            Algoritmul lui Euclid (cel mai mare divizor comun a doua numere)
          </h3>
          Cel mai mare divizor comun al două numere naturale n și m poate fi
          determinat folosind descompunerea în factori primi a celor două
          numere. Această metodă este mai dificil de implementat. Există o
          metodă mai simplu de, numită <b>algoritmul lui Euclid</b>.<br></br>
          <b>Algoritmul lui Euclid</b> cu împărțiri se bazează pe ideea că cel
          mai mare divizor a două numere a, b divide și restul împărțirii
          acestora, r, conform teoremei împărțirii cu rest. Algoritmul este:
          <br></br>
          <ul>
            <li>
              Cât timp b != 0:
              <ul>
                <li>Determinăm restul împărțirii lui a la b</li>
                <li>În continuare a devine b, iar b devine restul calculat</li>
              </ul>
            </li>
            <li>
              Valoarea actuală a lui a este cel mai mare divizor comun a
              valorilor inițiale.
            </li>
          </ul>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text12}</pre>
          </div>
          <br></br>
          <b>Observație:</b> Pentru a determina cel mai mic multiplu comun a
          două numere naturale folosim următoarea teoremă: Produsul a două
          numere naturale este egal cu produsul dintre cel mai mare divizor
          comun al lor și cel mai mic multiplu comun al lor:{" "}
          <b>n * m = cmmdc * cmmmc</b>
        </section>

        <section>
          <h3>Număr cu cifre distincte</h3>
          Să se spună dacă un număr are toate cifrele distincte. Exemplu:
          545453967 nu are cifre distincte, cifrele 5 și 4 apar de două ori în
          număr; Numărul 5438 are cifre distincte, nici o cifră a sa nu se
          repetă.
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text13}</pre>
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

export default AlgoritmiElementari;
