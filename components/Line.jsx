
import { roboto } from "@/app/fonts";
import styles from "./css/Line.module.css";
import { useState } from "react";

export default function Line({ editmode }) {
  const [chords, setChords] = useState("");
  const [lyrics, setLyrics] = useState("");

  return (
    <div className={`${styles.line} ${editmode && styles.editmode} ${roboto.className}`}>
      {editmode ? (
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
      ) : (
        <pre className={`${styles.chords} ${roboto.className}`}>{chords}</pre>
      )}
      {editmode ? (
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
      ) : (
        <pre className={roboto.className}>{lyrics}</pre>
      )}
    </div>
  );
}
