import Link from "next/link";
import styles from "./UserSongsSection.module.css";
import SongsCarousel from "@/components/SongsCarousel";

export default async function UserSongsSection(id) {
  const result = await fetch(`${process.env.NEXT_PUBLIC_SONGS_URL}/user/${id.id}`);
  const userSongs = await result.json();

  return (
    <>
      <h3 className={styles.title}>Your collection</h3>
      {result.ok && userSongs.length > 0 ? (
        <SongsCarousel songs={userSongs} />
      ) : (
        <div className={styles.linkContainer}>
          <Link href="/songs/writing" className={styles.link}>
            Start writing!
          </Link>
        </div>
      )}
    </>
  );
}
