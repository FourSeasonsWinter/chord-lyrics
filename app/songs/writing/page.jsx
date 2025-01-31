"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import LineWrite from "@/components/LineWrite";

export default function Page() {
  const [lineAmount, setLineAmout] = useState([1]);

  return (
    <main className={styles.page}>
      <h1>Edit mode</h1>
      {lineAmount.map((count) => {
        return <LineWrite key={count} />;
      })}
      <button
        onClick={() => setLineAmout([...lineAmount, lineAmount.length + 1])}
      >
        +
      </button>
    </main>
  );
}
