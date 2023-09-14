import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "../pages/Home";
import Locator from "../pages/Locator";
import Components from "../pages/Components";

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between px-3 py-2 bg-green-400 font-medium">
        <h1>Logo</h1>
        <div className="flex gap-4 text-sm pr-2">
          <Router>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="../pages/Locator">Locator</Link>
              </li>
              <li>
                <Link to="../pages/Components">Components</Link>
              </li>
            </ul>
            <Routes>
              <Route exact path="../pages/Home" element={<Home />}></Route>
              <Route
                exact
                path="../pages/Locator"
                element={<Locator />}
              ></Route>
              <Route
                exact
                path="../pages/Components"
                element={<Components />}
              ></Route>
            </Routes>
          </Router>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
