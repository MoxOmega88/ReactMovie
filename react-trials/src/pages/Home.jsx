import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const movies = [
    {
      id: 1, 
      title: "The Shawshank Redemption", 
      release_date: "1994", 
      url: "https://media-amazon.com"
    },
    {
      id: 2, 
      title: "The Godfather", 
      release_date: "1972", 
      url: "https://media-amazon.com"
    },
    {
      id: 3, 
      title: "The Dark Knight", 
      release_date: "2008", 
      url: "https://media-amazon.com"
    }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(searchQuery); // Fixed typo from searc1hQuery
    setSearchQuery(""); // Clears the box cleanly
  };

  // Filter movies safely before mapping them to the UI
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      {/* Search Form Box */}
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input 
          type="text" 
          placeholder="Search for movies..." 
          className="search-input" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {/* Movies Grid */}
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
