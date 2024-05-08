import React, { useState, useEffect } from "react";
import ProfilePicture from "./ProfilePicture";
import { Redirect, useHistory } from "react-router-dom";
import Table from "./Table";
import { Form, FormControl, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Map.css";
import axios from "axios";
import Tooltip from "./Tooltip";

interface NavBarProps {
  username: string;
}
interface UserData {
  id: {
    timestamp: number;
    date: string;
  };
  username: string;
  password: string;
  description: string;
  birthdate: string;
  tests: string[];
  score: number;
  money: number;
  scores: {
    [date: string]: number; // Cheia este data, iar valoarea este scorul asociat cu acea dată
  };
  numberOfDoneQuest: number;
}

const Map: React.FC<NavBarProps> = () => {
  const location = useLocation<NavBarProps>();
  const { username } = location.state;
  console.log(username);
  const history = useHistory();
  const profileImage = "./src/assets/map.jpeg";
  const exitImage = "./src/assets/no.png";
  const redoImage = "./src/assets/redo.png";
  const chestImage = "./src/assets/treasure-chest.png";
  const unopendChestImage = "./src/assets/treasure-chestt.png";
  const smileImage = "./src/assets/smile.png";
  const [visible, setVisible] = useState(true);
  const [doneQuest, setDoneQuest] = useState(0);
  const [wrongSelection, setWrongSelection] = useState(false);
  console.log(doneQuest);

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

  const handleRedirect = (pathname: string, state: any, nr: number) => {
    if (nr <= doneQuest + 1) {
      history.push({ pathname, state });
    } else {
      setWrongSelection(true);
    }
  };

  const handleRedo = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/updateNumberOfDoneQuest`,
        null,
        {
          params: {
            username: username,
            newNumberOfDoneQuest: 0,
          },
        }
      );
      console.log("Response:", response.data);
      // Reîncarcăm pagina
      window.location.reload();
    } catch (error) {
      console.error("Error updating score:", error);
    }
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <img
        style={{
          height: "99vh",
          width: "100vw",
        }}
        src={profileImage}
        alt="Binary"
      />
      <Button
        style={{
          position: "absolute",
          height: "12vh",
          width: "10wh",
          top: "6%",
          backgroundColor: "transparent",
          left: "97%",
          transform: "translate(-50%, -50%)",
          zIndex: 1, // Asigură că butonul este afișat peste imagine
        }}
        onClick={() => handleRedirect("/profile", { username: username }, 0)}
      >
        <img
          style={{ height: "8vh", width: "6wh" }}
          src={exitImage}
          alt="Binary"
        />
      </Button>

      <Button
        style={{
          position: "absolute",
          height: "12vh",
          width: "10wh",
          top: "15%",
          backgroundColor: "transparent",
          left: "97%",
          transform: "translate(-50%, -50%)",
          zIndex: 1, // Asigură că butonul este afișat peste imagine
        }}
        onClick={() => handleRedo()}
      >
        <img
          style={{ height: "8vh", width: "6wh" }}
          src={redoImage}
          alt="Binary"
        />
      </Button>

      <img
        style={{
          height: "70px",
          position: "absolute",
          top: "90%",
          backgroundColor: "transparent",
          left: "75%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
        src={doneQuest < 5 || doneQuest > 5 ? unopendChestImage : chestImage}
        alt="Binary"
        onClick={() =>
          handleRedirect("/main-quest", { username: username, number: 6 }, 6)
        }
      />
      <Button
        className="quest"
        style={{
          top: "6%",
          left: "58%",
          backgroundColor:
            doneQuest >= 1
              ? "rgb(33, 99, 125)"
              : doneQuest === 0
              ? "rgba(15,177,198)"
              : "rgba(157, 138, 115)",
          boxShadow:
            doneQuest === 0
              ? "0 3px 5px rgba(45, 108, 181, 1)" // Galben cu opacitate 50%
              : "0 2px 4px rgba(0, 0, 0, 0.0)",
        }}
        onClick={() =>
          handleRedirect(
            "/main-quest",
            { username: username, number: 1, doneQuest: doneQuest },
            1
          )
        }
      ></Button>

      <Button
        className="quest"
        style={{
          top: "23%",
          left: "22%",
          backgroundColor:
            doneQuest >= 2
              ? "rgb(33, 99, 125)"
              : doneQuest === 1
              ? "rgba(15,177,198)"
              : "rgba(157, 138, 115)",
          boxShadow:
            doneQuest === 1
              ? "0 3px 5px rgba(45, 108, 181, 1)" // Galben cu opacitate 50%
              : "0 2px 4px rgba(0, 0, 0, 0.0)",
        }}
        onClick={() =>
          handleRedirect(
            "/main-quest",
            { username: username, number: 2, doneQuest: doneQuest },
            2
          )
        }
      ></Button>

      <Button
        className="quest"
        style={{
          top: "57%",
          left: "11.1%",
          backgroundColor:
            doneQuest >= 3
              ? "rgb(33, 99, 125)"
              : doneQuest === 2
              ? "rgba(15,177,198)"
              : "rgba(157, 138, 115)",
          boxShadow:
            doneQuest === 2
              ? "0 3px 5px rgba(45, 108, 181, 1)" // Galben cu opacitate 50%
              : "0 2px 4px rgba(0, 0, 0, 0.0)", // Fără umbră
        }}
        onClick={() =>
          handleRedirect(
            "/main-quest",
            { username: username, number: 3, doneQuest: doneQuest },
            3
          )
        }
      ></Button>

      <Button
        className="quest"
        style={{
          top: "56.4%",
          left: "48.5%",
          backgroundColor:
            doneQuest >= 4
              ? "rgb(33, 99, 125)"
              : doneQuest === 3
              ? "rgba(15,177,198)"
              : "rgba(157, 138, 115)",
          boxShadow:
            doneQuest === 3
              ? "0 3px 5px rgba(45, 108, 181, 1)" // Galben cu opacitate 50%
              : "0 2px 4px rgba(0, 0, 0, 0.0)",
        }}
        onClick={() =>
          handleRedirect(
            "/main-quest",
            { username: username, number: 4, doneQuest: doneQuest },
            4
          )
        }
      ></Button>

      <Button
        className="quest"
        style={{
          top: "82%",
          left: "51%",
          backgroundColor:
            doneQuest >= 5
              ? "rgb(33, 99, 125)"
              : doneQuest === 4
              ? "rgba(15,177,198)"
              : "rgba(157, 138, 115)",
          boxShadow:
            doneQuest === 4
              ? "0 3px 5px rgba(45, 108, 181, 1)" // Galben cu opacitate 50%
              : "0 2px 4px rgba(0, 0, 0, 0.0)",
        }}
        onClick={() =>
          handleRedirect(
            "/main-quest",
            { username: username, number: 5, doneQuest: doneQuest },
            5
          )
        }
      ></Button>

      {visible ? (
        <div
          className="quest-div"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <b>
            Bine ai venit în Ținutul Biților! Poți alege să faci unul dintre
            quest-urile disponibile. La final te așteaptă o comoară
            surprinzătoare!
          </b>
          {doneQuest == 5 ? (
            <div>
              <b>
                Poți încerca să obții comoara noastră acum, trebuie să sapi
                destul de adânc în cunoștiințe pentru a o obține{" "}
              </b>
            </div>
          ) : null}
          <img
            style={{ height: "25px", marginLeft: "2%", marginTop: "1%" }}
            alt="Binary"
            src={smileImage}
          />
          <br />
          <br />
          <Button onClick={() => setVisible(false)}>Am înțeles</Button>
        </div>
      ) : null}

      {wrongSelection ? (
        <div
          className="quest-div"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <b>
            Din păcate acest quest nu îți este încă disponibil.
            <br></br>
            Trebuie să rezolvi quest-urile anterioare acestuia mai întâi. Mult
            succes!
          </b>
          <img
            style={{ height: "25px", marginLeft: "2%", marginTop: "1%" }}
            alt="Binary"
            src={smileImage}
          />
          <br />

          <Button onClick={() => setWrongSelection(false)}>Am înțeles</Button>
        </div>
      ) : null}
    </div>
  );
};

export default Map;
