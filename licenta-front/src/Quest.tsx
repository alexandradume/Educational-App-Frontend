import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap"; // Asigură-te că importezi corect componenta pentru butoane
import { Redirect, useHistory } from "react-router-dom";
interface LocationState {
  username: string;
}

const Quest: React.FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const knightmage = "./src/assets/knight.png";
  const questImage = "./src/assets/quest1.png";
  const winnerImage = "./src/assets/winner.png";
  console.log(username);

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
        Bine ai venit {username}!<br></br>
        Questurile te vor ajuta să aduni atât puncte pentru a demonstra că ai
        căpătat cunoștiințe, cât și în obținerea unei evaluări sincere <br></br>
        pentru marele examen care te așteaptă! Nu uita că fiecare punct acumulat
        te aduce mai aproape de centura neagră.
        <br></br>
        Întrebarea cea mai importantă acum este:<br></br>{" "}
        <b> Ești pregătit să intrii în Ținutul Biților?</b>
        <br></br>
        <Button
          onClick={() => handleRedirect("/map", { username: username })}
          style={{
            marginLeft: "290px",
            marginTop: "20px",
            backgroundColor: "#333dd7b8",
          }}
        >
          Evident
        </Button>
        <Button
          onClick={() => handleRedirect("/profile", { username: username })}
          style={{
            marginLeft: "200px",
            marginTop: "20px",
            backgroundColor: "#333dd7b8",
          }}
        >
          Cred că mă retrag
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

export default Quest;
