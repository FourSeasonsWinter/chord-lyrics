import SignInSection from './(root)/SignInSection'
import PopularSongs from './(root)/PopularSongs'
import { auth } from '@/auth'
import SearchForm from '@/components/SearchForm'
import UserSongsSection from './(root)/UserSongsSection'
import { Suspense } from 'react'

export default async function Home() {
  const session = await auth()

  return (
    <>
      <h1 className='title'>Chord Lyrics</h1>
      <SearchForm />
  
      <h3 style={{ padding: '0 1rem' }}>Popular songs</h3>
      <Suspense fallback={<p style={{ padding: '1rem' }}>Loading...</p>}>
        <PopularSongs />
      </Suspense>

      {session && session?.user ? (
        <Suspense fallback={<p style={{ padding: '1rem' }}>Loading...</p>}>
          <UserSongsSection id={session.id} />
        </Suspense>
      ) : (
        <SignInSection />
      )}
    </>
  )
}
