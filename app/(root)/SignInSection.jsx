import { signIn } from "@/auth";
import styles from "./SignIn.module.css";
import { montserrat } from "../fonts";

export default async function SignInSection() {
  return (
    <section className={styles.signIn}>
      <h2>Sign in to write the lyrics and chords!</h2>
      <div>
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button type="submit">
            <span className={montserrat.className}>Google</span>
          </button>
        </form>
        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <button type="submit">
            <span className={montserrat.className}>GitHub</span>
          </button>
        </form>
      </div>
    </section>
  );
}
