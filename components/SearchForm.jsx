import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import styles from "./css/SearchForm.module.css";
import { montserrat } from "@/app/fonts";
import Image from "next/image";

export default function SearchForm({ query }) {
  return (
    <Form action="/songs" className="search-form">
      <div className={styles.search}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search for a song or artist..."
          className={montserrat.className}
        />

        {query ? (
          <SearchFormReset />
        ) : (
          <button
            type="submit"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <Image
              src="/search.png"
              alt="search"
              width={24}
              height={24}
              style={{ marginRight: 1 + "rem" }}
            />
          </button>
        )}
      </div>
    </Form>
  );
}
