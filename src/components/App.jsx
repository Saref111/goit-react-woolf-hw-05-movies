import React, { Suspense } from 'react';
import { Home } from 'pages/Home/Home';
import { MoviesDetails } from 'pages/MoviesDetails/MoviesDetails';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
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
            <Route path="/movies/:movieId" element={<MoviesDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
