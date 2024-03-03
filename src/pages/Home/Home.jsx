import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import { MoviesList } from "pages/MoviesList/MoviesList";

export const Home = () => {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetchTrendingMovies();
      setMovies(response.data.results);
    };

    try {
      fetchMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);
    return (
        <div>
            <MoviesList movies={movies}/>
        </div>
    );
};
