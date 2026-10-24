import "./App.css";
import React from "react"; 
import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorites.jsx"; 
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;
