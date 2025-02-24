import LineRead from "@/components/LineRead";
import styles from "./styles.module.css";

export default async function Page() {
  const res = await fetch("http://localhost:8080/song");
  const songs = await res.json();
  const song = songs[0]

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
