"use client";

import { useState } from "react";
import LineWrite from "./LineWrite";
import styles from "./SongForm.module.css";

export default function SongForm({ onSongSubmit }) {
  const [lines, setLines] = useState([{ chords: "", lyrics: "", lineNumber: 1 }]);
  const [details, setDetails] = useState({
    title: "",
    artist: "",
  });

  let lineNumber = 1;

  function addLine() {
    lineNumber += 1;
    setLines([...lines, { chords: "", lyrics: "", lineNumber: lineNumber }]);
  }

  function handleDetailsChange(event) {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  }

  function handleChordsChange(index, value) {
    const updatedLines = [...lines];
    updatedLines[index].chords = value;
    setLines(updatedLines);
  }

  function handleLyricsChange(index, value) {
    const updatedLines = [...lines];
    updatedLines[index].lyrics = value;
    setLines(updatedLines);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    onSongSubmit(details, lines)
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)} className={styles.page}>
      <div className={styles.songDetails}>
        <input
          type="text"
          name="title"
          value={details.title}
          onChange={handleDetailsChange}
          className={styles.songTitle}
          placeholder="Song title"
          required
        />
        <input
          type="text"
          name="artist"
          value={details.artist}
          onChange={handleDetailsChange}
          className={styles.artist}
          placeholder="Artist"
          required
        />
      </div>

      {lines.map((line, index) => {
        return (
          <LineWrite
            key={index}
            index={index}
            chordsInput={line.chords}
            lyricsInput={line.lyrics}
            onChordsChange={handleChordsChange}
            onLyricsChange={handleLyricsChange}
          />
        );
      })}

      <button type="button" className={styles.addButton} onClick={addLine}>
        +
      </button>

      <button type="submit" className={styles.saveButton}>
        Done
      </button>
    </form>
  );
}
