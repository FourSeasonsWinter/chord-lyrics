"use client";

import { roboto } from "@/app/fonts";
import styles from "./css/Line.module.css";
import { useState } from "react";

export default function LineWrite() {
  return (
    <div className={`${styles.line} ${styles.editmode} ${roboto.className}`}>
      <input
        className={`${styles.chords} ${roboto.className}`}
        type="text"
        placeholder="Chords..."
        spellCheck="false"
      />
      <input
        className={roboto.className}
        type="text"
        placeholder="Lyrics..."
        spellCheck="false"
      />
    </div>
  );
}
