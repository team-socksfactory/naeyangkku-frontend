import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from '../Auth/Signin';
import Home from '../Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign" element={<Signin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
