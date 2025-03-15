import SignInSection from "@/components/SingInSection";
import styles from "./page.module.css";
import PopularSongs from "@/components/PopularSongs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Chord Lyrics</h1>
      <p className={styles.paragraph}></p>

      <PopularSongs />
      <SignInSection />
      <Footer />
    </>
  );
}
