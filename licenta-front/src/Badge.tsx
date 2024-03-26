import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

interface Props {
  username: string;
  level: string;
}

const Badge: React.FC<Props> = ({ username, level }) => {
  const history = useHistory();
  console.log(level);
  const [denumire, setDenumire] = useState("");

  useEffect(() => {
    switch (true) {
      case level == "White":
        setDenumire("Centura Albă în C++");
        break;
      case level == "Yellow":
        setDenumire("Centura Galbenă în C++");
        break;
      case level == "Orange":
        setDenumire("Centura Portocalie în C++");
        break;
      case level == "Green":
        setDenumire("Centura Verde în C++");
        break;
      case level == "blue":
        setDenumire("Centura Albastră în C++");
        break;
      case level == "Brown":
        setDenumire("Centura Maro în C++");
        break;
      case level == "Red":
        setDenumire("Centura Roșie în C++");
        break;
      case level == "Black":
        setDenumire("Centura Neagră în C++");
        break;
      default:
        // handle any other case
        break;
    }
  }, [level]);

  const imageURL = "./src/assets/" + level + ".jpg";
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <p
        style={{
          marginLeft: "250px",
          marginTop: "10px",
          fontSize: "18px",
        }}
      >
        <b>Nivelul tău este: {denumire}</b>
      </p>
      <img
        style={{
          height: "100px",
          width: "100px",
          marginLeft: "250px",
          marginTop: "10px",
          borderRadius: "35%", // Aici setăm un border-radius de 50% pentru a face imaginea rotundă
        }}
        src={imageURL}
        alt="Binary"
      />
    </div>
  );
};

export default Badge;
