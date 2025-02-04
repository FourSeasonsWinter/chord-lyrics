"use client";

import { useRef, useState } from "react";
import styles from "./styles.module.css";
import LineWrite from "@/components/LineWrite";
import Image from "next/image";

export default function Page() {
  const [lineAmount, setLineAmount] = useState([1]);

  const title = useRef(null);
  const artist = useRef(null);
  const key = useRef(null);
  const tempo = useRef(null);

  function handleSave() {
    const song = {
      title: title.current.value,
      artist: artist.current.value,
      key: key.current.value,
      tempo: tempo.current.value
    }

    console.log(song)
  }

  return (
    <main className={styles.page}>
      <div className={styles.songInfo}>
        <input
          type="text"
          className={styles.songTitle}
          placeholder="Song title"
          ref={title}
        />
        <input
          type="text"
          className={styles.artist}
          placeholder="Artist"
          ref={artist}
        />
        <div className={styles.extraInfo}>
          <input type="text" placeholder="key" ref={key} />
          <input type="number" placeholder="tempo" ref={tempo} />
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
