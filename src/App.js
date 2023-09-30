import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Main from "./components/Main";
import About from "./components/About";
import Team from "./components/Team";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/team" element={<Team />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
