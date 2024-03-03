import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

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
    return <h1>Cast</h1>;
}
