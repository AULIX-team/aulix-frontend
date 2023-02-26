import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search" className="input-search"/>
      <select className="option-select">
        <option value="all">All category</option>
        <option value="all">All category</option>
        <option value="all">All category</option>
        <option value="all">All category</option>
      </select>
      <button className="btn-search">Search</button>
    </div>
  );
}
