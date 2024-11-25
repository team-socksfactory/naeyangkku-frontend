import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from '../Auth/Signin';
import Home from '../Home';
import Write from '../Write';
import Modal from "../Write/Modal/index"
import DecorativePage from "../DecorativePage/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/decorativePage" element={<DecorativePage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
