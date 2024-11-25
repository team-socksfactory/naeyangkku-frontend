import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DecorativePage from "./components/DecorativePage";
import React, { useState } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Router from './components/Router';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      })
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/decorativepage" element={<DecorativePage />} />
      </Routes>
    </BrowserRouter>
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;
