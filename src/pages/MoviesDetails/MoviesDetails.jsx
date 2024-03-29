import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import css from './MoviesDetails.module.scss';
import { DEFAULT_IMG } from '../../constants';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovie = async () => {
      const response = await fetchMovieDetails(movieId);
      setMovie(response.data);
    };

    try {
      fetchMovie();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      <NavLink to={location.state?.from || '/'}>Back to movies</NavLink>
      {movie && (
        <section className={css.section}>
          <img
            src={
              movie.backdrop_path ? 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.backdrop_path : DEFAULT_IMG
            }
            alt={movie.title}
            width={600}
            height={900}
          />
          <div>
            <h1>{movie.title}</h1>
            <p>User score: {movie.popularity}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres:</h2>
            <p>{movie.genres.map((it) => it.name).join(', ')}</p>
          </div>
        </section>
      )}
      <ul className={css.subNav}>
        <li>
          <NavLink className={css.subNavLink} to={`/movies/${movieId}/cast`}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={css.subNavLink} to={`/movies/${movieId}/reviews`}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
