"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./css/PopularSongs.module.css";
import SongCard from "./SongCard";

export default function PopularSongs() {
  const router = useRouter();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchSongs() {
      const result = await fetch("http://localhost:8080/song");
      const json = await result.json();

      setSongs(json.slice(0, 6));
    }

    fetchSongs();
  }, []);

  function handleRedirect(songId) {
    router.push(`/songs/${songId}`);
  }

  return (
    <>
      <h3 className={styles.heading}>Popular songs</h3>
      <ol className={styles.songs}>
        {songs.map((song) => {
          return (
            <li
              key={song.id}
              onClick={() => {
                handleRedirect(song.id);
              }}
            >
              <SongCard title={song.title} artist={song.artist} />
            </li>
          );
        })}
      </ol>
    </>
  );
}
