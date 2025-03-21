import SongCard from "./SongCard";
import styles from "./css/SongsCarousel.module.css";

export default function SongsCarousel({ songs }) {
  return (
    <ol className={styles.carousel}>
      {songs.map((song) => {
        return (
          <li key={song.id}>
            <SongCard song={song} />
          </li>
        );
      })}
    </ol>
  );
}
