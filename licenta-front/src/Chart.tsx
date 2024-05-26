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
import "./Chart.css";
import { Form, FormControl, Button } from "react-bootstrap";

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
  const [score, setScore] = useState(0);
  const [scores, setScores] = useState([]);
  const magicImage = "./src/assets/magic-ball.png";
  const sparckImage = "./src/assets/magic.png";
  const risingImage = "./src/assets/rising.png";
  const [visible, setVisible] = useState<boolean>(false);
  const [prediction, setPrediction] = useState(0);

  const handleClick = () => {
    setVisible(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/users/prediction/${username}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setPrediction(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [username]);

  console.log("PREDICTIOOOOOOOOOOOOOOOOOOON", prediction);

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
        setScore(data.score);
        setScores(data.scores);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [username]);

  // Transformați d{atele din câmpul scores într-un array de obiecte

  var chartData: { date: string; score: number }[] = [];

  if (userData && userData.scores) {
    chartData = Object.entries(userData.scores)
      .map(([date, score]) => ({ date, score }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Adaugarea scorului curent
    var currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();

    if (currentMonth < 9) {
      var datee = currentYear + "-" + "0" + currentMonth + "-" + currentDay;
    } else {
      var datee = currentYear + "-" + currentMonth + "-" + currentDay;
    }

    chartData.push({ date: datee, score: userData.score });
  }

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
              Mai jos găsești graficul corespunzător scorului tău de-a lungul
              timpului. Poți analiza și contoriza evoluția ta. Îți dorim succes
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
        {chartData != undefined && (
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
        )}
      </div>

      <img
        style={{
          position: "absolute",
          bottom: "2vh",
          right: 0,
          marginRight: "2vw",
          height: "13vh",
        }}
        onClick={handleClick}
        src={magicImage}
        alt="Binary"
      />

      {visible ? (
        <div className="prediction-div">
          {" "}
          <b>
            <img
              src={sparckImage}
              style={{
                position: "absolute",
                top: "2.5vh",
                left: 0,
                marginLeft: "1vw",
                height: "7vh",
              }}
              alt="Binary"
            />
            Prezicem că în curând poți ajunge la {prediction} dacă continui cu
            același spor.
          </b>
          <img
            style={{
              position: "absolute",
              bottom: "4vh",
              right: 0,
              marginRight: "2vw",
              height: "13vh",
            }}
            src={risingImage}
            alt="Binary"
          />
          <br></br>
          <br></br>
          <Button
            variant="primary"
            type="submit"
            onClick={() => setVisible(false)}
          >
            Super
          </Button>
        </div>
      ) : null}
    </div>
  );
}
