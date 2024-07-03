import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap"; // Asigură-te că importezi corect componenta pentru butoane
import { Redirect, useHistory } from "react-router-dom";
import { number } from "mathjs";

interface LocationState {
  username: string;
  score: number;
  number: number;
  doneQuest: number;
  change: boolean;
}

const SubmitQuest: React.FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const { username, score, number, doneQuest, change } = location.state;
  const knightmage = "./src/assets/knight.png";
  const questImage = "./src/assets/quest1.png";
  const winnerImage = "./src/assets/winner.png";

  console.log("Baaaaaaaaaaaaaai", doneQuest);

  const [doneQuesst, setDoneQuest] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/users/${username}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setDoneQuest(data.numberOfDoneQuest);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [username]);

  console.log("iuuuuuuuuuu" + number + doneQuesst);

  const handleRedirect = (pathname: string, state: any) => {
    history.push({ pathname, state });
  };

  var rangImage = "";

  console.log("hooooooooo", change, doneQuesst);
  if (score == 5) {
    rangImage = "./src/assets/letter-a.png";
  } else if (score == 4) {
    rangImage = "./src/assets/letter-b.png";
  } else if (score == 3) {
    rangImage = "./src/assets/letter-c.png";
  } else {
    rangImage = "./src/assets/letter-d.png";
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to right, #4875a6b2, #d3c5ff9c)",
        fontSize: "20px",
        paddingRight: "20px",
        paddingLeft: "20px",
      }}
    >
      {visible ? (
        <div
          style={{
            backgroundColor: "#f0f0f043",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px", // Adăugăm un margin-bottom pentru a crea spațiu între text și butoane
          }}
        >
          <div
            style={{
              maxHeight: "200px",
              padding: "20px",
              marginTop: "0vh",
              paddingBottom: "10px",
            }}
          >
            {score < 2 ? (
              // Renderizează acest bloc dacă condiția este adevărată
              <div style={{ font: "30px", marginTop: "40px" }}>
                <b>
                  <i>
                    Dragă {username}, deși scorul tău nu este unul suficient de
                    bun, important este că ai căpătat și prin această evaluare
                    experiență și cunoștiințe. Capul sus, data viitoare o să fie
                    mult mai bine!
                  </i>
                </b>
              </div>
            ) : (
              // Renderizează acest bloc dacă condiția este falsă
              <div style={{ font: "30px" }}>
                <b>
                  Dragă {username}, vrem să te felicităm pentru scorul tău bun,
                  te încurajăm să continui procesul tău de învâțare. Te provocăm
                  să obții la următorul quest măcar același rezultat!
                </b>
              </div>
            )}

            {change ? (
              <p>
                <b>
                  Din păcate nu ai reușit să deschizi următorul quest, mai
                  încearcă!
                </b>
              </p>
            ) : null}

            {doneQuesst == 5 && score < 5 ? (
              <p>
                <b>
                  Din păcate, nu ai reușit să obții comoara noastră, trebuie să
                  obții punctajul maxim.
                </b>
              </p>
            ) : null}

            <div style={{ font: "30px" }}>
              {" "}
              <b>Scorul tău este {score}/5</b>
            </div>
          </div>
          <br></br>
          <br></br>
          <Button
            onClick={() => handleRedirect("/profile", { username: username })}
            style={{
              marginLeft: "290px",
              marginTop: "5px",
              marginBottom: "20px",
              backgroundColor: "#333dd7b8",
            }}
          >
            Profil
          </Button>
          <Button
            onClick={() => handleRedirect("/map", { username: username })}
            style={{
              marginLeft: "200px",
              marginTop: "5px",
              marginBottom: "20px",
              backgroundColor: "#333dd7b8",
            }}
          >
            Vreau să mai încerc
          </Button>
          <br></br>

          <img
            className="img-top-right"
            style={{ height: "70px", marginTop: "40px" }}
            src={knightmage}
            alt="Binary"
          />
          <img
            className="img-top-rightt"
            style={{ height: "70px", marginTop: "50px" }}
            src={questImage}
            alt="Binary"
          />
          <img
            className="img-bottom-left"
            style={{ height: "90px", marginBottom: "150px" }}
            src={winnerImage}
            alt="Binary"
          />
        </div>
      ) : (
        <div
          className="quest-divv"
          style={{
            height: "auto",
            width: "30vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            border: "2px solid #333", // Adaugă o margine subțire
            borderRadius: "10px", // Rotunjirea marginilor
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", // Adaugă o umbră subtilă
            paddingBottom: "45px",
          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold", // Font mai îngroșat
              color: "#333",
              marginBottom: "10px", // Culoare mai închisă
            }}
          >
            RANG
          </p>
          <img
            style={{ height: "50px", marginBottom: "15px" }}
            src={rangImage}
            alt="Binary"
          />{" "}
          {/* Margin-bottom pentru a separa imaginea de text */}
          {change && doneQuesst === 6 && (
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              {" "}
              {/* Aliniere text la centru */}
              Felicitări! Ți-ai demonstrat dexteritatea informatică și ai
              obținut comoara mult dorită!
            </div>
          )}
          <Button
            variant="primary"
            type="submit"
            style={{
              width: "80px",

              backgroundColor: "#333dd7b8",
              color: "#fff", // Text alb
              border: "none", // Fără contur
              borderRadius: "5px", // Rotunjirea marginilor
            }}
            onClick={() => setVisible(true)}
          >
            Ok
          </Button>
        </div>
      )}

      {!change && doneQuesst == 6 ? <div></div> : null}
    </div>
  );
};

export default SubmitQuest;
