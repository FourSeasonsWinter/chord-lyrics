import styles from "./css/Navbar.module.css";
import { auth, signOut, signIn } from "@/auth";
import { montserrat } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className={styles.header}>
      <Link href="/">
        <Image src="/home.png" alt="to home" width={28} height={28} />
      </Link>

      <Link href="/songs/writing">
        <Image src="/write.png" alt="write song" width={28} height={28} />
      </Link>

      {session && session?.user ? (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className={montserrat.className}>
            <Image
              src={session.avatarUrl}
              alt="to user profile"
              width={28}
              height={28}
              className={styles.image}
            />
          </button>
        </form>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button className={montserrat.className} type="submit">
            <Image src="/person.png" alt="login" width={28} height={28} />
          </button>
        </form>
      )}
    </nav>
  );
}
