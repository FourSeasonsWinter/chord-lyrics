import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SongForm from "./SongForm";

export default async function Page() {
  const session = await auth();
  if (!session) redirect("/");

  const userId = session.id;

  async function handleSubmit(details, lines) {
    "use server";

    // save details
    const res = await fetch(process.env.NEXT_PUBLIC_SONGS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, details }),
    });

    if (!res.ok) {
      console.error("failed saving song details");
      return;
    }

    const song = await res.json();
    const songId = song.id;

    // save lyrics
    const lastLine = lines[lines.length - 1];
    if (lastLine.chords === "" && lastLine.lyrics === "")
      lines = lines.slice(0, lines.length - 1);

    const response = await fetch(process.env.NEXT_PUBLIC_LYRICS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ songId, lines }),
    });

    if (!response.ok) {
      console.error("failed saving lyrics");
      return;
    }

    redirect(`/songs/${songId}`)
  }

  return (
    <>
      <SongForm onSongSubmit={handleSubmit} />
    </>
  );
}
