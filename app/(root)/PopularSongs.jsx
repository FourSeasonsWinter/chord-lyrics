import styles from "./PopularSongs.module.css";
import SongCard from "@/app/components/SongCard";

export default async function PopularSongs() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_SONGS_URL}`, { next: { revalidate: 3600 }});
  if (!result.ok) throw new Error("failed to fetch songs");

  const songs = await result.json();

  return (
    <>
      <h3 className={styles.heading}>Popular songs</h3>
      <ol className={styles.songs}>
        {songs.map((song) => {
          return (
            <li key={song.id}>
              <SongCard id={song.id} title={song.title} artist={song.artist} />
            </li>
          );
        })}
      </ol>
    </>
  );
}
