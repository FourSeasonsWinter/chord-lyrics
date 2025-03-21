"use client";

import { roboto } from "@/app/fonts";
import styles from "../Line.module.css";

export default function LineWrite({
  chordsInput,
  onChordsChange,
  lyricsInput,
  onLyricsChange,
  index
}) {
  return (
    <div className={`${styles.line} ${styles.editmode} ${roboto.className}`}>
      <input
        type="text"
        value={chordsInput}
        onChange={(event) => onChordsChange(index, event.target.value)}
        className={`${styles.chords} ${roboto.className}`}
        spellCheck={false}
        placeholder="Chords..."
      />
      <input
        type="text"
        value={lyricsInput}
        onChange={event => onLyricsChange(index, event.target.value)}
        className={roboto.className}
        spellCheck={false}
        placeholder="Lyrics..."
      />
    </div>
  );
}
