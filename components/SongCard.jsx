import styles from "./css/SongCard.module.css";

export default function SongCard({ title, artist }) {
  return (
    <div className={styles.card}>
      <strong>{title}</strong>
      <span>{artist}</span>
    </div>
  );
}
