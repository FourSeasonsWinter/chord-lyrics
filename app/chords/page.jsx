import Chord from "@/components/Chord"
import styles from "./style.module.css"

export default function Page() {
  const CMajor = {
    name: 'C Major',
    frets: [-1, 3, 2, 0, 1, 0],
    barres: []
  }

  const FMajor = {
    name: 'F Major',
    frets: [1, 3, 3, 2, 1, 1],
    barres: [{ fret: 1, fromString: 1, toString: 6 }]
  }

  return (
    <main className={styles.page}>
      <div className={styles.diagram}>
        <Chord
          name={CMajor.name}
          frets={CMajor.frets}
          barres={CMajor.barres}
        />
      </div>
      <div className={styles.diagram}>
        <Chord
          name={FMajor.name}
          frets={FMajor.frets}
          barres={FMajor.barres}
        />
      </div>
      <div className={styles.diagram}>
        <Chord
          name={CMajor.name}
          frets={CMajor.frets}
          barres={CMajor.barres}
        />
      </div>
    </main>
  )
}