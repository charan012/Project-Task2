import React from 'react';
import './List.css'; 

const ListRenderer = ({ names = ["Charan", "Krishna", "Vijaya", "Venkat", "Shivaji"] }) => (
  <div className="list-container">
    <h2>List of Names</h2>
    <ul className="name-list">
      {names.map((name, index) => (
        <li key={index} className="name-item">{name}</li>
      ))}
    </ul>
  </div>
);

export default ListRenderer;
