'use client'

import { useEffect, useState } from 'react'
import LineWrite from './LineWrite'
import styles from './SongForm.module.css'
import Image from 'next/image'
import { montserrat } from '@/app/fonts'

export default function SongForm({ onSongSubmit, songToEdit = undefined, pageTitle = '' }) {
  const [lines, setLines] = useState([])
  const [details, setDetails] = useState({
    title: '',
    artist: '',
  })

  useEffect(() => {
    if (songToEdit) {
      setDetails({
        title: songToEdit.details.title,
        artist: songToEdit.details.artist,
      })

      if (songToEdit.lines.length === 0) {
        setLines([{ chords: '', lyrics: '' }])
        return
      }

      let newLines = []
      for (const line of songToEdit.lines) {
        newLines.push({
          chords: line.chords_text,
          lyrics: line.lyric_text,
        })
      }

      setLines(newLines)
    } else {
      setLines([{ chords: '', lyrics: '' }])
    }
  }, [])

  function addLine() {
    const lastLine = lines[lines.length - 1]

    if (lastLine.chords === '' && lastLine.lyrics === '') return

    setLines([...lines, { chords: '', lyrics: '' }])
  }

  function handleDetailsChange(event) {
    const { name, value } = event.target
    setDetails({ ...details, [name]: value })
  }

  function handleChordsChange(index, value) {
    const updatedLines = [...lines]
    updatedLines[index].chords = value
    setLines(updatedLines)
  }

  function handleLyricsChange(index, value) {
    const updatedLines = [...lines]
    updatedLines[index].lyrics = value
    setLines(updatedLines)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    onSongSubmit(details, lines)
  }

  return (
    <>
      <h1 className={styles.pageTitle}>{pageTitle}</h1>
      <form onSubmit={(event) => handleSubmit(event)} className={styles.page}>
        <div className={styles.songDetails}>
          <label htmlFor="title">song title</label>
          <input
            type='text'
            name='title'
            value={details.title}
            onChange={handleDetailsChange}
            className={`${styles.songTitle} ${montserrat.className}`}
            required
          />
          <label htmlFor="artist">artist</label>
          <input
            type='text'
            name='artist'
            value={details.artist}
            onChange={handleDetailsChange}
            className={`${styles.artist} ${montserrat.className}`}
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
          )
        })}

        <div className={styles.addButton}>
          <button type='button' onClick={addLine}>
            new line
          </button>
        </div>

        <button type='submit' className={styles.saveButton}>
          <Image src='/check.png' alt='Done' width={24} height={24} />
        </button>
      </form>
    </>
  )
}
