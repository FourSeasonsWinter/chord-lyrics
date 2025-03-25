import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SongForm from "./SongForm";
import { saveSong } from "@/lib/utils";

export default async function Page() {
  const session = await auth();
  if (!session) redirect("/");

  const userId = session.id;

  return (
    <>
      <h1 style={{ padding: 0.6 + "rem", opacity: 0.3 }}>New song</h1>
      <SongForm
        onSongSubmit={async (details, lines) => {
          "use server";
          const songId = await saveSong(details, lines, userId);
          redirect(`/songs/${songId}`);
        }}
      />
    </>
  );
}
