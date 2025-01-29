import "./globals.css";

export const metadata = {
  title: "Chord Lyrics",
  description: "A tool for song writing and guitar music theory.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
