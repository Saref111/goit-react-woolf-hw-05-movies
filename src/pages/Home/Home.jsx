import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import { Link } from "react-router-dom";

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
            <ul>
                {movies?.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
