import styles from "./css/Navbar.module.css";
import { auth, signOut, signIn } from "@/auth";
import { montserrat } from "@/app/fonts";
import Image from "next/image";

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
              <button className={montserrat.className} type="submit">
                <Image src="/logo.png" alt="user image" width={48} height={48} className={styles.image} />
              </button>
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
