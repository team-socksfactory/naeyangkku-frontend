import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signin from '../Auth/Signin';
import Home from '../Home';
import DecorativePage from '../DecorativePage';
import token from 'src/libs/token/token';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'src/constants/token.constants';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {token.getToken(ACCESS_TOKEN_KEY) && token.getToken(REFRESH_TOKEN_KEY) ? (
          <Route path="/:id" element={<Home />} />
        ) : (
          <Route path="/" element={<Navigate to="/sign" />} />
        )}
        <Route path="/" element={<Navigate to="/sign" />} />
        <Route path="/sign" element={<Signin />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/decorativepage" element={<DecorativePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
