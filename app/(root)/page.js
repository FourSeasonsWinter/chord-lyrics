import SignInSection from "./SignInSection";
import PopularSongs from "./PopularSongs";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <PopularSongs />
      <SignInSection />
      <Footer />
    </>
  );
}
