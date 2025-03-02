import LineRead from "@/components/LineRead";
import styles from "./styles.module.css";
import Link from "next/link";

export default async function Page({ params }) {
  const songId = (await params).songId;

  const result = await fetch(`http://localhost:8080/song/${songId}`);

  if (result.status === 404)
    return (
      <div className={styles.notFound}>
        <h2>song not found</h2>
        <Link href="/songs">back to song list</Link>
      </div>
    );

  const song = await result.json();

  const lines = [
    {
      chords: "C                         F",
      lyrics: "Nothing's gonna change my love for you, you oughta",
    },
    {
      chords: "A",
      lyrics: "We're talking away",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.songInfo}>
        <div>
          <h1>{song.title}</h1>
          <h2>{song.artist}</h2>
        </div>
        <div>
          <h5 dir="rtl">C Major</h5>
          <h5>120 bpm</h5>
        </div>
      </div>
      <hr />
      {lines.map((line, index) => {
        return (
          <LineRead key={index} chords={line.chords} lyrics={line.lyrics} />
        );
      })}
    </div>
  );
}
