import { auth } from '@/auth'
import SongForm from '../SongForm'
import { redirect } from 'next/navigation'
import { updateSong } from '@/lib/utils'

export default async function Page({ params }) {
  const songId = (await params).id
  const session = await auth()
  if (!session) redirect('/')

  const [songRes, lyricsRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SONGS_URL}/${songId}`),
    fetch(`${process.env.NEXT_PUBLIC_LYRICS_URL}/${songId}`),
  ])

  const song = await songRes.json()
  const lyrics = await lyricsRes.json()

  if (song.user_id != session.id) redirect('/')

  return (
    <>
      <h1 style={{ padding: 0.6 + 'rem', opacity: 0.3 }}>Edit mode</h1>
      <SongForm
        onSongSubmit={async (details, lines) => {
          'use server'
          await updateSong(details, lines, songId)
          redirect(`/songs/${songId}`)
        }}
        songToEdit={{ details: song, lines: lyrics }}
      />
    </>
  )
}
