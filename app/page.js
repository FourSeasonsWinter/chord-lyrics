import SignInSection from "@/app/components/SingInSection";
import styles from "./page.module.css";
import PopularSongs from "@/app/components/PopularSongs";
import Footer from "@/app/components/Footer";

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
