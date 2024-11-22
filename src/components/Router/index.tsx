import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from '../Auth/Signin';
import Home from '../Home';
import Write from '../Write';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
