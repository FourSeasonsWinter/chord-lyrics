export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function saveSong(details, lines, userId) {
  "use server";

  // save details
  const songPostRes = await fetch(process.env.NEXT_PUBLIC_SONGS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, details }),
  });

  if (!songPostRes.ok) {
    console.error("failed saving song details");
    return;
  }

  // save lyrics

  const song = await songPostRes.json();
  const songId = song.id;

  const lastLine = lines[lines.length - 1];
  if (lastLine.chords === "" && lastLine.lyrics === "")
    lines = lines.slice(0, lines.length - 1);

  const response = await fetch(process.env.NEXT_PUBLIC_LYRICS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ songId, lines }),
  });

  if (!response.ok) {
    console.error("failed saving lyrics");
    return;
  }

  return song.id;
}

export async function updateSong(details, lines, songId) {
  "use server";

  // update details
  await fetch(`${process.env.NEXT_PUBLIC_SONGS_URL}/${songId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  });

  // update lyrics
  await fetch(`${process.env.NEXT_PUBLIC_LYRICS_URL}/${songId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lines),
  });
}
