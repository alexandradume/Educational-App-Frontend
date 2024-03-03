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
function TablouriUnidimensionale() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  console.log("heiii" + username);

  const vectorImage = "./src/assets/vector.png";
  const interclasareImage = "./src/assets/interclasare.png";
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
          pathname: `/algoritmi-elementari`,
          state: { username: username },
        }}
      />
    );
  }

  const text0 = `
  int v[4]={5, 6, 10, 21}; // inițializarea la declarare
  int numere[50];
 for(i=0;i<numar_numere;i++)
    { 
        numere[i]=i;
     } // inițializarea la atribuire
    v[3] = 30; // atribuirea
    v[i] = v[i] + 1; // atribuirea
\n`;

  const text1 = `
int a[100];//un vector de maxim 100 elemente
int main()
{ 
    int n,i;
    cout<<”n= ”; cin>>n; //n este lungimea vectorului
    for(i=0;i<n;i++)
    {
        cout<<”a[ ”<<i<<”]= “; /*se afiseaza numarul de ordine al elementului, care
        este cu 1 mai mare decat indicele */
        cin>>a[i];
    }
    return 0; 
}
\n`;

  const text2 = `
int a[100]; //un vector de maxim 100 elemente
int main()
{ 
    int n,i;
    cout<<”n= ”; cin>>n; //n este lungimea vectorului
    for(i=1;i<=n;i++)
    {
        cout<<”a[ ”<<i<<”]= “; //se afiseaza numarul de ordine al elementului,
        cin>>a[i];
    }
    return 0;
}

\n`;

  const text3 = `
int a[100]; //un vector de maxim 100 elemente
int main()
{ 
    int n,i;
    ..........
    for(i=0;i<n;i++)
    {
        cout<<a[i+1]<<” ”;
    }
    return 0;
}
\n`;

  const text4 = `
#include <iostream>
using namespace std;
int v[100];// se declară vectorul ca variabilă globală
int main()
{
    int i, n, s=0; //suma se iniţializează cu 0
    cin>>n;
    for ( i = 1; i <= n; i++ )
    { 
        cin>>v[i];
        s= s + v[i];//la suma anterioară se adaugă noua valoare
    }
    cout<<s;
    return 0;
}

\n`;

  const text5 = `
#include <iostream>
using namespace std;
int v[101];// se declară vectorul ca variabilă globală
int main()
{
    int i, vmax,n;
    cin>>n;
    for ( i = 1; i <= n; i++ )
        cin>>v[i];
    vmax = v[1];// se iniţializează maximul cu valoarea primului element din vector
    for ( i = 2; i <= n; i++ ){
        if (v[i] > vmax ) //daca se gaseste un element mai mare
            vmax = v[i]; //vmax ia valoarea lui
    }
    cout<<vmax;
    return 0;
}
\n`;

  const text6 = `
int a[101], n, i;
min=max=a[1];
for (i=2; i<=n; i++)
    { 
        if(min>a[i]) min=a[i];
        if(max<a[i]) max=a[i];
    }
\n`;

  const text7 = `
for (i=n-1; i>=0; i--)
{ 
    cout<<a[i]<<” ” ;
}
\n`;

  const text8 = `
for (i=n; i>=1; i--)
{ 
    cout<<a[i]<<” ” ; 
}
\n`;
  const text9 = `
for(i=0; i< n/2; i++)
{ x=a[i]; a[i]=a[n-i-1]; a[n-i-1]=x; }
\n`;
  const text10 = `
for(i=1; i< =n/2; i++)
{ x=a[i]; a[i]=a[n-i+1]; a[n-i+1]=x; }
\n`;

  const text11 = `
aux=a[1];
for(i=1;i<=n-1;i++)
    a[i]=a[i+1]; }
a[n]=aux;
\n`;

  const text12 = `
aux=a[n];
for(i=n; i>1; i--)
    a[i]=a[i-1];
a[1]=aux;
\n`;
  const text13 = `
for(i=n+1; i>k; i--)
    a[i]=a[i-1];
a[k]=x;
n++;
\n`;
  const text14 = `
for(i=k; i<=n-1; i++)
    a[i]=a[i+1];
n--;
\n`;

  const text15 = `
#include <iostream>
using namespace std;
int v[100];
int main() {
    int n, i, x;
    cin>>n>>x;
    for ( i = 0; i < n; i++ )
        cin>>v[i] ;     
    i = 0;
    while ( i < n && v[i] != x ) // câtă vreme suntem încă în vector
        i++; // şi nu l-am găsit pe x, avansăm cu un pas
    cout<<i ; // afisam pozitia pe care am gasit elementul x
    return 0;
}
\n`;

  const text16 = `
#include <iostream>
using namespace std;
int a[100];
int main() {
    int n, i, lmax, pmax, pc, lc;
    cin>>n;
    for ( i = 1; i <=n; i++ ){
        cin>>a[i] ;
    }
    lmax = 0;
    lc=1; //lungimea curenta se inițializează cu 1
    pc=1; //poziția curenta este poziția primului element
    for ( i = 2; i<=n; i++ ){
        if ((a[i]%2)!=(a[i-1]%2)){ //dacă resturile sunt diferite
            lc++; // se incrementează lungimea curenta cu 1
        }
        else
        {
            lc=1; // se resetează lungimea curenta la 1
            pc=i;
        }
        if (lmax<lc){
            lmax=lc;
            pmax=pc;
        }
    }
    for (i = pmax; i <= pmax+lmax-1; i++ ){
        cout<<a[i]<<" "; //se afișează toate elementele din secvența de lungime maxima
    }
    return 0;
}
\n`;

  const text17 = `
#include<iostream>
using namespace std;
int v[10];
int main()
{ 
    int n,c;
    cin>>n;
    while (n>0)
    { 
        c=n%10;
        v[c]++; //construim vectorul frecventelor
        n=n/10;
    }
    for(c=0;c<10;c++)
    { 
        if (v[c]!=0) //afișam cifrele distincte si numărul de apariții
        cout<<c<<' '<<v[c]<<endl;
    }
    return 0;
}

\n`;

  const text18 = `

int n,a[100000], m , b[100000], p, c[200000];

//citire a[] cu n elemente, indexate de la 0
//citire b[] cu m elemente, indexate de la 0

int i = 0 , j = 0;
p = 0;
while(i < n && j < m)
    if(a[i] < b[j])
        c[p ++] = a[i ++];
    else
        c[p ++] = b[j ++];
while(i < n)
    c[p ++] = a[i ++];
while(j < m)
    c[p ++] = b[j ++];
    
\n`;
  return (
    <div className="lectie-container">
      <header>
        <h1>Tablouri Unidimensionale</h1>
      </header>
      <main>
        <section>
          <RedirectionareLectii
            username={username}
            clasa={"9"}
          ></RedirectionareLectii>
        </section>

        <section>
          Vectorii sau tablourile unidimensionale sunt structuri de date bine
          definite si organizate in memorie. Cu ajutorul acestora, se pot păstra
          in memorie si accesa ulterior mai multe variabile, fără a fi nevoie de
          reținerea explicită a fiecăreia dintre ele. Cu alte cuinte, un vector
          reţine sub același nume mai multe valori de același tip. Fiecare
          valoare poate fi accesata folosind poziția sa în vector (pozițiile
          sunt numere naturale cuprinse intre 0 si dimensiunea maximă a
          vectorului).<br></br>
          <h3>Declararea vectorului</h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            {" "}
            Sintaxa este:{" "}
            <b>tip_elemente_vector nume_vector[dimensiune_maxima_vector]; </b>
            <br></br>
            <b>Exemple:</b> <br></br>int x[100];// tipul elementelor vectorului
            este int iar dimensiunea maxima 100 <br></br>
            double a[50]; char s[1000];<br></br>
          </div>
          <h3>Inițializarea vectorilor</h3>
          Fiecare element al vectorului este o variabilă separată, care poate fi
          atribuită, citită sau scrisă întocmai ca o variabilă de tipul
          vectorului.<br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <img
              style={{ height: "100px", display: "block", margin: "auto" }}
              src={vectorImage}
              alt="Binary"
            />
            <br></br>
            <br></br>
            <pre style={{ fontFamily: "inherit" }}>{text0}</pre>
          </div>
          <h3>Citirea vectorilor</h3>
          Citirea mai multor valori dintr-un fișier și introducerea lor într-un
          vector se face similar cu citirea unei secvențe: vom citi mai întâi
          numărul de elemente, n și apoi cele n elemente, de la 0 la n-1 sau de
          la 1 la n.<br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            {" "}
            <pre style={{ fontFamily: "inherit" }}>{text1}</pre>
            <b>Explicație</b>
            <br></br>
            Aici indicii tabloului sunt 0, 1 ,2, … 99. Deci daca tabloul are n
            elemente atunci primul indice este 0, iar ultimul indice este
            n-1;Explicație Aici indicii tabloului sunt 0, 1 ,2, … 99. Deci daca
            tabloul are n elemente atunci primul indice este 0, iar ultimul
            indice este n-1;<br></br>
            <br></br>
            <br></br>
            sau<br></br>
            <pre style={{ fontFamily: "inherit" }}>{text2}</pre>
            <b>Explicație</b>
            <br></br>
            Aici indicii tabloului sunt 0, 1 ,2, … 99. Deci daca tabloul are n
            elemente atunci primul indice este 0, iar ultimul indice este n-1;
            <br></br>
          </div>
          <h3>Afişarea vectorilor</h3>
          Afișarea valorilor vectorului este similară cu citirea. Vom scrie în
          fișierul de ieșire fiecare valoare, pe rând: de la 0 la n-1 sau de la
          1 la n. Vom reprezenta doar prima variant
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            {" "}
            <pre style={{ fontFamily: "inherit" }}>{text3}</pre>
            <b>Explicație</b>
            <br></br>Aici indicii tabloului sunt 0,1,2,…99. Deci daca tabloul
            are n elemente atunci primul indice este 0, iar ultimul indice este
            n-1;
          </div>
        </section>

        <section>
          <h2>Algoritmi elementari cu vectori</h2>
          <h3>Suma elementelor unui vector</h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text4}</pre>
          </div>
          <h3>Maximul dintr-un vector</h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text5}</pre>
          </div>
          <h3>Min/Max</h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text6}</pre>
          </div>
          <h3>Afişarea în ordine inversă a elementelor unui vector </h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <div
              style={{
                flex: 1,
                borderRight: "1px solid #000",
                paddingRight: "00px",
              }}
            >
              <pre style={{ fontFamily: "inherit" }}>{text7}</pre>
            </div>
            <div style={{ flex: 1, paddingLeft: "20px" }}>
              <pre style={{ fontFamily: "inherit" }}>{text8}</pre>
            </div>
          </div>
          <h3>Afişarea în ordine inversă a elementelor unui vector </h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <div
              style={{
                flex: 1,
                borderRight: "1px solid #000",
                paddingRight: "00px",
              }}
            >
              <pre style={{ fontFamily: "inherit" }}>{text9}</pre>
            </div>
            <div style={{ flex: 1, paddingLeft: "20px" }}>
              <pre style={{ fontFamily: "inherit" }}>{text10}</pre>
            </div>
          </div>
          <h3>Permutare circulară </h3>
          <div
            style={{
              display: "flex",
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <div
              style={{
                flex: 1,
                borderRight: "1px solid #000",
                paddingRight: "00px",
              }}
            >
              <pre style={{ fontFamily: "inherit" }}>{text11}</pre>
            </div>
            <div style={{ flex: 1, paddingLeft: "20px" }}>
              <pre style={{ fontFamily: "inherit" }}>{text12}</pre>
            </div>
          </div>
          <h3>Inserarea valorii x pe poziția k </h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text13}</pre>
          </div>
          <h3>Eliminarea elementului a[k] aflat pe poziția k </h3>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text14}</pre>
          </div>
          <h3>Căutarea unui element în vector </h3>
          Exercițiu: se citesc n şi x numere naturale, iar apoi se citesc n
          numere. Să se spună prima poziție pe care apare elementul x. Dacă
          elementul x nu se află în vector vom afișa poziția n (în afara
          vectorului).
          <br></br>
          <br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text15}</pre>
          </div>
        </section>

        <section>
          <h2>Secvențe în vectori</h2>
          Definiție: Fie X[] un vector cu n element. Se numește secvență a
          vectorului X o succesiune de elemente consecutive din X, în ordinea
          din X. Orice secvență a unui vector este unic determinată de doi
          indici st ≤ dr, ai primului, respectiv ultimului element din secvență.
          <br></br>
          <b>Exemplu: </b>Fie vectorul X[]=(10,20,30,40,50,60,70,80). Atunci:
          <ul>
            <li>
              (10,20,30,40), (30,40,50,60,70), (10,20,30,40,50,60,70,80), (50),
              (80) reprezintă secvențe ale lui X
            </li>
            <li>
              (10,30,40,20) nu reprezintă secvență în X – ordinea valorilor nu
              este cea din X
            </li>
            <li>
              (10,20,40,50) nu reprezintă secvență în X – valorile nu sunt
              consecutive în X
            </li>
            <li>
              10,20,30,35,40 nu reprezintă secvență în X – avem o valoare care
              nu apare în X
            </li>
          </ul>
          <b>Definiție</b> Prin lungimea unei secvențe se înțelege numărul de
          elemente care formează secvența. Lungimea secvenței delimitate de
          indicii st și dr este dr - st + 1.
          <h3>Secvență de lungime maximă</h3>
          Să se afişeze cea mai lungă secvenţă de elemente consecutive de
          parităţi diferite.<br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text16}</pre>
          </div>
        </section>

        <section>
          <h2>.Vector de frecvenţe </h2>
          Vectorii de frecvență sunt vectori ale căror elemente au o
          semnificație specială: valoarea de pe poziția i arată numărul de
          apariții (sau frecvența) lui i într-o altă entitate, de obicei o
          secvență de numere, sau un număr.<br></br> Exemplu: Fie dat șirul de
          numere sau secvența: 5 4 4 0 3 2 2 2 0 Vectorul caracteristic va fi:
          <br></br>
          În orice mulţime elementele sunt unice, iar vectorul frecvenţelor are
          doar valori 0 sau 1. Acest vector este numit vectorul caracteristic al
          unei mulţimi. Vectorul de frecvenţe poate fi folosit pentru a obţine
          rapid mulţimea asociată ca un vector caracteristic astfel:
          <ul>
            <li>0 înseamnă că elementul nu aparţine mulţimii</li>
            <li>
              1 (o valoare diferită de 0) înseamnă că elementul aparţine
              mulţimii
            </li>
          </ul>
          <h3>Exemplu 1</h3>
          Fiind dat un număr natural n între 1 şi 2.000.000.000 să se afişeze
          cifrele numărului şi numărul de apariții ale fiecărei cifre in număr
          (vezi exemplul de mai sus).<br></br>
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text17}</pre>
          </div>
        </section>
        <section>
          <h2>Interclasare</h2>
          Considerăm două tablouri unidimensionale cu elemente numere întregi
          ordonate crescător. Se dorește construirea unui alt tablou, care să
          conțină valorile din cele două tablouri, în ordine.
          <br></br>O soluție foarte eficientă este interclasarea:
          <ul>
            <li>
              considerăm două tablouri, cu n, respectiv m elemente, ordonate
              crescător
            </li>
            <li>cele două tablouri se parcurg concomitent</li>
            <li>
              se alege valoarea mai mică dintre cele două elemente curente
              <ul>
                <li>adaugă în al treilea tablou</li>
                <li>
                  avansează numai în tabloul din care am ales valoarea de
                  adăugat
                </li>
              </ul>
            </li>
            <li>parcurgerea unuia dintre cele două tablouri se încheie</li>
            <li>
              toate elementele din celălalt tablou, neparcurse încă, sunt
              adăugate în tabloul destinație
            </li>
            <li>tabloul destinație are p = n + m elemente</li>
          </ul>
          <img
            style={{ height: "200px", display: "block", margin: "auto" }}
            src={interclasareImage}
            alt="Binary"
          />
          <div
            style={{
              boxShadow: "2px 2px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <pre style={{ fontFamily: "inherit" }}>{text18}</pre>
          </div>
        </section>
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

export default TablouriUnidimensionale;
