"use client";

import { useRouter } from "next/navigation";
import styles from "./css/SongCard.module.css";

export default function SongCard({ song }) {
  const router = useRouter();
  const { id, title, artist } = song;

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
