import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Result from "./pages/Result";
import About from "./pages/About";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Navbar always visible */}
        <Navbar />

        {/* Main content grows to fill space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/result" element={<Result />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
