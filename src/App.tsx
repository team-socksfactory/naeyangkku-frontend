import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DecorativePage from "./components/DecorativePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/decorativepage" element={<DecorativePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
