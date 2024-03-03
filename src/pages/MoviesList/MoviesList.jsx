import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.scss';
import { DEFAULT_IMG } from '../../constants';


export const MoviesList = ({ movies }) => {
    const location = useLocation();
  return (
    <div>
      <ul className={css.list}>
        {movies?.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{from: location}}>
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : DEFAULT_IMG}
                alt={movie.title}
              />
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
