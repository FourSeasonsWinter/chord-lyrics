import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import SongForm from './SongForm'
import { saveSong } from '@/lib/utils'

export default async function Page() {
  const session = await auth()
  if (!session) redirect('/')

  return (
    <SongForm
      onSongSubmit={async (details, lines) => {
        'use server'
        const songId = await saveSong(details, lines)
        redirect(`/songs/${songId}`)
      }}
      pageTitle='Creating a new song'
    />
  )
}
