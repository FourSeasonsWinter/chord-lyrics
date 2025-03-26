import styles from './PopularSongs.module.css'
import SongCard from '@/components/SongCard'

export default async function PopularSongs() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_SONGS_URL}`, {
    next: { revalidate: 3600 },
  })
  if (!result.ok) throw new Error('failed to fetch songs')

  const songs = await result.json()

  return (
    <ol className={styles.songs}>
      {songs.map((song) => {
        return (
          <li key={song.id}>
            <SongCard song={song} />
          </li>
        )
      })}
    </ol>
  )
}
