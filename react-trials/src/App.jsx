import "./css/App.css";
import React from "react"; 
import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorites.jsx"; 
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contextx/MovieContext.jsx";

function App() {
  return (
    <MovieProvider>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App;
