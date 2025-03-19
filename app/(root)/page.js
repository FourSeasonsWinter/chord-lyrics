import SignInSection from "./SignInSection";
import PopularSongs from "./PopularSongs";
import Footer from "@/components/Footer";
import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";

export default async function Home({ searchParams }) {
  const session = await auth();
  const query = (await searchParams).query;

  return (
    <>
      <Link href="/">
        <h1 className="title">Chord Lyrics</h1>
      </Link>
      
      <SearchForm query={query} />
      <PopularSongs />

      {session && session?.user ? (
        <span>TODO - load user's songs</span>
      ) : (
        <SignInSection />
      )}

      <Footer />
    </>
  );
}
