import Link from "next/link";
import styles from "./css/Navbar.module.css";
import { auth, signOut, signIn } from "@/auth";
import { montserrat } from "@/app/fonts";

export default async function Navbar() {
  const session = await auth();

  return (
    <header>
      <nav className={styles.header}>
        {session && session?.user ? (
          <>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button className={montserrat.className} type="submit">Logout</button>
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

    </header>
  );
}
