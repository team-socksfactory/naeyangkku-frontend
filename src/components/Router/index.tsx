import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signin from '../Auth/Signin';
import Home from '../Home';
import OnBoarding from '../Common/OnBoarding';
import Write from '../Write';
import Modal from '../Write/Modal/index';
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
          <Route path="/" element={<OnBoarding />} />
        )}
        <Route path="/sign" element={<Signin />} />
        <Route path="/" element={<OnBoarding />} />
        <Route path="/decorativePage/:id" element={<DecorativePage />} />
        <Route path="/write/:id" element={<Write />} />
        <Route path="/modal/:id" element={<Modal />} />
        <Route path="/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
