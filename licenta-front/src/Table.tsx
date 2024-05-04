// YourTableComponent.tsx
import React from "react";
import "./Table.css"; // Import your custom CSS file

interface Person {
  category: string;
  score: number;
}

interface Table {
  data: Person[];
}

const Table: React.FC<Table> = ({ data }) => {
  const chunkedData = [];
  for (let i = 0; i < data.length; i += 3) {
    chunkedData.push(data.slice(i, i + 3));
  }

  return (
    <div>
      <h3>Testele tale recente</h3>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" className="ps-4 pe-4">
                Categorie
              </th>
              <th scope="col" className="ps-4 pe-4">
                Scor
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .slice() // Facem o copie a array-ului pentru a nu modifica array-ul original
              .sort((a, b) => b.score - a.score) // Sortăm descrescător după scor
              .map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.category}</td>
                  <td>{item.score}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
