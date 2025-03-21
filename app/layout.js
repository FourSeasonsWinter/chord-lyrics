import { montserrat } from "@/app/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Chord Lyrics",
  description: "A tool for song writing and guitar music theory.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
