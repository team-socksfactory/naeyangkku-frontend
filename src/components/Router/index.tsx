import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from '../Auth/Signin';
import Home from '../Home';
import OnBoarding from '../Common/OnBoarding';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<OnBoarding />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
