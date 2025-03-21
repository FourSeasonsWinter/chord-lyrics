import SongCard from "./SongCard"

export default function SongsCarousel({ songs }) {
  return (
    <div>
      {songs.map(song => {
        <SongCard song={song} />
      })}
    </div>
  )
}