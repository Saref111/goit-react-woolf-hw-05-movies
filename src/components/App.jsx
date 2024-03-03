import React, { Suspense } from 'react';
import { Home } from 'pages/Home/Home';
import { MoviesDetails } from 'pages/MoviesDetails/MoviesDetails';
import { Cast } from 'pages/Cast/Cast';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { Search } from 'pages/Search/Search';
import { Reviews } from 'pages/Reviews/Reviews';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Search />} />
            <Route path="/movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast/>} />
              <Route path="reviews" element={<Reviews/>} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
