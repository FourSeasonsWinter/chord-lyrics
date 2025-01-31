import LineRead from "@/components/LineRead";
import styles from "./styles.module.css"

export default function Page() {
  const lines = [
    {
      chords: "C                         F",
      lyrics: "Nothing's gonna change my love for you, you oughta"
    },
    {
      chords: "A",
      lyrics: "We're talking away"
    }
  ]

  return (
    <div className={styles.page}>
      <h1>Read</h1>
      {lines.map((line, index) => {
        return <LineRead key={index} chords={line.chords} lyrics={line.lyrics} />
      })}
    </div>
  );
}
