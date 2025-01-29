import { getFretboardNotes } from "@/lib/notes";
import styles from "./css/Fretboard.module.css";

export default function Fretboard({ scale }) {
  const notes = getFretboardNotes();
  const names = scale.map((note) => note.name[0]);

  return (
    <main className={styles.page}>
      <div className={styles.fretboard}>
        {notes.map((note, index) => {
          const name = note.name[0];
          let inScale = names.find((n) => n === name);

          if (scale.length === 0) inScale = true;

          return (
            <div
              key={index}
              className={
                inScale
                  ? `${styles.note}`
                  : `${styles.note} ${styles.fadednote}`
              }
            >
              {name}
            </div>
          );
        })}
      </div>
    </main>
  );
}
