import Fretboard from "@/components/Fretboard";
import styles from "./page.module.css";
import { getNotes } from "@/lib/notes";

export default function Home() {
  const notes = getNotes();

  return (
    <>
      <h1 className={styles.title}>Fretboard</h1>
      <Fretboard notes={notes} />
    </>
  );
}
