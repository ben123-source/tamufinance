import React from "react";
import Home from "./pages/Home";
import Finances from "./pages/Finances";
import Calendar from "./pages/calendar";
import Investment from "./pages/investments";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Basic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/investment" element={<Investment />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
