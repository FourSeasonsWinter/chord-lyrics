"use client";

import { useRouter } from "next/navigation";
import styles from "./SongListItem.module.css";

export default function SongListItem({ song }) {
  const router = useRouter();

  function handleRedirect(songId) {
    router.push(`/songs/${songId}`);
  }

  return (
    <div className={styles.listItem} onClick={() => handleRedirect(song.id)}>
      <span>{song.title}</span>
      <span>{song.artist}</span>
    </div>
  );
}
