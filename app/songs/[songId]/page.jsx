import { auth } from '@/auth'
import LineRead from './LineRead'
import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function Page({ params }) {
  const songId = (await params).songId

  const [songRes, lyricsRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SONGS_URL}/${songId}`),
    fetch(`${process.env.NEXT_PUBLIC_LYRICS_URL}/${songId}`),
  ])

  if (songRes.status === 404)
    return (
      <div className={styles.notFound}>
        <h2>song not found</h2>
        <Link href="/songs">back to song list</Link>
      </div>
    )

  const lines = await lyricsRes.json()
  const song = await songRes.json()

  let canEdit = false
  const session = await auth()
  if (session && session.id === song.user_id) canEdit = true

  const userRes = await fetch(
    `${process.env.NEXT_PUBLIC_USERS_URL}/${song.user_id}`
  )
  const user = await userRes.json()

  return (
    <div className={styles.page}>
      <div className={styles.songInfo}>
        <h1>{song.title}</h1>
        <h2>{song.artist}</h2>
        <div>
          <span className={styles.usernameLabel}>chord lyrics by</span>
          <span className={styles.username}> {user.name}</span>
        </div>
      </div>
      <div className={styles.divisor} />
      <div className={styles.lines}>
        {lines.map((line, index) => {
          return (
            <LineRead
              key={index}
              chords={line.chords_text}
              lyrics={line.lyric_text}
            />
          )
        })}
      </div>
      {canEdit && (
        <button
          className={styles.editButton}
          onClick={async () => {
            'use server'
            redirect(`/songs/writing/${songId}`)
          }}
        >
          <Image src="/edit.png" alt="edit" width={24} height={24} />
        </button>
      )}
    </div>
  )
}
