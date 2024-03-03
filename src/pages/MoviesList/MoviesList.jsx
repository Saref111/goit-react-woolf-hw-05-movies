import React from "react";
import { Link } from "react-router-dom";
import css from "./MoviesList.module.scss";

export const MoviesList = ({movies}) => {
    return (
        <div>
            <ul className={css.list}>
                {movies?.map((movie) => (
                    <li key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
