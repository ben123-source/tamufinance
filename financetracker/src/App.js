import React from "react";
import Home from "./pages/Home";
import About from "./pages/about";
import Calendar from "./pages/calendar";
import Community from "./pages/community";
import Investment from "./pages/investments";
import Stories from "./pages/stories";
import Support from "./pages/support";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Basic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/success stories" element={<Stories />} />
        <Route path="/support" element={<Support />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
