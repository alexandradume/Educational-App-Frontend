import React, { useState, useEffect } from "react";
import "./Tab.css";
import axios from "axios";
import "./Podium.css";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import NavBar from "./NavBar";

interface LocationState {
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

const Podium: React.FC = () => {
  const data = [
    { label: "January", sales: 21, leads: 41 },
    { label: "February", sales: 35, leads: 79 },
    { label: "March", sales: 75, leads: 57 },
    { label: "April", sales: 51, leads: 47 },
    { label: "May", sales: 41, leads: 63 },
    { label: "June", sales: 47, leads: 71 },
  ];
  const [activeTab, setActiveTab] = useState("scor");
  const [users, setUsers] = useState<UserData[]>([]);
  const [users1, setUsers1] = useState<UserData[]>([]);
  const podiumImage = "./src/assets/rating.png";
  const location = useLocation<LocationState>();
  const { username } = location.state;

  useEffect(() => {
    const fetchUsersByScore = async () => {
      try {
        const response = await axios.get<UserData[]>(
          `http://localhost:8080/api/users/findByScore`
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users by score:", error);
      }
    };

    const fetchUsersByMoney = async () => {
      try {
        const response = await axios.get<UserData[]>(
          `http://localhost:8080/api/users/findByMoney`
        );
        setUsers1(response.data);
      } catch (error) {
        console.error("Error fetching users by money:", error);
      }
    };

    fetchUsersByScore();

    fetchUsersByMoney();
  }, []);

  console.log(users);
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column", // Afișează elementele într-o singură coloană

        fontSize: "20px",
      }}
    >
      <NavBar username={username}></NavBar>

      <h1 style={{ paddingLeft: "25px" }}>Podium</h1>
      <br></br>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === "scor" && "active"}`}
          onClick={() => handleTabClick("scor")}
        >
          Podium după scor
        </div>
        <div
          className={`tab ${activeTab === "bani" && "active"}`}
          onClick={() => handleTabClick("bani")}
        >
          Podium după bani
        </div>
      </div>

      <div className="table-containeer">
        <br></br>
        {activeTab === "scor" ? (
          <table className="custom-tablee">
            <thead>
              <tr>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="custom-tablee">
            <thead>
              <tr>
                <th>Username</th>
                <th>Money</th>
              </tr>
            </thead>
            <tbody>
              {users1.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.money}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <img
        className="img-top-right"
        style={{ height: "90px", padding: "20px" }}
        src={podiumImage}
        alt="Binary"
      />
    </div>
  );
};

export default Podium;
