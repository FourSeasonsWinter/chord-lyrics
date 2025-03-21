import SignInSection from "./SignInSection";
import PopularSongs from "./PopularSongs";
import Footer from "@/components/Footer";
import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";
import UserSongsSection from "./UserSongsSection";

export default async function Home() {
  const session = await auth();
  if (session)
    console.log(session.id)
  
  return (
    <>
      <Link href="/">
        <h1 className="title">Chord Lyrics</h1>
      </Link>
      
      <SearchForm />
      <PopularSongs />

      {session && session?.user ? (
        <UserSongsSection id={session.id} />
      ) : (
        <SignInSection />
      )}

      <Footer />
    </>
  );
}
