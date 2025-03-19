"use client";

import { useRouter } from "next/navigation";
import styles from "./css/SongCard.module.css";

export default function SongCard({ id, title, artist }) {
  const router = useRouter();

  function handleRedirect(songId) {
    router.push(`/songs/${songId}`);
  }

  return (
    <div className={styles.card} onClick={() => handleRedirect(id)}>
      <strong>{title}</strong>
      <span>{artist}</span>
    </div>
  );
}
