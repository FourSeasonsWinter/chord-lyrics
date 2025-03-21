import styles from "./SongList.module.css";
import SongListItem from "./SongListItem";

export default async function SongList({ search }) {
  const result =
    search === undefined
      ? await fetch(process.env.NEXT_PUBLIC_SONGS_URL)
      : await fetch(`${process.env.NEXT_PUBLIC_SONGS_URL}/query/${search}`)

  const songs = await result.json();

  return (
    <>
      {search && <h3 className={styles.title}>Results</h3>}
      <ol className={styles.list}>
        {songs.map((song) => {
          return (
            <li key={song.id}>
              <SongListItem song={song} />
            </li>
          );
        })}
      </ol>
    </>
  );
}
