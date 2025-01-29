import styles from "./styles.module.css"

export default function Layout({ children }) {
  return (
    <main>
      <h1 className={styles.title}>Fretboard</h1>
      {children}
    </main>
  );
}
