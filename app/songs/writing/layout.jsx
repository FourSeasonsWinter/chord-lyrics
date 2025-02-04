import styles from "./styles.module.css";

export default function Layout({ children }) {
  return (
    <main>
      <h1 className={styles.title}>Edit mode</h1>
      {children}
    </main>
  );
}
