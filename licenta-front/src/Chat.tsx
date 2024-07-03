import React, { useState, useEffect } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./Chat.css";

interface NavBarProps {
  username: string;
}

interface Message {
  _id: string;
  username: string;
  text: string;
  date: string;
}

const Chat: React.FC<NavBarProps> = ({ username }) => {
  const [mesaje, setMesaje] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // getMonth() returns month from 0 to 11
      const day = String(now.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      const formattedTime = now.toLocaleTimeString("ro-RO", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Bucharest",
      });

      const messageData = {
        _id: "", // Generează un ID unic pentru fiecare mesaj
        username: username,
        text: inputValue.trim(),
        date: `${formattedDate} ${formattedTime}`,
      };

      try {
        const response = await fetch(`http://localhost:8080/api/messages/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messageData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        setMesaje((prevMesaje) => [...prevMesaje, messageData]);

        const aiResponse = await fetch(
          `http://localhost:8080/api/messages/ai?username=${username}&text=${inputValue.trim()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!aiResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const aiData = await aiResponse.json();
        setMesaje((prevMesaje) => [...prevMesaje, aiData]);
      } catch (error) {
        console.error("Error sending message:", error);
      }

      setInputValue(""); // Resetează inputul după trimitere
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/messages?username=${username}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMesaje(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div style={{ marginLeft: "-30px" }} className="chat-container">
      <h4 style={{ paddingLeft: "10px", fontSize: "15px" }}>ChatBot</h4>
      <div className="chat-messages">
        {mesaje.map((mesaj, index) => (
          <div key={index}>
            <div
              className={index % 2 === 0 ? "messageDivEven" : "messageDivOdd"}
            >
              {mesaj.text}
              <br />
              <span style={{ color: "black", fontSize: "12px" }}>
                <b>{mesaj.date.slice(11, 16) + " "}</b>
                {mesaj.date.slice(0, 10)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Scrie un mesaj"
          value={inputValue}
          style={{
            backgroundColor: "#333ed744",
            color: "black",
          }}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">
          <img
            style={{ height: "25px", marginLeft: "2%", marginTop: "1%" }}
            src="./src/assets/communication.png"
            alt="Binary"
          />
        </button>
      </form>
    </div>
  );
};

export default Chat;
