import styles from "./SongList.module.css";
import SongListItem from "./SongListItem";

export default async function SongList({ search = "" }) {
  const result = await fetch("http://localhost:9090/songs");
  const songs = await result.json();

  if (search.trim() != "") {
    // filter songs
  }

  return (
    <ol className={styles.list}>
      {songs.map((song) => {
        return (
          <li key={song.id}>
            <SongListItem song={song} />
          </li>
        );
      })}
    </ol>
  );
}
