"use client";

import styles from "./css/Fretboard.module.css";
import { getScale } from "@/lib/scales";

export default function Fretboard({ notes }) {
  const scale = getScale("C", "major")

  return (
    <main className={styles.page}>
        <div className={styles.fretboard}>
        {notes.map((note, index) => {
          return (
            <div key={index} className={styles.note} onClick={() => console.log(note.name[0])}>
              {note.name[0]}
            </div>
          );
        })}
      </div>
    </main>
  );
}
