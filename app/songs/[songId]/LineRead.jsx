import styles from "../Line.module.css"
import { roboto } from "@/app/fonts"

export default function LineRead({ chords, lyrics }) {
  return (
    <div className={styles.line}>
      <pre className={`${styles.chords} ${roboto.className}`}>{chords}</pre>
      <pre className={roboto.className}>{lyrics}</pre>
    </div>
  )
}