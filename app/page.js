import Fretboard from "@/components/Fretboard";
import styles from "./page.module.css";
import { getFretboardNotes } from "@/lib/notes";
import SearchList from "@/components/SearchList";

export default function Home() {
  const notes = getFretboardNotes();

  return (
    <>
      <h1 className={styles.title}>Fretboard</h1>
      <SearchList />
      <Fretboard notes={notes} />
    </>
  );
}
