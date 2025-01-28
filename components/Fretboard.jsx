"use client";

import styles from "./css/Fretboard.module.css";
import { getScale } from "@/lib/scales";

export default function Fretboard({ notes }) {
  const scale = getScale("C", "major");
  const names = scale.map((note) => note.name[0]);

  return (
    <main className={styles.page}>
      <div className={styles.fretboard}>
        {notes.map((note, index) => {
          const name = note.name[0];
          const inScale = names.find((n) => n === name);

          return (
            <div
              key={index}
              className={
                inScale
                  ? `${styles.note}`
                  : `${styles.note} ${styles.fadednote}`
              }
              onClick={() => console.log(name)}
            >
              {name}
            </div>
          );
        })}
      </div>
    </main>
  );
}
