import LineRead from "./LineRead";
import styles from "./styles.module.css";
import Link from "next/link";

export default async function Page({ params }) {
  const songId = (await params).songId;
  const result = await fetch(`${process.env.NEXT_PUBLIC_SONGS_URL}/${songId}`);

  if (result.status === 404)
    return (
      <div className={styles.notFound}>
        <h2>song not found</h2>
        <Link href="/songs">back to song list</Link>
      </div>
    );
  
  const lyricsRes = await fetch(`${process.env.NEXT_PUBLIC_LYRICS_URL}/${songId}`)

  const lines = await lyricsRes.json();
  const song = await result.json();
  const { title, artist } = song;

  return (
    <div className={styles.page}>
      <div className={styles.songInfo}>
        <div>
          <h1>{title}</h1>
          <h2>{artist}</h2>
        </div>
      </div>
      <hr />
      <div className={styles.lines}>
        {lines.map((line, index) => {
          return (
            <LineRead key={index} chords={line.chords_text} lyrics={line.lyric_text} />
          );
        })}
      </div>
    </div>
  );
}
