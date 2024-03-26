import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import NavBar from "./NavBar";

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
    [date: string]: number;
  };
}

interface LocationState {
  username: string;
}

export default function Chart() {
  const location = useLocation<LocationState>();
  const { username } = location.state;
  const [userData, setUserData] = useState<UserData | null>(null);
  const smileImage = "./src/assets/smile.png";

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
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [username]);

  // Transformați datele din câmpul scores într-un array de obiecte
  const chartData = userData
    ? Object.entries(userData.scores).map(([date, score]) => ({
        date,
        score,
      }))
    : [];

  var currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  var datee = currentDay + "." + currentMonth + "." + currentYear;
  //chartData.push({ date: datee, score: userData!.score });

  return (
    <div>
      <NavBar username={username}></NavBar>
      <div
        style={{
          width: "80%",
        }}
        className="row"
      >
        <div className="col-md-12">
          <h2
            style={{
              paddingLeft: "20px",
            }}
          >
            Graficul evoluției tale
          </h2>
          <div
            style={{
              width: "160vh",
              marginLeft: "12%",
              padding: "0.3%",
              boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: "20px" }}>
              Mai jos găsești graficul corespunzător scorului tău de-alungul
              timpului. Poți analiza și contoriza evoluția ta. Îți dormi succes
              în procesul de învățare
              <img
                style={{ height: "25px", marginLeft: "2%", marginTop: "1%" }}
                src={smileImage}
                alt="Binary"
              />
            </p>
          </div>
          <br></br>
        </div>

        <div className="section col-md-6">
          <div
            className="section-content"
            style={{
              display: "flex",
              marginLeft: "23%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={chartData}
                margin={{ top: 15, right: 0, bottom: 15, left: 0 }}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid stroke="#ccc" strokeDasharray="10 10" />
                <Tooltip />
                <Line
                  type="natural"
                  dataKey="score"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
