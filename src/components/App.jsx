import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/api";

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetchTrendingMovies();
      setMovies(response.data);
      console.log(111);
    };

    try {
      fetchMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
