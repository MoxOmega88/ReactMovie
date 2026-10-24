import {createContext, useState, useContext, useEffect} from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem('favorites');
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites(prev=>[...prev,movie]);
  }

  const removeFromFavorites = (movieId) => {
    setFavorites(prev=>prev.filter(movie=>movie.id!==movieId));
  }

  const ifFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId);
  }

  const value={
    favorites,
    addToFavorites,
    removeFromFavorites,
    ifFavorite
  }

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};



// Load favorites from localStorage on initial render
//children is a reserved prop in React that allows you to pass components as data to other components. It is used to create reusable and composable components in React.
//localStorage is a web storage API that allows you to store data in the browser. It is used here to persist the user's favorite movies across sessions. The favorites state is initialized with an empty array, and the useEffect hook is used to load the favorites from localStorage when the component mounts. Another useEffect hook is used to save the favorites to localStorage whenever the favorites state changes.
//contexts are a way to share state and functionality across components in a React application without having to pass props down through multiple levels of the component tree. The MovieContext is created using createContext, and the useMovieContext hook is provided to allow components to access the context value. The MovieProvider component wraps its children with the MovieContext.Provider, providing the favorites state and setFavorites function to any components that consume the context.