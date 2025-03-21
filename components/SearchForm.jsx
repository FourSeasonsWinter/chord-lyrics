import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import styles from "./css/SearchForm.module.css";
import { montserrat } from "@/app/fonts";

export default function SearchForm({ query }) {
  return (
    <Form action="/songs" className="search-form">
      <div className={styles.search}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search for a song..."
          className={montserrat.className}
        />

        {query && <SearchFormReset />}
      </div>
    </Form>
  );
}
