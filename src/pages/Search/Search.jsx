import React, { useEffect, useState } from 'react';
import { MoviesList } from 'pages/MoviesList/MoviesList';
import { fetchSearchMovies } from 'services/api';
import { useSearchParams } from 'react-router-dom';

export const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchQuery] = useSearchParams('');
  const query = searchParams.get('query');
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery({ query: e.target.elements[0].value });
  };

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    const fetchSearchResult = async () => {
      const response = await fetchSearchMovies(searchParams.get('query'));
      setSearchResult(response.data.results);
    };

    try {
      fetchSearchResult();
    } catch (error) {
      console.log(error);
    }
  }, [query, searchParams]);
  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={searchResult} />
    </div>
  );
};
