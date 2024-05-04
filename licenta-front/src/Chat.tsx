import React, { useState, useEffect } from "react";
import ProfilePicture from "./ProfilePicture";
import Table from "./Table";
import { Form, FormControl, Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import "./Chat.css";
import "./ProfilePicture.css";
import Tooltip from "./Tooltip";

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
  const [text, setText] = useState<string>("");
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setText(inputValue.trim());
      try {
        const messageData = {
          _id: "", // Generate a unique ID for each message
          username: username,
          text: inputValue.trim(),
          date: new Date().toISOString(),
        };

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

        // Update messages state
        setMesaje((prevMesaje) => [...prevMesaje, messageData]);
      } catch (error) {
        console.error("Error sending message:", error);
      }

      try {
        const response = await fetch(
          `http://localhost:8080/api/messages/ai?username=${username}&text=${inputValue.trim()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("aaaaaaaaaaa" + inputValue.trim());

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Message from AI:", data);
        setMesaje((prevMesaje) => [...prevMesaje, data]);
        return data;
      } catch (error) {
        console.error("Error fetching message from AI:", error);
        throw error;
      }
    }

    setInputValue(""); // Reset input after sending
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
        setMesaje(data); // Update mesaje state with data from the server
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
          <div>
            <div
              key={index}
              className={index % 2 === 0 ? "messageDivEven" : "messageDivOdd"}
            >
              {mesaj.text}
              <br></br>
              <span style={{ color: "black", fontSize: "12px" }}>
                <b>
                  {mesaj.date[11] +
                    mesaj.date[12] +
                    mesaj.date[13] +
                    mesaj.date[14] +
                    mesaj.date[15] +
                    " "}
                </b>
                {mesaj.date[0] +
                  mesaj.date[1] +
                  mesaj.date[2] +
                  mesaj.date[3] +
                  mesaj.date[4] +
                  mesaj.date[5] +
                  mesaj.date[6] +
                  mesaj.date[7] +
                  mesaj.date[8] +
                  mesaj.date[9]}
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
