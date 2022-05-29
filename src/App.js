import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./assets/css/app.css";

import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
