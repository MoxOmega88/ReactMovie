//it is better to create a separate file for API calls to keep the code organized and maintainable. This file can contain functions that handle API requests and responses, making it easier to manage and reuse them throughout the application.

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

if (!API_KEY) {
  throw new Error("Missing VITE_TMDB_API_KEY environment variable.");
}

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

//this function fetches popular movies from the API using the provided API key and base URL. It returns the results as an array of movie objects. You can call this function in your components to get the popular movies and display them in your application.
//async functions are used to handle asynchronous operations, such as fetching data from an API. The await keyword is used to wait for the response from the fetch call before proceeding to the next line of code. This allows for cleaner and more readable code when dealing with asynchronous operations.

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
};

//this function fetches popular movies based on a search query from the API using the provided API key and base URL. It returns the results as an array of movie objects. You can call this function in your components to get the popular movies based on user input and display them in your application. The encodeURIComponent function is used to ensure that the query string is properly formatted for the URL.

export default {
  getPopularMovies,
  searchMovies,
};