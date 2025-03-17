import Link from "next/link";
import styles from "./css/Navbar.module.css";
import { auth, signOut, signIn } from "@/auth";
import { montserrat } from "../fonts";

export default async function Navbar() {
  const session = await auth();

  return (
    <header>
      <nav className={styles.header}>
        <Link href="/">
          <h1 className={styles.title}>Chord Lyrics</h1>
        </Link>

        {session && session?.user ? (
          <>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button className={montserrat.className} type="submit">{session?.user?.name}</button>
            </form>
          </>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button className={montserrat.className} type="submit">Login</button>
          </form>
        )}
      </nav>

      <p className={styles.paragraph}></p>
    </header>
  );
}
