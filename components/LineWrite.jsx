import { roboto } from "@/app/fonts";
import styles from "./css/Line.module.css";
import { useState } from "react";

export default function LineWrite() {
  const [chords, setChords] = useState("");
  const [lyrics, setLyrics] = useState("");

  return (
    <div className={`${styles.line} ${styles.editmode} ${roboto.className}`}>
      <input
        className={`${styles.chords} ${roboto.className}`}
        type="text"
        placeholder="Chords..."
        spellCheck="false"
        value={chords}
        onChange={(event) => {
          setChords(event.target.value);
        }}
      />
      <input
        className={roboto.className}
        type="text"
        placeholder="Lyrics..."
        spellCheck="false"
        value={lyrics}
        onChange={(event) => {
          setLyrics(event.target.value);
        }}
      />
    </div>
  );
}
