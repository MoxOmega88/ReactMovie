import "../css/Favorites.css";
import {useMovieContext} from "../contextx/MovieContext"
import MovieCard from "../components/MovieCard";
function Favorites() {

  const {favorites} = useMovieContext();
  if(favorites){
    return (
      <div className="favorites-container">
        <h1>Favorites</h1>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h1>No favorites yet</h1>
      <p>start adding some!</p>
    </div>
  );
}

export default Favorites;