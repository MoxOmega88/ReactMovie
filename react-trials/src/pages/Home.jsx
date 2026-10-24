import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import "../css/Home.css";
import { getPopularMovies } from "../services/api.js";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //useEffect is used to fetch popular movies when the component mounts. It sets the movies state with the fetched data and handles any errors that may occur during the fetch operation. The loading state is used to display a loading message while the data is being fetched.
  //if nothing is returned from the API, it will return an empty array and the UI will display "No movies found." This ensures that the application handles cases where the API does not return any results gracefully.
  //it will render only once when the component mounts, and it will not re-render when the search query changes. This is because the useEffect hook has an empty dependency array, which means it only runs once when the component mounts. If you want to fetch popular movies again when the search query changes, you can add searchQuery to the dependency array of the useEffect hook.

  useEffect(() => {
    let isMounted = true;

    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();

        if (isMounted) {
          setMovies(popularMovies);
          setError(null);
        }
      } catch (error) {
        console.error("Failed to load popular movies:", error);

        if (isMounted) {
          setError("Failed to load popular movies. Please try again later.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadPopularMovies();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSearchSubmit = async(e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return; // Prevent empty searches
    if(loading) return; // Prevent search while loading
    setLoading(true);
    // Fixed typo from searc1hQuery
    try{
      // Simulate an API call
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.error("Failed to search movies:", error);
      setError("Failed to search movies. Please try again later.");}
      finally {
        setLoading(false);
      }
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

      {loading ?(
        <div className="loading">
          <p>Loading movies...</p>
        </div>
      ) : (
        <div className="movies-grid">
          {error && <p>{error}</p>}
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
