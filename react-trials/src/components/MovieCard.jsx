

import React from "react"

function MovieCard({ movie }) {

  function onFavoriteClick() {
    alert("clicked")
  }
  return React.createElement(
    "div",
    { className: "movie-card" },
    React.createElement(
      "div",
      { className: "movie-poster" },
      React.createElement("img", { src: movie.url, alt: movie.title }),
      React.createElement(
        "div",
        { className: "movie-overlay" },
        React.createElement(
          "button",
          { className: "favorite-btn", onClick: onFavoriteClick },
          "♥"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "movie-info" },
      React.createElement("h3", null, movie.title),
      React.createElement("p", null, movie.release_date)
    )
  )
}

export default MovieCard