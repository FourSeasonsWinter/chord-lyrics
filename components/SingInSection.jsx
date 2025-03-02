import styles from "./css/SingIn.module.css";

export default function SignInSection() {
  return (
    <section className={styles.signIn}>
      <h2>Sign in to write the lyrics and chords!</h2>
      <div>
        <span>Google</span>
        <span>GitHub</span>
      </div>
    </section>
  );
}
