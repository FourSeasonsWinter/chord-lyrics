import SignInSection from './SignInSection'
import PopularSongs from './PopularSongs'
import { auth } from '@/auth'
import SearchForm from '@/components/SearchForm'
import Link from 'next/link'
import UserSongsSection from './UserSongsSection'
import { Suspense } from 'react'

export default async function Home() {
  const session = await auth()

  return (
    <>
      <Link href="/">
        <h1 className="title">Chord Lyrics</h1>
      </Link>

      <SearchForm />

      <h3 style={{ padding: '0 1rem' }}>Popular songs</h3>
      <Suspense fallback={<p style={{ padding: '1rem' }}>Loading...</p>}>
        <PopularSongs />
      </Suspense>

      {session && session?.user ? (
        <UserSongsSection id={session.id} />
      ) : (
        <SignInSection />
      )}
    </>
  )
}
