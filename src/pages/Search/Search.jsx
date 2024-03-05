import React, { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchSearchMovies } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchQuery] = useSearchParams('');
  const query = searchParams.get('query');
  const handleSubmit = (query) => {
    setSearchQuery({ query });
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
      <SearchForm query={query} handleSubmit={handleSubmit} />
      <MoviesList movies={searchResult} />
    </div>
  );
};
