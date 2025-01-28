"use client";

import Fretboard from "@/components/Fretboard";
import SearchList from "@/components/SearchList";
import { getScale } from "@/lib/scales";
import { useState } from "react";

export default function Page() {
  const [scale, setScale] = useState([]);

  function handleScaleSelection(scaleName) {
    const values = scaleName.split(" ");
    const note = values[0];
    let type = values[1];

    if (values.length > 2)
      type = type + " " + values[2];

    const scale = getScale(note, type);

    setScale(scale);
  }

  return (
    <>
      <SearchList
        onSelect={(scale) => {
          handleScaleSelection(scale);
        }}
      />
      <Fretboard scale={scale} />
    </>
  );
}
