import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./assets/css/app.css";

import Homepage from "./pages/Homepage";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Congratulation from "./pages/Congratulation";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/categories/:idc" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/congratulation" element={<Congratulation />} />
          <Route exact path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
