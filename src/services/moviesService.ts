import axios from "axios";
import type { Movie } from "../types/movies";

interface MovieHTTPResponse {
  results: Movie[];
}
export default async function fetchMovies (query: string): Promise<Movie[]> {
    const myKey = import.meta.env.VITE_TMDB_TOKEN;
    const response = await axios.get<MovieHTTPResponse>('https://api.themoviedb.org/3/search/movie', {
        params: {
            query: `${query}`,
        },
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${myKey}`,
        }
    })
    console.log(response.data);
    return response.data.results
}

