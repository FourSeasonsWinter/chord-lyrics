"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import Line from "@/components/Line";

export default function Page() {
  const [editMode, setEditMode] = useState(true);
  const [lineAmount, setLineAmout] = useState([1]);

  return (
    <main className={styles.page}>
      <button onClick={() => setEditMode(!editMode)}>change mode</button>
      {lineAmount.map((count) => {
        return <Line key={count} editmode={editMode} />;
      })}
      {editMode && (
        <button
          className={styles.addButton}
          onClick={() => setLineAmout([...lineAmount, lineAmount.length + 1])}
        >
          +
        </button>
      )}
    </main>
  );
}
