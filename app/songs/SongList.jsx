"use client";

import { useEffect, useState } from "react";
import styles from "./css/SongList.module.css";
import { useRouter } from "next/navigation";

export default function SongList({ search = "" }) {
  const [songs, setSongs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchSongs() {
      const result = await fetch("http://localhost:8080/song");
      const json = await result.json();

      if (search.trim() != "") {
        // filter songs
      }

      setSongs(json);
    }

    fetchSongs();
  });

  function handleRedirect(songId) {
    router.push(`/songs/${songId}`);
  }

  return (
    <ol className={styles.list}>
      {songs.map((song) => {
        return (
          <li
            key={song.id}
            onClick={() => {
              handleRedirect(song.id);
            }}
          >
            {song.title}
          </li>
        );
      })}
    </ol>
  );
}
