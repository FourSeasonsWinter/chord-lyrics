"use client";

import { useRouter } from "next/navigation";
import styles from "./SongListItem.module.css";

export default function SongListItem({ song }) {
  const router = useRouter();
  const { id, title, artist } = song;

  function handleRedirect(songId) {
    router.push(`/songs/${songId}`);
  }

  return (
    <div className={styles.listItem} onClick={() => handleRedirect(id)}>
      <span>{title}</span>
      <span>{artist}</span>
    </div>
  );
}
