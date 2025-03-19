import SongList from "@/app/songs/SongList";
import SearchForm from "@/components/SearchForm";

export default function Page() {
  return (
    <>
      <h1 style={{padding: 1 + "rem"}}>Songs</h1>
      <SearchForm query={""} />
      <SongList />
    </>
  )
}
