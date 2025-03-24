import { auth } from "@/auth";
import LineRead from "./LineRead";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const songId = (await params).songId;
  const songRes = await fetch(`${process.env.NEXT_PUBLIC_SONGS_URL}/${songId}`);

  if (songRes.status === 404)
    return (
      <div className={styles.notFound}>
        <h2>song not found</h2>
        <Link href="/songs">back to song list</Link>
      </div>
    );

  const lyricsRes = await fetch(
    `${process.env.NEXT_PUBLIC_LYRICS_URL}/${songId}`
  );
  const lines = await lyricsRes.json();
  const song = await songRes.json();
  const { title, artist } = song;

  let canEdit = false;
  const session = await auth();
  if (session && session.id === song.user_id) canEdit = true;

  return (
    <div className={styles.page}>
      <div className={styles.songInfo}>
        <div>
          <h1>{title}</h1>
          <h2>{artist}</h2>
        </div>
      </div>
      <hr />
      <div className={styles.lines}>
        {lines.map((line, index) => {
          return (
            <LineRead
              key={index}
              chords={line.chords_text}
              lyrics={line.lyric_text}
            />
          );
        })}
      </div>
      {canEdit && (
        <button
          className={styles.editButton}
          onClick={async () => {
            "use server";
            redirect(`/songs/writing/${songId}`)
          }}
        >
          <Image src="/edit.png" alt="edit" width={24} height={24} />
        </button>
      )}
    </div>
  );
}
