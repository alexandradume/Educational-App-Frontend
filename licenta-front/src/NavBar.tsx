import React, { useState, useEffect } from "react";
import ProfilePicture from "./ProfilePicture";
import Table from "./Table";
import { Form, FormControl, Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import "./NavBar.css";
import "./ProfilePicture.css";
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
}

const NavBar: React.FC<NavBarProps> = ({ username }) => {
  const history = useHistory();
  const profileImage = "./src/assets/profile.png";
  const lessonImage = "./src/assets/lesson.png";
  const testImage = "./src/assets/testn.png";
  const logOutImage = "./src/assets/log-out.png";
  const dollarImage = "./src/assets/dollar.png";
  const questImage = "./src/assets/quest.png";
  const podiumImage = "./src/assets/podium.png";
  const chartImage = "./src/assets/line-chart.png";

  const [userData, setUserData] = useState<UserData | null>(null);
  const [money, setMoney] = useState(0);
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
        setMoney(data.money);

        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [username]);

  const [windowFullyVisible, setWindowFullyVisible] = useState(true);

  useEffect(() => {
    // Funcție pentru verificarea dacă fereastra este afișată complet
    const handleWindowResize = () => {
      // Verifică dacă lățimea ferestrei este egală cu lățimea totală a documentului
      const fullyVisible = window.innerWidth === document.body.clientWidth;
      setWindowFullyVisible(fullyVisible);
    };

    // Adaugă un event listener pentru redimensionarea ferestrei
    window.addEventListener("resize", handleWindowResize);

    // Cleanup: elimină event listener-ul când componenta se demontează
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Function to handle redirection with state
  const handleRedirect = (pathname: string, state: any) => {
    history.push({ pathname, state });
  };

  const handleRedirect1 = (pathname: string) => {
    history.push({ pathname });
  };

  return (
    <div className="navbar variant2">
      <a onClick={() => handleRedirect("/profile", { username: username })}>
        <Tooltip text="Profil">
          <img
            style={{
              height: "50px",
              width: "50px",
              marginBottom: "0px",
            }}
            src={profileImage}
            alt="Binary"
          />
        </Tooltip>
      </a>

      <a onClick={() => handleRedirect("/tests", { username: username })}>
        <Tooltip text="Test">
          <img
            style={{
              height: "50px",
              width: "50px",
              marginBottom: "0px",
            }}
            src={testImage}
            alt="Binary"
          />
        </Tooltip>
      </a>
      <a onClick={() => handleRedirect("/lessons", { username: username })}>
        <Tooltip text="Lecții">
          <img
            style={{
              height: "50px",
              width: "50px",
              marginBottom: "0px",
            }}
            src={lessonImage}
            alt="Binary"
          />
        </Tooltip>
      </a>
      <a onClick={() => handleRedirect("/quest", { username: username })}>
        <Tooltip text="Quest">
          <img
            style={{
              height: "50px",
              width: "50px",
              marginBottom: "0px",
            }}
            src={questImage}
            alt="Binary"
          />
        </Tooltip>
      </a>
      <a
        onClick={() => handleRedirect("/podium", { username: username })}
        style={{ alignItems: "center" }}
      >
        <Tooltip text="Podium">
          <img
            style={{
              height: "50px",
              width: "50px",
              marginBottom: "0px",
              paddingRight: "10px", // Reduce paddingRight
            }}
            src={podiumImage}
            alt="Binary"
          />
        </Tooltip>
      </a>

      <a
        onClick={() => handleRedirect("/chart", { username: username })}
        style={{ alignItems: "center" }}
      >
        <Tooltip text="Grafic">
          <img
            style={{
              height: "50px",
              width: "50px",
              marginBottom: "0px",
              paddingRight: "10px", // Reduce paddingRight
            }}
            src={chartImage}
            alt="Binary"
          />
        </Tooltip>
      </a>
      <a>
        <Tooltip text="Bani">
          <img
            style={{
              height: "50px",
              width: "50px",
              marginBottom: "0px",
              paddingRight: "10px", // Reduce paddingRight
            }}
            src={dollarImage}
            alt="Binary"
          />
          <span
            style={{
              fontSize: "20px",
              paddingBottom: "10px",
              color: "rgba(166, 196, 231, 0.846)",
              marginTop: "-10px", // Mută textul în sus
              textAlign: "center", // Aliniază textul în mijloc
            }}
          >
            <b>{money}px</b>
          </span>
        </Tooltip>
      </a>

      <a
        style={{
          marginLeft: windowFullyVisible ? "40vw" : "auto",
        }} // Adăugăm margin-left: auto pentru a împinge butonul "Log Out" la marginea din dreapta
        onClick={() => handleRedirect1("/logIn")}
      >
        <Tooltip text="Log Out">
          <img
            style={{
              height: "50px",
              width: "50px",
              marginBottom: "0px",
            }}
            src={logOutImage}
            alt="Log Out"
          />
        </Tooltip>
      </a>
    </div>
  );
};

export default NavBar;
