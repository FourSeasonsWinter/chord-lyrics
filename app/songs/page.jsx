import SongList from "@/app/songs/SongList";
import SearchForm from "@/components/SearchForm";

export default async function Page({ searchParams }) {
  let query = (await searchParams).query;

  return (
    <>
      <h1 style={{ padding: 1 + "rem" }}>Songs</h1>
      <SearchForm query={query} />
      <SongList search={query || undefined} />
    </>
  );
}
