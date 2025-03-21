"use client";

import Link from "next/link";
import styles from "./css/SearchForm.module.css";

export default function SearchFormReset() {
  function reset() {
    console.log("reset");
    const form = document.querySelector(".search-form");

    if (form) form.reset();
  }

  return (
    <button type="reset" onClick={reset} className={styles.button}>
      <Link href="/songs">
        <img src="close.png" alt="clear" width={24} height={24} />
      </Link>
    </button>
  );
}
