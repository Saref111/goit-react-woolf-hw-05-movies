import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import css from './Cast.module.scss';

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchCast = async () => {
            const response = await fetchMovieCast(movieId);
            setCast(response.data.cast);
        };

        try {
            fetchCast();
        } catch (error) {
            console.log(error);
        }
    }, [movieId]);
    return (
        <div>
            <ul className={css.castList}>
                {cast?.map((actor) => (
                    <li className={css.castItem} key={actor.id}>
                        <img
                            src={
                                actor.profile_path ? 'https://image.tmdb.org/t/p/w200' + actor.profile_path : defaultImg
                            }
                            alt={actor.name}
                            width={100}
                            height={150}
                        />
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
