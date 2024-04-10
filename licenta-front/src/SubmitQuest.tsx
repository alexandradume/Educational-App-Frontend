import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap"; // Asigură-te că importezi corect componenta pentru butoane
import { Redirect, useHistory } from "react-router-dom";
import { number } from "mathjs";
interface LocationState {
  username: string;
  score: number;
  number: number;
  doneQuest: number;
}

const SubmitQuest: React.FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const { username, score, number, doneQuest } = location.state;
  const knightmage = "./src/assets/knight.png";
  const questImage = "./src/assets/quest1.png";
  const winnerImage = "./src/assets/winner.png";
  console.log("iuuuuuuuuuu" + number + doneQuest);

  const handleRedirect = (pathname: string, state: any) => {
    history.push({ pathname, state });
  };
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
      <div
        style={{
          backgroundColor: "#f0f0f043",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px", // Adăugăm un margin-bottom pentru a crea spațiu între text și butoane
        }}
      >
        <div style={{ maxHeight: "100px", padding: "20px", marginTop: "40px" }}>
          {score < 2 ? (
            // Renderizează acest bloc dacă condiția este adevărată
            <div style={{ font: "30px", marginTop: "30px" }}>
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
                Dragă {username}, vrem să te felicităm pentru scorul tău bun, te
                încurajăm să continui procesul tău de învâțare. Te provocăm să
                obții la următorul quest măcar același rezultat!
              </b>
            </div>
          )}

          <div style={{ font: "30px" }}>
            {" "}
            <b>Scorul tău este {score}/5</b>
          </div>
        </div>
        <br></br>
        <Button
          onClick={() => handleRedirect("/profile", { username: username })}
          style={{
            marginLeft: "290px",
            marginTop: "20px",
            backgroundColor: "#333dd7b8",
          }}
        >
          Profil
        </Button>
        <Button
          onClick={() => handleRedirect("/map", { username: username })}
          style={{
            marginLeft: "200px",
            marginTop: "20px",
            backgroundColor: "#333dd7b8",
          }}
        >
          Vreau să mai încerc
        </Button>

        <img
          className="img-top-right"
          style={{ height: "70px", marginTop: "65px" }}
          src={knightmage}
          alt="Binary"
        />
        <img
          className="img-top-rightt"
          style={{ height: "70px", marginTop: "70px" }}
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
    </div>
  );
};

export default SubmitQuest;
