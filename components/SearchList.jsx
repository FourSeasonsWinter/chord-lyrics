"use client";

import { useState } from "react";
import { getScaleNames } from "@/lib/scales";
import styles from "./css/SearchList.module.css";

export default function SearchList({ onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const data = getScaleNames();

  function handleInputChange(event) {
    const value = event.target.value;

    if (value === "") {
      setResults([]);
      setQuery(value);
      return;
    }

    const filteredResults = [];
    let count = 0;

    data.forEach((element) => {
      if (count < 5 && element.toLowerCase().startsWith(value.toLowerCase())) {
        filteredResults.push(element);
        count += 1;
      }
    });

    setQuery(value);
    setResults(filteredResults);
  }

  function handleItemClick(item) {
    setQuery(item);
    setResults([]);
    onSelect(item);
  }

  return (
    <div className={`${styles.searchlist}`}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Scale..."
      />
      <ul>
        {results.map((item, index) => {
          return (
            <li key={index} onClick={() => handleItemClick(item)}>
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
