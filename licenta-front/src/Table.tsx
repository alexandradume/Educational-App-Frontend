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
  return (
    <div>
      <h3>Your recent tests</h3>
      <table className="custom-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="ps-4 pe-4">
              Category
            </th>
            <th scope="col" className="ps-4 pe-4">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.category}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
