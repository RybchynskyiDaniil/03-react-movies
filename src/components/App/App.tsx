// import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import fetchMovies from "../../services/moviesService";
// import type { Movie } from "../../types/movies";
import SearchBar from "../SearchBar/SearchBar";
export default function App() {
  // const [Movies, setMovies] = useState<Movie[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setError] = useState(false);
  const handleSubmit = async (query: string) => {
    try {
      // setIsLoading(true);
      // setError(false);
      const data = await fetchMovies(query);
      if (data.length === 0) {
        toast.error("No movies found for your request.");
        return;
      }
      setMovies(data);
    } catch {
      // setError(true);
    } finally {
      // setIsLoading(false);
    }
  };
  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSubmit} />
    </>
  );
}
