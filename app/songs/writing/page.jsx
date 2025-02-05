"use client";

import { useRef, useState } from "react";
import styles from "./styles.module.css";
import LineWrite from "@/components/LineWrite";
import Image from "next/image";

export default function Page() {
  const [lineAmount, setLineAmount] = useState([1]);

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [key, setKey] = useState("");
  const [tempo, setTempo] = useState("");

  async function handleSave() {
    if (!title || !artist) return;

    const res = await fetch("http://localhost:5000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, artist }),
    });

    const data = await res.json();
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <main className={styles.page}>
      <div className={styles.songInfo}>
        <input
          type="text"
          className={styles.songTitle}
          placeholder="Song title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className={styles.artist}
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <div className={styles.extraInfo}>
          <input
            type="text"
            placeholder="key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <input
            type="number"
            placeholder="tempo"
            value={tempo}
            onChange={(e) => setTempo(e.target.value)}
          />
        </div>
      </div>

      {lineAmount.map((count) => {
        return <LineWrite key={count} />;
      })}

      <button
        className={styles.addButton}
        onClick={() => setLineAmount([...lineAmount, lineAmount.length + 1])}
      >
        +
      </button>

      <button className={styles.saveButton} onClick={handleSave}>
        <Image src="/check.svg" alt="check" width={24} height={24} />
      </button>
    </main>
  );
}
