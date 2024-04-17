import "../App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "../components/NavBar/Navbar.tsx";
import Main from "../components/Main/Main.tsx";
import Javascript from "../components/Javascript/Javascript.tsx";
import Angular from "../components/Angular/Angular.tsx";
import ReactApp from "../components/React/React.tsx";
import NotFound from "../pages/NotFound.tsx";
import Change from "../components/Change/Change.tsx";

function App() {
  return (
    <div>
      <Change>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Javascript" element={<Javascript />} />
            <Route path="/Angular" element={<Angular />} />
            <Route path="/React" element={<ReactApp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Change>
    </div>

  );
}

export default App;
