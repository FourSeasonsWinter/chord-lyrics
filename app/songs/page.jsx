import SongList from "@/components/SongList";
import styles from "./styles.module.css"

export default function Page() {
  return (
    <div className={styles.songs}>
      <h1>Songs</h1>
      <SongList />
    </div>
  )
}
