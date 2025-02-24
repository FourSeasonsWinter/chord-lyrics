import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Home</h1>
      <div className={styles.links}>
        <Link href="/songs" className={styles.link}>Songs</Link>
        <Link href="/songs/writing" className={styles.link}>Writing</Link>
        <Link href="/songs/reading" className={styles.link}>Reading</Link>
      </div>
    </>
  );
}
