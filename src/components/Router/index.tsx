import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from '../Auth/Signin';
import Home from '../Home';
import DecorativePage from '../DecorativePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign" element={<Signin />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/decorativepage" element={<DecorativePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
