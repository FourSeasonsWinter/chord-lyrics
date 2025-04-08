import { montserrat } from "@/app/fonts";
import "./App.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chord Lyrics",
  description: "A tool for song writing and guitar music theory.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Footer />
        <Navbar />
      </body>
    </html>
  );
}
