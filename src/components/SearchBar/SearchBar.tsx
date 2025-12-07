import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
interface OnSubmitSearchBAr {
  onSubmit: (value: string) => void;
}
export default function SearchBar({ onSubmit }: OnSubmitSearchBAr) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = event.currentTarget;
    const formData = new FormData(value);
    const searchEl = formData.get("query") as string;

    if (!searchEl || searchEl.trim() === "") {
      return toast.error("Please enter your search query.");
    }

    onSubmit(searchEl);
    event.currentTarget.reset();
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies... "
            autoFocus
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
