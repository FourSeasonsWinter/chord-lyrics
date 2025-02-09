import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Home</h1>
      <Link href="/songs">Songs</Link>
    </>
  );
}
